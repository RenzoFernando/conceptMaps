document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    // Módulo 1: Gestor de Estado Centralizado (Single Source of Truth)
    class StateManager {
        constructor() {
            this.state = {
                canvas: null,
                ctx: null,
                rootNode: null,
                hoveredNode: null,
                isPanning: false,
                panStart: { x: 0, y: 0 },
                offset: { x: 0, y: 0 },
                scale: 1.0,
                animationFrameId: null,
                searchResults: [],
                currentMatchIndex: -1,
                matchedSet: new Set(),
                areAllNodesExpanded: true,
                // Estado para gestos táctiles
                isPinching: false,
                lastPinchDistance: 0,
                touchPoints: []
            };
        }
        get(key) { return this.state[key]; }
        set(key, value) { this.state[key] = value; }
        getState() { return this.state; }
    }

    // Módulo 2: Gestor de Configuración
    class ConfigManager {
        constructor() {
            this.config = {
                NODE_MIN_WIDTH: 260,
                NODE_MIN_HEIGHT: 100,
                HORIZONTAL_SPACING: 160, // Aumentado para más espacio
                VERTICAL_SPACING: 70,   // Aumentado para más espacio
                LEVEL_COLORS: [],
                PADDING: 20,
                FONT_SIZES: { title: [20, 17, 15, 14, 13, 12, 11, 11], definition: [14, 13, 12, 11, 11, 10, 10, 10] },
                LINE_HEIGHTS: { title: [24, 21, 19, 18, 17, 16, 15, 15], definition: [18, 17, 16, 15, 15, 14, 14, 14] },
                MAX_ZOOM: 3.0,
                MIN_ZOOM: 0.1,
                ZOOM_SENSITIVITY: 0.1
            };
        }
        get(key) { return this.config[key]; }
        set(key, value) { this.config[key] = value; }
    }

    // Módulo 3: Gestor del DOM
    class DOMManager {
        constructor() {
            this.dom = {
                canvas: document.getElementById('mind-map-canvas'),
                mapSelector: document.getElementById('map-selector'),
                themeSelector: document.getElementById('theme-selector'),
                searchInput: document.getElementById('search-input'),
                toggleControlsBtn: document.getElementById('toggle-controls-btn'),
                topControls: document.getElementById('top-controls'),
                bottomControls: document.getElementById('bottom-controls'),
                toggleBottomControlsBtn: document.getElementById('toggle-bottom-controls-btn'),
                toggleAllBtn: document.getElementById('expand-all-btn'),
                zoomInBtn: document.getElementById('zoom-in-btn'),
                zoomOutBtn: document.getElementById('zoom-out-btn'),
                resetViewBtn: document.getElementById('reset-view-btn'),
                glossaryBtn: document.getElementById('glossary-btn'),
                modal: document.getElementById('glossary-modal'),
                modalCloseBtn: document.getElementById('modal-close-btn'),
                glossaryBody: document.getElementById('glossary-body'),
                exportSvgBtn: document.getElementById('export-svg-btn'),
                exportPngBtn: document.getElementById('export-png-btn'),
                exportPdfBtn: document.getElementById('export-pdf-btn'),
                themeStylesheet: document.getElementById('theme-stylesheet')
            };
        }
        get(key) { return this.dom[key]; }
    }

    // Módulo 4: Utilidades y Caché
    class Utils {
        constructor(stateManager) {
            this.state = stateManager.getState();
            this.textMetricsCache = new Map();
        }

        measureText(text, font) {
            const cacheKey = `${text}-${font}`;
            if (this.textMetricsCache.has(cacheKey)) {
                return this.textMetricsCache.get(cacheKey);
            }
            this.state.ctx.font = font;
            const metrics = this.state.ctx.measureText(text);
            this.textMetricsCache.set(cacheKey, metrics);
            return metrics;
        }

        getWrappedTextLines(text, maxWidth, font) {
            if (!text) return [];
            const words = String(text).split(' ');
            if (!words.length || words[0] === "") return [];
            let lines = [], currentLine = words[0];
            for (let i = 1; i < words.length; i++) {
                const testLine = currentLine + " " + words[i];
                if (this.measureText(testLine, font).width < maxWidth) {
                    currentLine = testLine;
                } else {
                    lines.push(currentLine);
                    currentLine = words[i];
                }
            }
            lines.push(currentLine);
            return lines;
        }

        wrapText(context, text, x, y, maxWidth, font, lineHeight) {
            context.font = font;
            const lines = this.getWrappedTextLines(text, maxWidth, font);
            lines.forEach((line, i) => context.fillText(line, x, y + i * lineHeight));
            return lines.length;
        }

        roundRect(context, x, y, w, h, r) {
            const radii = typeof r === 'number' ? { tl: r, tr: r, br: r, bl: r } : { tl: r.topLeft||0, tr: r.topRight||0, br: r.bottomRight||0, bl: r.bottomLeft||0 };
            context.beginPath();
            context.moveTo(x + radii.tl, y);
            context.lineTo(x + w - radii.tr, y);
            context.quadraticCurveTo(x + w, y, x + w, y + radii.tr);
            context.lineTo(x + w, y + h - radii.br);
            context.quadraticCurveTo(x + w, y + h, x + w - radii.br, y + h);
            context.lineTo(x + radii.bl, y + h);
            context.quadraticCurveTo(x, y + h, x, y + h - radii.bl);
            context.lineTo(x, y + radii.tl);
            context.quadraticCurveTo(x, y, x + radii.tl, y);
            context.closePath();
        }

        traverseTree(node, callback) {
            if (!node) return;
            callback(node);
            if (node.children && !node.collapsed) {
                node.children.forEach(child => this.traverseTree(child, callback));
            }
        }

        traverseAll(node, callback) {
            if (!node) return;
            callback(node);
            if (node.children) {
                node.children.forEach(child => this.traverseAll(child, callback));
            }
        }
    }

    // Módulo 5: Motor de Diseño (Layout Engine)
    class LayoutEngine {
        constructor(stateManager, configManager, utils) {
            this.state = stateManager.getState();
            this.config = configManager.config;
            this.utils = utils;
        }

        calculateNodeSize(node) {
            const level = node.level || 0;
            const safeLevel = Math.min(level, this.config.FONT_SIZES.title.length - 1);
            const titleFont = `700 ${this.config.FONT_SIZES.title[safeLevel]}px Inter, system-ui, sans-serif`;
            const defFont = `400 ${this.config.FONT_SIZES.definition[safeLevel]}px Inter, system-ui, sans-serif`;
            const titleLines = this.utils.getWrappedTextLines(node.title, this.config.NODE_MIN_WIDTH - this.config.PADDING * 2 - 8, titleFont);
            const defLines = this.utils.getWrappedTextLines(node.definition, this.config.NODE_MIN_WIDTH - this.config.PADDING * 2 - 8, defFont);
            const titleHeight = titleLines.length * this.config.LINE_HEIGHTS.title[safeLevel];
            const defHeight = defLines.length * this.config.LINE_HEIGHTS.definition[safeLevel];
            const textHeight = titleHeight + (defLines.length ? 8 : 0) + defHeight;
            node.width = this.config.NODE_MIN_WIDTH;
            node.height = Math.max(this.config.NODE_MIN_HEIGHT, textHeight + this.config.PADDING * 2);
        }

        calculateSubtreeHeight(node) {
            if (node.collapsed || !node.children || node.children.length === 0) {
                node.subtreeHeight = node.height;
                return node.height;
            }
            let childrenHeight = 0;
            node.children.forEach(child => {
                childrenHeight += this.calculateSubtreeHeight(child) + this.config.VERTICAL_SPACING;
            });
            childrenHeight -= this.config.VERTICAL_SPACING;
            node.subtreeHeight = Math.max(node.height, childrenHeight);
            return node.subtreeHeight;
        }

        positionNodes(node, level, yOffset, direction) {
            node.level = level;
            node.direction = direction;
            this.calculateNodeSize(node);
            const x = level * (this.config.NODE_MIN_WIDTH + this.config.HORIZONTAL_SPACING) * direction;
            node.x = direction === -1 ? x - node.width : x;
            if (node.collapsed || !node.children || node.children.length === 0) {
                node.y = yOffset;
                return;
            }
            const childrenTotalHeight = node.subtreeHeight - node.height;
            const firstChildY = yOffset - childrenTotalHeight / 2;
            node.y = yOffset - node.height / 2;
            let currentY = firstChildY;
            node.children.forEach(child => {
                const childCenterY = currentY + child.subtreeHeight / 2;
                this.positionNodes(child, level + 1, childCenterY, direction);
                currentY += child.subtreeHeight + this.config.VERTICAL_SPACING;
            });
        }

        runLayout(centerView = true) {
            if (!this.state.rootNode) return;
            const root = this.state.rootNode;
            root.level = 0;
            this.calculateNodeSize(root);
            if (!root.children || root.children.length === 0) {
                root.x = -root.width / 2;
                root.y = -root.height / 2;
            } else {
                const mid = Math.ceil(root.children.length / 2);
                const leftChildren = root.children.slice(0, mid);
                const rightChildren = root.children.slice(mid);
                let leftHeight = 0;
                leftChildren.forEach(child => {
                    leftHeight += this.calculateSubtreeHeight(child) + this.config.VERTICAL_SPACING;
                });
                if (leftChildren.length > 0) leftHeight -= this.config.VERTICAL_SPACING;
                let rightHeight = 0;
                rightChildren.forEach(child => {
                    rightHeight += this.calculateSubtreeHeight(child) + this.config.VERTICAL_SPACING;
                });
                if (rightChildren.length > 0) rightHeight -= this.config.VERTICAL_SPACING;
                root.x = -root.width / 2;
                root.y = -root.height / 2;
                let currentYLeft = root.y + root.height / 2 - leftHeight / 2;
                leftChildren.forEach(child => {
                    const childCenterY = currentYLeft + child.subtreeHeight / 2;
                    this.positionNodes(child, 1, childCenterY, -1);
                    currentYLeft += child.subtreeHeight + this.config.VERTICAL_SPACING;
                });
                let currentYRight = root.y + root.height / 2 - rightHeight / 2;
                rightChildren.forEach(child => {
                    const childCenterY = currentYRight + child.subtreeHeight / 2;
                    this.positionNodes(child, 1, childCenterY, 1);
                    currentYRight += child.subtreeHeight + this.config.VERTICAL_SPACING;
                });
            }
            if (centerView) {
                const rect = this.state.canvas.getBoundingClientRect();
                this.state.scale = 0.5;
                this.state.offset.x = rect.width / 2;
                this.state.offset.y = rect.height / 2;
            }
        }
    }

    // Módulo 6: Motor de Renderizado
    class Renderer {
        constructor(stateManager, configManager, utils) {
            this.state = stateManager.getState();
            this.config = configManager.config;
            this.utils = utils;
        }

        drawNode(node) {
            const { x, y, width, height, level } = node;
            const safeLevel = Math.min(level, this.config.LEVEL_COLORS.length - 1);
            const color = this.config.LEVEL_COLORS[safeLevel];
            const isExample = level >= 6;
            this.state.ctx.save();
            this.state.ctx.shadowColor = 'rgba(0, 0, 0, 0.10)';
            this.state.ctx.shadowBlur = this.state.hoveredNode === node ? 25 : 10;
            this.state.ctx.shadowOffsetX = 0;
            this.state.ctx.shadowOffsetY = this.state.hoveredNode === node ? 8 : 4;
            this.utils.roundRect(this.state.ctx, x, y, width, height, 12);
            this.state.ctx.fillStyle = isExample ? '#f8f9fa' : getComputedStyle(document.documentElement).getPropertyValue('--canvas-bg-color');
            this.state.ctx.fill();
            this.state.ctx.restore();
            this.state.ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--border-color');
            this.state.ctx.lineWidth = 1;
            if (isExample) this.state.ctx.setLineDash([4, 4]);
            this.utils.roundRect(this.state.ctx, x, y, width, height, 12);
            this.state.ctx.stroke();
            this.state.ctx.setLineDash([]);
            this.state.ctx.fillStyle = color;
            this.utils.roundRect(this.state.ctx, x, y, 8, height, { topLeft: 12, topRight: 0, bottomRight: 0, bottomLeft: 12 });
            this.state.ctx.fill();
            if (this.state.matchedSet.has(node)) {
                this.state.ctx.save();
                this.state.ctx.shadowColor = getComputedStyle(document.documentElement).getPropertyValue('--focus-ring-color');
                this.state.ctx.shadowBlur = 24;
                this.state.ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--primary-accent');
                this.state.ctx.lineWidth = 2.5;
                this.utils.roundRect(this.state.ctx, x, y, width, height, 12);
                this.state.ctx.stroke();
                this.state.ctx.restore();
            }
            const textX = x + this.config.PADDING + 4;
            const textMaxW = width - this.config.PADDING * 2 - 8;
            this.state.ctx.textAlign = 'left';
            this.state.ctx.textBaseline = 'top';
            const tSafe = Math.min(level, this.config.FONT_SIZES.title.length - 1);
            const titleFont = `${isExample ? '500' : '700'} ${this.config.FONT_SIZES.title[tSafe]}px Inter, system-ui, sans-serif`;
            this.state.ctx.fillStyle = (level === 0 || isExample) ? getComputedStyle(document.documentElement).getPropertyValue('--text-color') : color;
            const titleY = y + this.config.PADDING;
            const titleToDraw = isExample ? `Ejemplo: ${node.title}` : node.title;
            const titleLinesCount = this.utils.wrapText(this.state.ctx, titleToDraw, textX, titleY, textMaxW, titleFont, this.config.LINE_HEIGHTS.title[tSafe]);
            const dSafe = Math.min(level, this.config.FONT_SIZES.definition.length - 1);
            const defFont = `400 ${this.config.FONT_SIZES.definition[dSafe]}px Inter, system-ui, sans-serif`;
            const defY = titleY + titleLinesCount * this.config.LINE_HEIGHTS.title[tSafe] + (node.definition ? 8 : 0);
            this.state.ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--text-muted-color');
            this.utils.wrapText(this.state.ctx, node.definition, textX, defY, textMaxW, defFont, this.config.LINE_HEIGHTS.definition[dSafe]);
            if (node.children && node.children.length > 0) {
                const btnX = x + width - 14, btnY = y + 14;
                this.state.ctx.beginPath();
                this.state.ctx.arc(btnX, btnY, 9, 0, Math.PI * 2);
                this.state.ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--canvas-bg-color');
                this.state.ctx.fill();
                this.state.ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--border-color');
                this.state.ctx.lineWidth = 1;
                this.state.ctx.stroke();
                this.state.ctx.font = '700 12px Inter, system-ui, sans-serif';
                this.state.ctx.textAlign = 'center';
                this.state.ctx.textBaseline = 'middle';
                this.state.ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--text-muted-color');
                this.state.ctx.fillText(node.collapsed ? '+' : '−', btnX, btnY + 1);
            }
        }

        drawConnection(fromNode, toNode) {
            const dir = toNode.direction;
            const startX = fromNode.level === 0 ? fromNode.x + fromNode.width / 2 : (fromNode.direction === 1 ? fromNode.x + fromNode.width : fromNode.x);
            const startY = fromNode.y + fromNode.height / 2;
            const endX = dir === 1 ? toNode.x : toNode.x + toNode.width;
            const endY = toNode.y + toNode.height / 2;
            const cp1x = startX + (endX - startX) * 0.5;
            this.state.ctx.beginPath();
            this.state.ctx.moveTo(startX, startY);
            this.state.ctx.bezierCurveTo(cp1x, startY, cp1x, endY, endX, endY);
            this.state.ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--border-color');
            this.state.ctx.lineWidth = 2.5;
            this.state.ctx.stroke();
            if (toNode.connectorLabel) {
                const labelText = toNode.connectorLabel;
                const font = 'italic 500 13px Inter, system-ui, sans-serif';
                const textMetrics = this.utils.measureText(labelText, font);
                const textWidth = textMetrics.width;
                const textHeight = 13;
                const t = 0.5; // Punto medio de la curva de Bézier
                const labelX = (1 - t) ** 2 * startX + 2 * (1 - t) * t * cp1x + t ** 2 * endX;
                const labelY = (1 - t) ** 2 * startY + 2 * (1 - t) * t * endY + t ** 2 * endY;
                const angle = Math.atan2(endY - startY, endX - startX);
                const padding = 4;
                this.state.ctx.save();
                this.state.ctx.translate(labelX, labelY);
                this.state.ctx.rotate(angle > Math.PI / 2 || angle < -Math.PI / 2 ? angle - Math.PI : angle);
                this.state.ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--canvas-bg-color');
                this.state.ctx.fillRect(-textWidth / 2 - padding, -textHeight / 2 - padding, textWidth + padding * 2, textHeight + padding * 2);
                this.state.ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--text-muted-color');
                this.state.ctx.textAlign = 'center';
                this.state.ctx.textBaseline = 'middle';
                this.state.ctx.font = font;
                this.state.ctx.fillText(labelText, 0, 0);
                this.state.ctx.restore();
            }
        }

        drawWelcomeMessage() {
            const rect = this.state.canvas.getBoundingClientRect();
            this.state.ctx.save();
            this.state.ctx.textAlign = 'center';
            this.state.ctx.textBaseline = 'middle';
            this.state.ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--text-muted-color');
            this.state.ctx.font = '500 18px Inter, system-ui, sans-serif';
            this.state.ctx.fillText('Por favor, selecciona un mapa para comenzar', rect.width / 2, rect.height / 2);
            this.state.ctx.restore();
        }

        render() {
            const dpr = window.devicePixelRatio || 1;
            const rect = this.state.canvas.getBoundingClientRect();
            if (this.state.canvas.width !== rect.width * dpr || this.state.canvas.height !== rect.height * dpr) {
                this.state.canvas.width = rect.width * dpr;
                this.state.canvas.height = rect.height * dpr;
                this.state.ctx.scale(dpr, dpr);
            }
            this.state.ctx.clearRect(0, 0, this.state.canvas.width, this.state.canvas.height);
            if (!this.state.rootNode) {
                this.drawWelcomeMessage();
                return;
            }
            this.state.ctx.save();
            this.state.ctx.translate(this.state.offset.x, this.state.offset.y);
            this.state.ctx.scale(this.state.scale, this.state.scale);
            this.utils.traverseTree(this.state.rootNode, node => {
                if (node.children && !node.collapsed) {
                    node.children.forEach(child => this.drawConnection(node, child));
                }
            });
            this.utils.traverseTree(this.state.rootNode, node => this.drawNode(node));
            this.state.ctx.restore();
        }

        requestRedraw() {
            if (!this.state.animationFrameId) {
                this.state.animationFrameId = requestAnimationFrame(() => {
                    this.render();
                    this.state.animationFrameId = null;
                });
            }
        }
    }

    // Módulo 7: Gestor de Interacciones (Ratón y Táctil)
    class InteractionHandler {
        constructor(stateManager, domManager, layoutEngine, renderer) {
            this.state = stateManager.getState();
            this.config = new ConfigManager().config;
            this.dom = domManager.dom;
            this.layoutEngine = layoutEngine;
            this.renderer = renderer;
            this.bindEvents();
        }

        getHoveredNode(mouseX, mouseY) {
            const wx = (mouseX - this.state.offset.x) / this.state.scale;
            const wy = (mouseY - this.state.offset.y) / this.state.scale;
            let found = null;
            const find = (node) => {
                if (!node || found) return;
                if (wx >= node.x && wx <= node.x + node.width && wy >= node.y && wy <= node.y + node.height) {
                    found = node;
                    return;
                }
                if (node.children && !node.collapsed) {
                    for (let i = node.children.length - 1; i >= 0; i--) {
                        find(node.children[i]);
                    }
                }
            };
            find(this.state.rootNode);
            return found;
        }

        // --- Eventos de Ratón ---
        handleMouseDown(e) {
            this.state.isPanning = true;
            this.state.panStart = { x: e.clientX - this.state.offset.x, y: e.clientY - this.state.offset.y };
            this.dom.canvas.style.cursor = 'grabbing';
        }

        handleMouseUp() {
            this.state.isPanning = false;
            this.dom.canvas.style.cursor = this.state.hoveredNode ? 'pointer' : 'grab';
        }

        handleMouseMove(e) {
            if (this.state.isPanning) {
                this.state.offset.x = e.clientX - this.state.panStart.x;
                this.state.offset.y = e.clientY - this.state.panStart.y;
                this.renderer.requestRedraw();
            } else {
                const rect = this.dom.canvas.getBoundingClientRect();
                const newHovered = this.getHoveredNode(e.clientX - rect.left, e.clientY - rect.top);
                if (newHovered !== this.state.hoveredNode) {
                    this.state.hoveredNode = newHovered;
                    this.dom.canvas.style.cursor = this.state.hoveredNode ? 'pointer' : 'grab';
                    this.renderer.requestRedraw();
                }
            }
        }

        handleWheel(e) {
            e.preventDefault();
            this.zoomAtPoint(e.deltaY < 0 ? 1.1 : 0.9, e.clientX, e.clientY);
        }

        handleDblClick() {
            if (this.state.hoveredNode && this.state.hoveredNode.children && this.state.hoveredNode.children.length > 0) {
                this.state.hoveredNode.collapsed = !this.state.hoveredNode.collapsed;
                this.layoutEngine.runLayout(false);
            }
        }

        // --- Eventos Táctiles ---
        handleTouchStart(e) {
            e.preventDefault();
            const touches = e.touches;
            this.state.touchPoints = Array.from(touches).map(t => ({ x: t.clientX, y: t.clientY }));
            if (touches.length === 1) {
                this.handleMouseDown(touches[0]);
            } else if (touches.length === 2) {
                this.state.isPinching = true;
                this.state.lastPinchDistance = this.getPinchDistance();
            }
        }

        handleTouchMove(e) {
            e.preventDefault();
            const touches = e.touches;
            if (touches.length === 1 && this.state.isPanning) {
                this.handleMouseMove(touches[0]);
            } else if (touches.length === 2 && this.state.isPinching) {
                const newDist = this.getPinchDistance();
                const scaleFactor = newDist / this.state.lastPinchDistance;
                const center = this.getPinchCenter();
                this.zoomAtPoint(scaleFactor, center.x, center.y);
                this.state.lastPinchDistance = newDist;
            }
            this.state.touchPoints = Array.from(touches).map(t => ({ x: t.clientX, y: t.clientY }));
        }

        handleTouchEnd(e) {
            if (e.touches.length < 2) {
                this.state.isPinching = false;
            }
            if (e.touches.length < 1) {
                this.handleMouseUp();
            }
        }

        // --- Lógica de Gestos ---
        getPinchDistance() {
            const [t1, t2] = this.state.touchPoints;
            return Math.hypot(t1.x - t2.x, t1.y - t2.y);
        }

        getPinchCenter() {
            const [t1, t2] = this.state.touchPoints;
            return { x: (t1.x + t2.x) / 2, y: (t1.y + t2.y) / 2 };
        }

        zoomAtPoint(zoomFactor, clientX, clientY) {
            const newScale = Math.max(this.config.MIN_ZOOM, Math.min(this.state.scale * zoomFactor, this.config.MAX_ZOOM));
            const rect = this.dom.canvas.getBoundingClientRect();
            const mouseX = clientX - rect.left;
            const mouseY = clientY - rect.top;
            this.state.offset.x = (this.state.offset.x - mouseX) * (newScale / this.state.scale) + mouseX;
            this.state.offset.y = (this.state.offset.y - mouseY) * (newScale / this.state.scale) + mouseY;
            this.state.scale = newScale;
            this.renderer.requestRedraw();
        }

        bindEvents() {
            // Ratón
            this.dom.canvas.addEventListener('mousedown', this.handleMouseDown.bind(this));
            this.dom.canvas.addEventListener('mouseup', this.handleMouseUp.bind(this));
            this.dom.canvas.addEventListener('mouseleave', this.handleMouseUp.bind(this));
            this.dom.canvas.addEventListener('mousemove', this.handleMouseMove.bind(this));
            this.dom.canvas.addEventListener('wheel', this.handleWheel.bind(this), { passive: false });
            this.dom.canvas.addEventListener('dblclick', this.handleDblClick.bind(this));
            // Táctil
            this.dom.canvas.addEventListener('touchstart', this.handleTouchStart.bind(this), { passive: false });
            this.dom.canvas.addEventListener('touchmove', this.handleTouchMove.bind(this), { passive: false });
            this.dom.canvas.addEventListener('touchend', this.handleTouchEnd.bind(this));
        }
    }

    // El resto de las clases (UIManager, ExportService, MindMapApp) permanecen aquí...
    // ... (El código de las clases UIManager, ExportService y MindMapApp se inserta aquí sin cambios)
    class UIManager {
        constructor(stateManager, domManager, app) {
            this.state = stateManager.getState();
            this.dom = domManager.dom;
            this.app = app;
            this.bindEvents();
        }

        toggleAllNodes() {
            if (!this.state.rootNode) return;
            const shouldExpand = !this.state.areAllNodesExpanded;
            this.app.utils.traverseAll(this.state.rootNode, node => {
                if (node.level > 0) {
                    node.collapsed = !shouldExpand;
                }
            });
            this.state.areAllNodesExpanded = shouldExpand;
            this.updateToggleAllButton();
            this.app.layoutEngine.runLayout(false);
            this.app.renderer.requestRedraw();
        }

        updateToggleAllButton() {
            if (this.state.areAllNodesExpanded) {
                this.dom.toggleAllBtn.title = "Contraer Todo";
                this.dom.toggleAllBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25" /></svg>`;
            } else {
                this.dom.toggleAllBtn.title = "Expandir Todo";
                this.dom.toggleAllBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" /></svg>`;
            }
        }

        showGlossary() {
            if (!window.glossaryData) {
                console.error("Datos del glosario no encontrados.");
                return;
            }
            this.dom.glossaryBody.innerHTML = '';
            window.glossaryData.forEach(item => {
                const itemDiv = document.createElement('div');
                itemDiv.className = 'glossary-item';
                itemDiv.innerHTML = `<div class="glossary-term">${item.term}</div><div class="glossary-definition">${item.definition}</div>`;
                this.dom.glossaryBody.appendChild(itemDiv);
            });
            this.dom.modal.hidden = false;
            setTimeout(() => this.dom.modal.classList.add('visible'), 10);
        }

        hideGlossary() {
            this.dom.modal.classList.remove('visible');
            setTimeout(() => this.dom.modal.hidden = true, 300);
        }

        bindEvents() {
            this.dom.mapSelector.addEventListener('change', (e) => this.app.loadMindMap(e.target.value));
            this.dom.themeSelector.addEventListener('change', (e) => this.app.switchTheme(e.target.value));
            this.dom.searchInput.addEventListener('input', (e) => this.app.featureEngine.runSearch(e.target.value));
            this.dom.searchInput.addEventListener('keydown', (e) => {
                if (this.state.searchResults.length === 0) return;
                if (e.key === 'Enter') {
                    e.preventDefault();
                    this.state.currentMatchIndex = (this.state.currentMatchIndex + (e.shiftKey ? -1 : 1) + this.state.searchResults.length) % this.state.searchResults.length;
                    const targetNode = this.state.searchResults[this.state.currentMatchIndex];
                    let parent = targetNode.parent;
                    while(parent) {
                        parent.collapsed = false;
                        parent = parent.parent;
                    }
                    this.app.layoutEngine.runLayout(false);
                    this.app.featureEngine.centerOnNode(targetNode);
                } else if (e.key === 'Escape') {
                    this.dom.searchInput.value = ''; this.app.featureEngine.runSearch(''); this.dom.searchInput.blur();
                }
            });
            this.dom.zoomInBtn.addEventListener('click', () => this.app.interactionHandler.zoomAtPoint(1.2, this.dom.canvas.clientWidth / 2, this.dom.canvas.clientHeight / 2));
            this.dom.zoomOutBtn.addEventListener('click', () => this.app.interactionHandler.zoomAtPoint(0.8, this.dom.canvas.clientWidth / 2, this.dom.canvas.clientHeight / 2));
            this.dom.resetViewBtn.addEventListener('click', () => this.state.rootNode && this.app.featureEngine.centerOnNode(this.state.rootNode, 0.5));
            this.dom.toggleControlsBtn.addEventListener('click', () => this.dom.topControls.classList.toggle('collapsed'));
            this.dom.toggleBottomControlsBtn.addEventListener('click', () => this.dom.bottomControls.classList.toggle('collapsed'));
            this.dom.toggleAllBtn.addEventListener('click', this.toggleAllNodes.bind(this));
            this.dom.glossaryBtn.addEventListener('click', this.showGlossary.bind(this));
            this.dom.modalCloseBtn.addEventListener('click', this.hideGlossary.bind(this));
            this.dom.modal.addEventListener('click', (e) => {
                if (e.target === this.dom.modal) this.hideGlossary();
            });
            window.addEventListener('keydown', (e) => {
                if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
                    e.preventDefault();
                    this.dom.searchInput.focus();
                    this.dom.searchInput.select();
                } else if (e.key === 'Escape') {
                    this.hideGlossary();
                }
            });
            window.addEventListener('resize', () => this.app.layoutEngine.runLayout(true));
        }
    }

    class ExportService {
        constructor(stateManager, utils, configManager) {
            this.state = stateManager.getState();
            this.utils = utils;
            this.config = configManager.config;
        }

        buildSVG() {
            const nodes = [];
            this.utils.traverseTree(this.state.rootNode, n => nodes.push(n));
            if (nodes.length === 0) return { svg: '', width: 0, height: 0 };
            let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
            nodes.forEach(n => {
                minX = Math.min(minX, n.x);
                minY = Math.min(minY, n.y);
                maxX = Math.max(maxX, n.x + n.width);
                maxY = Math.max(maxY, n.y + n.height);
            });
            const pad = 60;
            const width = (maxX - minX) + pad * 2;
            const height = (maxY - minY) + pad * 2;
            const tx = -minX + pad;
            const ty = -minY + pad;
            const mctx = document.createElement('canvas').getContext('2d');
            const getSVGTextLines = (text, font, maxWidth) => {
                mctx.font = font;
                const words = String(text).split(' ');
                if (!words.length || words[0] === "") return [];
                let lines = [], currentLine = words[0];
                for (let i = 1; i < words.length; i++) {
                    const testLine = currentLine + " " + words[i];
                    if (mctx.measureText(testLine).width < maxWidth) {
                        currentLine = testLine;
                    } else {
                        lines.push(currentLine);
                        currentLine = words[i];
                    }
                }
                lines.push(currentLine);
                return lines;
            };
            const styles = getComputedStyle(document.documentElement);
            const bgColor = styles.getPropertyValue('--canvas-bg-color').trim();
            const edgeColor = styles.getPropertyValue('--border-color').trim();
            let svgParts = [
                `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">`,
                `<defs><style><![CDATA[`,
                `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');`,
                `.card { stroke: ${edgeColor}; }`,
                `.title, .def { font-family: 'Inter', system-ui, sans-serif; }`,
                `.edge { fill: none; stroke: ${edgeColor}; stroke-width: 2.5; }`,
                `]]></style></defs>`,
                `<rect width="100%" height="100%" fill="${bgColor}"/>`,
                `<g transform="translate(${tx}, ${ty})">`
            ];
            this.utils.traverseTree(this.state.rootNode, node => {
                if (node.children && !node.collapsed) {
                    node.children.forEach(child => {
                        const dir = child.direction;
                        const startX = node.level === 0 ? node.x + node.width / 2 : (node.direction === 1 ? node.x + node.width : node.x);
                        const startY = node.y + node.height / 2;
                        const endX = dir === 1 ? child.x : child.x + child.width;
                        const endY = child.y + child.height / 2;
                        const cp1x = startX + (endX - startX) * 0.5;
                        svgParts.push(`<path class="edge" d="M${startX},${startY} C${cp1x},${startY} ${cp1x},${endY} ${endX},${endY}"/>`);
                    });
                }
            });
            nodes.forEach(n => {
                const { x, y, width, height, level } = n;
                const safeLevel = Math.min(level, this.config.LEVEL_COLORS.length - 1);
                const color = this.config.LEVEL_COLORS[safeLevel];
                const isExample = level >= 6;
                svgParts.push(`<g transform="translate(${x}, ${y})">`);
                svgParts.push(`<rect class="card" width="${width}" height="${height}" rx="12" fill="${isExample ? '#f8f9fa' : bgColor}" ${isExample ? 'stroke-dasharray="4 4"' : ''}/>`);
                svgParts.push(`<path d="M0,12 A12,12 0 0 1 12,0 H8 V${height} H12 A12,12 0 0 1 0,${height-12} Z" fill="${color}"/>`);
                const tSafe = Math.min(level, this.config.FONT_SIZES.title.length - 1);
                const dSafe = Math.min(level, this.config.FONT_SIZES.definition.length - 1);
                const titleFont = `${isExample ? 500 : 700} ${this.config.FONT_SIZES.title[tSafe]}px Inter`;
                const defFont = `400 ${this.config.FONT_SIZES.definition[dSafe]}px Inter`;
                const textX = this.config.PADDING + 4;
                const maxW = width - this.config.PADDING * 2 - 8;
                let yCursor = this.config.PADDING;
                const titleToDraw = isExample ? `Ejemplo: ${n.title}` : n.title;
                const titleLines = getSVGTextLines(titleToDraw, titleFont, maxW);
                const titleFill = (level === 0 || isExample) ? styles.getPropertyValue('--text-color').trim() : color;
                titleLines.forEach(line => {
                    const yPos = yCursor + this.config.LINE_HEIGHTS.title[tSafe] * 0.75;
                    svgParts.push(`<text x="${textX}" y="${yPos}" font-size="${this.config.FONT_SIZES.title[tSafe]}px" font-weight="${isExample ? 500 : 700}" fill="${titleFill}">${this.escapeXML(line)}</text>`);
                    yCursor += this.config.LINE_HEIGHTS.title[tSafe];
                });
                if (n.definition) {
                    yCursor += 8;
                    const defLines = getSVGTextLines(n.definition, defFont, maxW);
                    defLines.forEach(line => {
                        const yPos = yCursor + this.config.LINE_HEIGHTS.definition[dSafe] * 0.75;
                        svgParts.push(`<text x="${textX}" y="${yPos}" font-size="${this.config.FONT_SIZES.definition[dSafe]}px" font-weight="400" fill="${styles.getPropertyValue('--text-muted-color').trim()}">${this.escapeXML(line)}</text>`);
                        yCursor += this.config.LINE_HEIGHTS.definition[dSafe];
                    });
                }
                svgParts.push(`</g>`);
            });
            svgParts.push(`</g></svg>`);
            return { svg: svgParts.join('\n'), width, height };
        }

        escapeXML(s) { return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' }[c])); }

        async rasterizeSVG(svgText, width, height, dpr = 2) {
            return new Promise((resolve, reject) => {
                const img = new Image();
                const svgBlob = new Blob([svgText], { type: 'image/svg+xml;charset=utf-8' });
                const url = URL.createObjectURL(svgBlob);
                img.onload = () => {
                    const tempCanvas = document.createElement('canvas');
                    tempCanvas.width = width * dpr;
                    tempCanvas.height = height * dpr;
                    const tempCtx = tempCanvas.getContext('2d');
                    tempCtx.scale(dpr, dpr);
                    tempCtx.drawImage(img, 0, 0, width, height);
                    URL.revokeObjectURL(url);
                    resolve(tempCanvas.toDataURL('image/png'));
                };
                img.onerror = (err) => { URL.revokeObjectURL(url); reject(err); };
                img.src = url;
            });
        }

        triggerDownload(filename, url) {
            const a = document.createElement('a');
            a.href = url;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }

        exportAsSVG() {
            const { svg } = this.buildSVG();
            if (svg) this.triggerDownload('mapa-mental.svg', `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`);
        }

        async exportAsPNG() {
            const { svg, width, height } = this.buildSVG();
            if (!svg) return;
            try {
                const pngUrl = await this.rasterizeSVG(svg, width, height, 2);
                this.triggerDownload('mapa-mental.png', pngUrl);
            } catch (error) { console.error("Error al generar PNG:", error); }
        }

        async exportAsPDF() {
            const { svg, width, height } = this.buildSVG();
            if (!svg) return;
            try {
                const pngUrl = await this.rasterizeSVG(svg, width, height, 1.5);
                const { jsPDF } = window.jspdf;
                if (!jsPDF) { console.error("La librería PDF no se pudo cargar."); return; }
                const orientation = width > height ? 'l' : 'p';
                const pdf = new jsPDF(orientation, 'pt', 'a4');
                const pageW = pdf.internal.pageSize.getWidth(), pageH = pdf.internal.pageSize.getHeight();
                const margin = 40;
                const maxW = pageW - margin * 2, maxH = pageH - margin * 2;
                const ratio = Math.min(maxW / width, maxH / height);
                pdf.addImage(pngUrl, 'PNG', (pageW - width * ratio) / 2, (pageH - height * ratio) / 2, width * ratio, height * ratio);
                pdf.save('mapa-mental.pdf');
            } catch (error) { console.error("Error al generar PDF:", error); }
        }
    }

    class MindMapApp {
        constructor() {
            this.stateManager = new StateManager();
            this.configManager = new ConfigManager();
            this.domManager = new DOMManager();

            this.state = this.stateManager.getState();
            this.dom = this.domManager.dom;

            if (!this.dom.canvas) {
                console.error("No se encontró el elemento canvas. La aplicación no puede iniciar.");
                return;
            }

            this.state.canvas = this.dom.canvas;
            this.state.ctx = this.dom.canvas.getContext('2d');

            this.utils = new Utils(this.stateManager);
            this.layoutEngine = new LayoutEngine(this.stateManager, this.configManager, this.utils);
            this.renderer = new Renderer(this.stateManager, this.configManager, this.utils);
            this.interactionHandler = new InteractionHandler(this.stateManager, this.domManager, this.layoutEngine, this.renderer);
            this.uiManager = new UIManager(this.stateManager, this.domManager, this);
            this.exportService = new ExportService(this.stateManager, this.utils, this.configManager);
            this.featureEngine = this.uiManager;

            this.init();
        }

        loadThemeColors() {
            const computedStyles = getComputedStyle(document.documentElement);
            const colors = [];
            for (let i = 0; i < 8; i++) {
                const color = computedStyles.getPropertyValue(`--level-${i}-color`).trim();
                colors.push(color || '#6c757d');
            }
            this.configManager.set('LEVEL_COLORS', colors);
        }

        switchTheme(themeName) {
            const themeMap = {
                'default': '',
                'masculine': 'styles/cyberpunk.css',
                'feminine': 'styles/atardecer.css'
            };
            this.dom.themeStylesheet.setAttribute('href', themeMap[themeName] || '');
            setTimeout(() => {
                this.loadThemeColors();
                this.renderer.requestRedraw();
            }, 50);
        }

        loadMindMap(mapFile) {
            if (!mapFile) {
                this.stateManager.set('rootNode', null);
                this.renderer.requestRedraw();
                return;
            }
            const existingScript = document.getElementById('mind-map-data-script');
            if (existingScript) existingScript.remove();
            const script = document.createElement('script');
            script.id = 'mind-map-data-script';
            script.src = mapFile;
            script.onload = () => {
                this.stateManager.set('rootNode', window.mindMapData);
                this.utils.traverseAll(this.state.rootNode, node => {
                    if (typeof node.collapsed === 'undefined') {
                        node.collapsed = false;
                    }
                });
                this.stateManager.set('areAllNodesExpanded', false);
                this.uiManager.toggleAllNodes();
                this.layoutEngine.runLayout(true);
            };
            script.onerror = () => console.error(`Error al cargar el mapa: ${mapFile}`);
            document.body.appendChild(script);
        }

        bindExportButtons() {
            this.dom.exportSvgBtn.addEventListener('click', () => this.exportService.exportAsSVG());
            this.dom.exportPngBtn.addEventListener('click', () => this.exportService.exportAsPNG());
            this.dom.exportPdfBtn.addEventListener('click', () => this.exportService.exportAsPDF());
        }

        init() {
            this.loadThemeColors();
            this.bindExportButtons();
            this.uiManager.updateToggleAllButton();
            this.renderer.requestRedraw();
        }
    }

    new MindMapApp();

});