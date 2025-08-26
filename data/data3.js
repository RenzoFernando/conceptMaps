/*
 * data3.js — Vistas Pragmáticas de UML (ISO/IEC 19505) — versión extendida (amplificada)
 * Reglas del usuario aplicadas:
 *  - Niveles: 0 (título) → 6. El nivel 6 se usa SOLO para “Ejemplos del Título”.
 *  - Todos los nodos: title, connectorLabel, definition.
 *  - TODOS los caminos llegan a nivel 6.
 *  - Cuatro temas en el nivel 1: Repaso/Preguntas (Tema 1.2) + Casos de Uso + Componentes + Deployment.
 *  - Más subdivisiones reales en niveles 4 y 5 (no sólo un hijo), fieles a los PDFs.
 */

var mindMapData = {
    title: 'Vistas Pragmáticas de UML: Casos de Uso, Componentes y Deployment',
    connectorLabel: 'tema',
    definition: 'Panorama práctico y fiel a ISO/IEC 19505-2: requisitos en acción (Casos de Uso), modularidad por contrato (Componentes), ejecución física (Deployment) y un repaso con preguntas guía (Tema 1.2).',
    children: [

        /* ===============================================================
         * NIVEL 0 — NODO 1: REPASO Y PREGUNTAS (TEMA 1.2)
         * =============================================================== */
        {
            title: 'Repaso y Preguntas (Tema 1.2: Especificación de arquitectura con UML)',
            connectorLabel: 'integra',
            definition: 'Resumen pragmático y preguntas guía con base en ISO/IEC 19505-2: Casos de Uso (Cap. 16), Componentes (Cap. 8–9) y Deployment (Cap. 19). Enfocado a fidelidad y suficiencia en vistas.',
            children: [

                /* ========================= NIVEL 2 ========================= */
                {
                    title: 'Mapa del Tema 1.2 (visión general)',
                    connectorLabel: 'organiza',
                    definition: 'Cuatro frentes: Casos de uso, Componentes, Deployment y Vista general de UML (diagramas base).',
                    children: [

                        /* ===================== NIVEL 3 ===================== */
                        {
                            title: 'Casos de uso',
                            connectorLabel: 'cubren',
                            definition: 'Especifican usos requeridos del sistema, con actores externos al sujeto y resultados observables.',
                            children: [

                                /* ================ NIVEL 4 ================ */
                                {
                                    title: 'Elementos clave',
                                    connectorLabel: 'incluyen',
                                    definition: 'Actor (rol externo), Caso de Uso (funcionalidad útil), Sujeto (sistema), relaciones include/extend/generalización.',
                                    children: [

                                        /* ============ NIVEL 5 (múltiples subdivisiones) ============ */
                                        {
                                            title: 'Reglas ISO relevantes',
                                            connectorLabel: 'aclaran',
                                            definition: 'Actores son externos; extend en puntos de extensión con condición opcional; include reutiliza comportamiento común.',
                                            children: [
                                                /* ======== NIVEL 6 (EJEMPLOS) ======== */
                                                {
                                                    title: 'Ejemplos del Título',
                                                    connectorLabel: 'ilustran',
                                                    definition: 'ATM: “Perform ATM Transaction” extendido por “On-Line Help” en el punto “Selection”; actores Customer/Bank fuera del sujeto; “Withdraw”/“Transfer Funds”.'
                                                }
                                            ]
                                        },
                                        {
                                            title: 'Completitud y estado estable',
                                            connectorLabel: 'exigen',
                                            definition: 'Cada caso debe cerrar en estado estable o error controlado; nada de “pendiente” tras ejecutar el flujo.',
                                            children: [
                                                {
                                                    title: 'Ejemplos del Título',
                                                    connectorLabel: 'ilustran',
                                                    definition: '“Retirar Efectivo”: saldo actualizado, efectivo dispensado o mensaje de fondos insuficientes; sistema listo para siguiente sesión.'
                                                }
                                            ]
                                        },
                                        {
                                            title: 'Trazabilidad con requisitos',
                                            connectorLabel: 'vincula',
                                            definition: 'Cada caso se enlaza con requisitos funcionales y NFRs relevantes (rendimiento, seguridad, disponibilidad).',
                                            children: [
                                                {
                                                    title: 'Ejemplos del Título',
                                                    connectorLabel: 'ilustran',
                                                    definition: 'RF-12 “Consultar Estado”: caso “Consultar Estado”, NFR-latencia: P95 < 300 ms.'
                                                }
                                            ]
                                        },
                                        {
                                            title: 'Errores frecuentes',
                                            connectorLabel: 'evitar',
                                            definition: 'Modelar UI como caso; mezclar reglas técnicas en la narrativa; duplicar pasos comunes en varios casos.',
                                            children: [
                                                {
                                                    title: 'Ejemplos del Título',
                                                    connectorLabel: 'ilustran',
                                                    definition: 'Extraer “Autenticación” vía «include»; evitar títulos tipo “Clic en botón”.'
                                                }
                                            ]
                                        }
                                    ]
                                },

                                {
                                    title: 'Buenas prácticas de narrativa',
                                    connectorLabel: 'organizan',
                                    definition: 'Plantilla mínima: pre/post; flujo básico; alternos y excepciones; métricas cuando aplique; sin detalles de UI.',
                                    children: [
                                        {
                                            title: 'Criterios de calidad',
                                            connectorLabel: 'evalúan',
                                            definition: 'Claridad, ausencia de ambigüedad, foco en valor, consistencia terminológica; cubrir curso feliz y variantes.',
                                            children: [
                                                {
                                                    title: 'Ejemplos del Título',
                                                    connectorLabel: 'ilustran',
                                                    definition: 'Caso “Depositar”: alterno {límite diario excedido}; excepción {falla de comunicación}.'
                                                }
                                            ]
                                        },
                                        {
                                            title: 'Relación con otras vistas',
                                            connectorLabel: 'alinea',
                                            definition: 'Los casos se realizan por componentes e impactan el deployment; mantener enlaces explícitos entre vistas.',
                                            children: [
                                                {
                                                    title: 'Ejemplos del Título',
                                                    connectorLabel: 'ilustran',
                                                    definition: 'Caso “Emitir Factura” → comp. “Billing” → artifact “billing.jar” → nodo “AppServer-Billing”.'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },

                        {
                            title: 'Componentes',
                            connectorLabel: 'definen',
                            definition: 'Unidades modulares con interfaces provistas/requeridas (puertos), wiring por assembly/delegation, sustituibles por contrato.',
                            children: [
                                {
                                    title: 'Wiring y contratos',
                                    connectorLabel: 'abarca',
                                    definition: 'Compatibilidad de interfaces; assembly une requerida→provista; delegation propaga contrato a partes internas.',
                                    children: [
                                        {
                                            title: 'Presentación y límites',
                                            connectorLabel: 'indican',
                                            definition: 'Ball-and-socket para puertos simples; evitarlo en puertos complejos; encapsulación mediante puertos.',
                                            children: [
                                                {
                                                    title: 'Ejemplos del Título',
                                                    connectorLabel: 'ilustran',
                                                    definition: '“:Order” requiere “OrderableItem” provista por “:Product”; puerto público delega a parte interna “:Order”.'
                                                }
                                            ]
                                        },
                                        {
                                            title: 'Versionado y compatibilidad',
                                            connectorLabel: 'gestionan',
                                            definition: 'Evolución de contratos con mínimo rompimiento; semver o etiquetas v1/v2; deprecar con ventana de migración.',
                                            children: [
                                                {
                                                    title: 'Ejemplos del Título',
                                                    connectorLabel: 'ilustran',
                                                    definition: 'Interfaz “Payment.v2” añade idempotencyKey manteniendo compatibilidad con “Payment.v1”.'
                                                }
                                            ]
                                        },
                                        {
                                            title: 'Protocolos en puertos',
                                            connectorLabel: 'validan',
                                            definition: 'State machines opcionales en puertos para aceptar secuencias válidas de mensajes/operaciones.',
                                            children: [
                                                {
                                                    title: 'Ejemplos del Título',
                                                    connectorLabel: 'ilustran',
                                                    definition: 'Puerto “Checkout” exige: start→authorize→capture→complete.'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },

                        {
                            title: 'Deployment',
                            connectorLabel: 'modela',
                            definition: 'Asignación de artifacts a nodes; nodos conectados por communication paths; soporte a tipo e instancia.',
                            children: [
                                {
                                    title: 'Elementos y relaciones',
                                    connectorLabel: 'comprenden',
                                    definition: 'Node (device/execution environment), Artifact (con «manifest»), Deployment (a un DeploymentTarget), CommunicationPath.',
                                    children: [
                                        {
                                            title: 'Parametrización y perfiles',
                                            connectorLabel: 'permiten',
                                            definition: 'DeploymentSpecification separa configuración; perfiles estandarizan artefactos («executable», «source», «jar»).',
                                            children: [
                                                {
                                                    title: 'Ejemplos del Título',
                                                    connectorLabel: 'ilustran',
                                                    definition: '“order.jar” manifiesta componente “Order”; se despliega en “AppServer-1” con “JVM-17”.'
                                                }
                                            ]
                                        },
                                        {
                                            title: 'Operación y observabilidad',
                                            connectorLabel: 'añaden',
                                            definition: 'Sidecars, métricas, trazas; límites de recursos; SLO/SLA; notas con latencia y throughput.',
                                            children: [
                                                {
                                                    title: 'Ejemplos del Título',
                                                    connectorLabel: 'ilustran',
                                                    definition: 'Sidecar “metrics-agent”; SLO P95<300ms; path TLS AppServer↔DB.'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },

                        {
                            title: 'Vista general de UML',
                            connectorLabel: 'resume',
                            definition: 'Diagramas clave: Casos de Uso, Componentes y Deployment. Para requisitos, modularidad y ejecución física.',
                            children: [
                                {
                                    title: 'Selección pragmática',
                                    connectorLabel: 'propone',
                                    definition: 'Elige el diagrama por objetivo: historias de valor (casos), contratos/composición (componentes), topología de ejecución (deployment).',
                                    children: [
                                        {
                                            title: 'Criterios de suficiencia',
                                            connectorLabel: 'evalúan',
                                            definition: 'Cobertura de misión, trazabilidad a requisitos/NFR, claridad para implementación/despliegue; evita sobre-modelado.',
                                            children: [
                                                {
                                                    title: 'Ejemplos del Título',
                                                    connectorLabel: 'ilustran',
                                                    definition: 'Set mínimo: casos de uso del dominio, componentes con puertos/ensamblajes, deployment con nodos/artefactos.'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },

                /* ========================= NIVEL 2 ========================= */
                {
                    title: '¿Qué es y para qué sirve UML?',
                    connectorLabel: 'aclara',
                    definition: 'Lenguaje de modelado para especificar, visualizar y documentar sistemas. Aquí: requisitos (casos), modularidad/contratos (componentes) y ejecución (deployment).',
                    children: [
                        {
                            title: 'Enfoque por valor',
                            connectorLabel: 'prioriza',
                            definition: 'Modelar lo mínimo necesario para decidir, construir y comunicar.',
                            children: [
                                {
                                    title: 'Salida verificable',
                                    connectorLabel: 'se concreta en',
                                    definition: 'Entregables legibles y validables: actores externos, interfaces explícitas, despliegues reproducibles.',
                                    children: [
                                        {
                                            title: 'Checklist de uso',
                                            connectorLabel: 'incluye',
                                            definition: '¿Actor externo? ¿Resultado observable? ¿Contrato explícito? ¿Nodo destino y artifact definidos?',
                                            children: [
                                                {
                                                    title: 'Ejemplos del Título',
                                                    connectorLabel: 'ilustran',
                                                    definition: 'Caso “Consultar Estado”, interfaz “OrderQuery”, artifact “order-query.jar” en “AppServer-2”.'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    title: 'Evitar modelitis',
                                    connectorLabel: 'recomienda',
                                    definition: 'Solo las vistas que aportan a la decisión; ajustar detalle según riesgo y audiencia.',
                                    children: [
                                        {
                                            title: 'Ejemplos del Título',
                                            connectorLabel: 'ilustran',
                                            definition: 'Vista de despliegue simplificada para PoC; detalle de puertos recién para pase a producción.'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },

                /* ========================= NIVEL 2 ========================= */
                {
                    title: '¿Por qué modelar sistemas?',
                    connectorLabel: 'responde',
                    definition: 'Para alinear negocio y tecnología, reducir ambigüedad, anticipar riesgos y facilitar evolución/sustituibilidad por contrato.',
                    children: [
                        {
                            title: 'Beneficios tangibles',
                            connectorLabel: 'son',
                            definition: 'Trazabilidad, acuerdos de interfaz, topología clara, criterios de aceptación ligados a despliegue.',
                            children: [
                                {
                                    title: 'Decisiones explícitas',
                                    connectorLabel: 'documentan',
                                    definition: 'Qué se expone y qué se encapsula; dónde se ejecuta; cómo se comunican nodos; qué se puede reemplazar sin romper.',
                                    children: [
                                        {
                                            title: 'Buenas prácticas',
                                            connectorLabel: 'incluyen',
                                            definition: 'Include/extend con semántica correcta; puertos para aislar; artifacts versionados con specs de despliegue.',
                                            children: [
                                                {
                                                    title: 'Ejemplos del Título',
                                                    connectorLabel: 'ilustran',
                                                    definition: 'Sustitución “Payments v1→v2” manteniendo interfaz; canary en “AppServer-3”; paths tipados.'
                                                }
                                            ]
                                        },
                                        {
                                            title: 'Riesgos comunes',
                                            connectorLabel: 'alertan',
                                            definition: 'Falta de puntos de extensión nombrados; contracts inestables; deployment sin comunicación tipada.',
                                            children: [
                                                {
                                                    title: 'Ejemplos del Título',
                                                    connectorLabel: 'ilustran',
                                                    definition: 'Extend sin guarda; socket conectado a lollipop incompatible; CommunicationPath omitido.'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },

                /* ========================= NIVEL 2 ========================= */
                {
                    title: 'UML vs. views & viewpoints (fidelidad y suficiencia)',
                    connectorLabel: 'contrasta',
                    definition: '“View” = representación de preocupaciones; “Viewpoint” = reglas/convenciones. Suficiencia = cubrir preocupaciones; fidelidad = coherencia con la semántica UML.',
                    children: [
                        {
                            title: 'Criterios de fidelidad',
                            connectorLabel: 'validan',
                            definition: 'Actores externos al sujeto; extend en puntos con nombre; assembly/delegation correctos; communicationPath solo entre DeploymentTargets.',
                            children: [
                                {
                                    title: 'Criterios de suficiencia',
                                    connectorLabel: 'aseguran',
                                    definition: 'Cobertura de misión, contratos sustituibles, deployment operativo y medible.',
                                    children: [
                                        {
                                            title: 'Estrategia de cierre',
                                            connectorLabel: 'propone',
                                            definition: 'Alinear Requisito→Caso→Componente→Artifact→Nodo; gaps = tareas de modelado.',
                                            children: [
                                                {
                                                    title: 'Ejemplos del Título',
                                                    connectorLabel: 'ilustran',
                                                    definition: 'Matriz de trazabilidad viva con verificación en cada entrega.'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },

                /* ========================= NIVEL 2 ========================= */
                {
                    title: 'Preguntas del ejercicio (aplicación)',
                    connectorLabel: 'responde',
                    definition: 'Guía concreta para el enunciado, basada en Casos de Uso, Componentes y Deployment.',
                    children: [
                        /* ===================== NIVEL 3 ===================== */
                        {
                            title: '1.a ¿Es intensivo de software?',
                            connectorLabel: 'evalúa',
                            definition: 'Criterios: núcleo de valor en software; reglas de negocio no triviales; integración; dependencia de artifacts y nodos.',
                            children: [
                                /* ================ NIVEL 4 ================ */
                                {
                                    title: 'Evidencias buscadas',
                                    connectorLabel: 'incluyen',
                                    definition: 'Casos con lógica significativa; componentes con contratos explícitos; despliegue en nodos específicos; paths de comunicación.',
                                    children: [
                                        /* ============ NIVEL 5 ============ */
                                        {
                                            title: 'Decisión y justificación',
                                            connectorLabel: 'concluye',
                                            definition: 'Si el comportamiento clave reside mayormente en software y su operación depende del deployment, clasifica como intensivo de software.',
                                            children: [
                                                /* ======== NIVEL 6 ======== */
                                                {
                                                    title: 'Ejemplos del Título',
                                                    connectorLabel: 'ilustran',
                                                    definition: 'E-commerce: flujo de compra (casos), comp. “Cart/Payment/Order”, artifacts “cart.jar/payment.jar”, nodes “Web/App/DB”.'
                                                }
                                            ]
                                        },
                                        {
                                            title: 'Contraejemplos',
                                            connectorLabel: 'descartan',
                                            definition: 'Procesos dominados por actividad manual y mínima lógica de software; poca dependencia de despliegue.',
                                            children: [
                                                {
                                                    title: 'Ejemplos del Título',
                                                    connectorLabel: 'ilustran',
                                                    definition: 'Proceso manual de recepción con registro esporádico en hoja; no aplica clasificación intensiva.'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },

                        {
                            title: '1.b ¿Qué es una vista arquitectónica en el ejercicio?',
                            connectorLabel: 'define',
                            definition: 'Representación enfocada a preocupaciones (requisitos, contratos, ejecución) usando notación UML adecuada.',
                            children: [
                                {
                                    title: 'Vistas sugeridas',
                                    connectorLabel: 'incluyen',
                                    definition: 'Requisitos (Casos), Componentes (contratos/puertos), Deployment (nodos/artefactos).',
                                    children: [
                                        {
                                            title: 'Criterios de aceptación',
                                            connectorLabel: 'piden',
                                            definition: 'Actores externos correctos; wiring compatible; deployment con paths válidos entre DeploymentTargets.',
                                            children: [
                                                {
                                                    title: 'Ejemplos del Título',
                                                    connectorLabel: 'ilustran',
                                                    definition: 'Trío sincronizado: casos→componentes→deployment, con trazabilidad explícita.'
                                                }
                                            ]
                                        },
                                        {
                                            title: 'Vistas complementarias',
                                            connectorLabel: 'opcional',
                                            definition: 'Clases (datos), Secuencia (interacción), Actividad (procesos), Estados (vida de objetos) según necesidad.',
                                            children: [
                                                {
                                                    title: 'Ejemplos del Título',
                                                    connectorLabel: 'ilustran',
                                                    definition: 'Agregar Secuencia para “Checkout” cuando existan controversias sobre orden de mensajes.'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },

                        {
                            title: '1.c Casos de uso contextuales (arquitectura)',
                            connectorLabel: 'propone',
                            definition: 'Construir diagrama contextual: sujeto, actores clave, casos de alto nivel, include/extend correctamente aplicados.',
                            children: [
                                {
                                    title: 'Pasos de construcción',
                                    connectorLabel: 'siguen',
                                    definition: 'Definir sujeto; listar actores; seleccionar casos de alto nivel; nombrar puntos de extensión; adjuntar condiciones en nota.',
                                    children: [
                                        {
                                            title: 'Revisión de cubrimiento',
                                            connectorLabel: 'verifica',
                                            definition: 'Validar objetivos de negocio cubiertos por casos; evitar huecos/duplicidades; enlazar a componentes.',
                                            children: [
                                                {
                                                    title: 'Ejemplos del Título',
                                                    connectorLabel: 'ilustran',
                                                    definition: 'ATM: “Withdraw/Transfer/Deposit”, extend “On-Line Help: Selection”.'
                                                }
                                            ]
                                        },
                                        {
                                            title: 'Escala de arquitectura',
                                            connectorLabel: 'dimensiona',
                                            definition: 'Identificar ámbitos y límites: anti-corrupción entre dominios, sistemas externos, servicios compartidos.',
                                            children: [
                                                {
                                                    title: 'Ejemplos del Título',
                                                    connectorLabel: 'ilustran',
                                                    definition: 'Dominio “Billing” separado de “Orders” con interfaz anti-corrupción y contratos bien definidos.'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },

                        {
                            title: '1.d Vistas arquitectónicas importantes',
                            connectorLabel: 'selecciona',
                            definition: 'Para un sistema computacional: requisitos (casos), componentes (contratos, puertos), deployment (nodos/artefactos/paths), seguridad/operación (notas/estereotipos).',
                            children: [
                                {
                                    title: 'Razonamiento',
                                    connectorLabel: 'expone',
                                    definition: 'Equilibran qué se hace (requisitos), con qué se hace (componentes) y dónde corre (deployment).',
                                    children: [
                                        {
                                            title: 'Cierre práctico',
                                            connectorLabel: 'propone',
                                            definition: 'Cadena Requisito→Caso→Componente→Artifact→Nodo, con políticas/SLAs anotadas; verificación por release.',
                                            children: [
                                                {
                                                    title: 'Ejemplos del Título',
                                                    connectorLabel: 'ilustran',
                                                    definition: '“Emitir Factura” → “Billing” → “billing.jar” → “AppServer-Billing”; path “AppServer-Billing↔DB-Primary”.'
                                                }
                                            ]
                                        },
                                        {
                                            title: 'Riesgos de omisión',
                                            connectorLabel: 'alertan',
                                            definition: 'Casos sin actor externo; puertos sin contrato; artifacts sin nodo; paths sin protocolo definido.',
                                            children: [
                                                {
                                                    title: 'Ejemplos del Título',
                                                    connectorLabel: 'ilustran',
                                                    definition: 'Detección temprana en revisión: lista de chequeo para cada vista.'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },

                /* ========================= NIVEL 2 ========================= */
                {
                    title: 'Guía notacional y reglas (lex/sint/sem)',
                    connectorLabel: 'consolida',
                    definition: 'Elementos y reglas mínimas para evitar errores de fidelidad.',
                    children: [
                        {
                            title: 'Casos de uso',
                            connectorLabel: 'establece',
                            definition: 'Actor externo al sujeto; include = reutilización obligatoria; extend = opcional condicionado; notas con condición/punto.',
                            children: [
                                {
                                    title: 'Presentación',
                                    connectorLabel: 'permite',
                                    definition: 'Sujeto como rectángulo opcional; actores fuera; casos dentro; condiciones de extend en nota adjunta.',
                                    children: [
                                        {
                                            title: 'Validaciones',
                                            connectorLabel: 'exigen',
                                            definition: 'Actores solo con asociaciones binarias válidas; cada ExtensionPoint debe nombrarse claramente.',
                                            children: [
                                                {
                                                    title: 'Ejemplos del Título',
                                                    connectorLabel: 'ilustran',
                                                    definition: '“Selection” como ExtensionPoint; condición {customer selected HELP} en la nota del «extend».'
                                                }
                                            ]
                                        },
                                        {
                                            title: 'Antipatrones',
                                            connectorLabel: 'evitar',
                                            definition: 'Casos-gigante, mini-casos sin valor, modelar UI, duplicar fragmentos sin include.',
                                            children: [
                                                {
                                                    title: 'Ejemplos del Título',
                                                    connectorLabel: 'ilustran',
                                                    definition: 'Refactor: extraer “Autenticar” y “Validar Límite” como includes.'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Componentes',
                            connectorLabel: 'formaliza',
                            definition: 'Assembly requerida→provista; delegation del puerto público a parte interna; compatibilidad de interfaces; ball-and-socket en puertos simples.',
                            children: [
                                {
                                    title: 'Contratos',
                                    connectorLabel: 'describen',
                                    definition: 'Comportamientos válidos a través del conector; versionado/compatibilidad explícitos; puertos encapsulan.',
                                    children: [
                                        {
                                            title: 'Errores comunes',
                                            connectorLabel: 'evitar',
                                            definition: 'Ball-and-socket en puertos complejos; wiring que ignora compatibilidad; exponer partes internas sin puerto.',
                                            children: [
                                                {
                                                    title: 'Ejemplos del Título',
                                                    connectorLabel: 'ilustran',
                                                    definition: 'Compatibilidad requerida/prevista checada; delegación desde “OnlineServices” a “:Order”.'
                                                }
                                            ]
                                        },
                                        {
                                            title: 'Protocolos',
                                            connectorLabel: 'restringen',
                                            definition: 'Order de mensajes/operaciones aceptables; timeouts y reintentos documentados como notas/estereotipos.',
                                            children: [
                                                {
                                                    title: 'Ejemplos del Título',
                                                    connectorLabel: 'ilustran',
                                                    definition: '“authorize→capture→refund” con límites de reintentos y backoff.'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Deployment',
                            connectorLabel: 'norma',
                            definition: 'Artifacts se despliegan sobre DeploymentTargets (Nodes); CommunicationPath solo entre DeploymentTargets; nivel tipo e instancia.',
                            children: [
                                {
                                    title: 'Especificaciones',
                                    connectorLabel: 'añaden',
                                    definition: 'DeploymentSpecification parametriza ejecución; perfiles para tipos de artifact (p.ej., «executable», «jar»).',
                                    children: [
                                        {
                                            title: 'Inspecciones',
                                            connectorLabel: 'revisan',
                                            definition: 'Cada artifact con nodo destino; paths tipados; anidamientos (EE dentro de Device) evidenciados.',
                                            children: [
                                                {
                                                    title: 'Ejemplos del Título',
                                                    connectorLabel: 'ilustran',
                                                    definition: '“AppServer-1” contiene “JVM-17”; “order.jar” con “config-prod.properties”; path TLS a “DB-Primary”.'
                                                }
                                            ]
                                        },
                                        {
                                            title: 'Operabilidad',
                                            connectorLabel: 'asegura',
                                            definition: 'Health checks, límites de recursos, rotación de logs; notas con SLO/SLA y ventanas de mantenimiento.',
                                            children: [
                                                {
                                                    title: 'Ejemplos del Título',
                                                    connectorLabel: 'ilustran',
                                                    definition: 'Readiness/Live probes; rotación a 100MB; mantenimiento semanal 02:00-03:00.'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },

        /* ===============================================================
         * NIVEL 1 — TEMA 2: CASOS DE USO (USE CASES)
         * =============================================================== */
        {
            title: 'Casos de Uso (Use Cases)',
            connectorLabel: 'definen los',
            definition: 'Especifican usos requeridos del sistema, capturando requisitos funcionales desde la perspectiva de actores externos. Completa y entrega valor observable.',
            children: [

                /* ========================= NIVEL 2 ========================= */
                {
                    title: 'Conceptos Fundamentales',
                    connectorLabel: 'se componen de',
                    definition: 'Actor, Caso de Uso, Sujeto; relaciones include/extend/generalización; puntos de extensión y reglas de completitud.',
                    children: [

                        /* ===================== NIVEL 3 ===================== */
                        {
                            title: 'Actor',
                            connectorLabel: 'es un',
                            definition: 'Rol externo (humano, hardware u otro sistema) que interactúa con el sujeto. Representa un rol, no un individuo físico.',
                            children: [

                                /* ================= NIVEL 4 ================= */
                                {
                                    title: 'Propiedades del Actor',
                                    connectorLabel: 'tiene',
                                    definition: 'BehavioredClassifier; siempre externo; multiplicidades; nombre claro en singular.',
                                    children: [

                                        /* ============== NIVEL 5 (múltiples) ============== */
                                        {
                                            title: 'Externalidad',
                                            connectorLabel: 'es siempre',
                                            definition: 'El actor no es parte de la instancia del sistema; se relaciona por asociaciones válidas.',
                                            children: [
                                                {
                                                    title: 'Ejemplos del Título',
                                                    connectorLabel: 'ilustran',
                                                    definition: '“Customer” y “Bank” fuera del rectángulo del sistema ATM.'
                                                }
                                            ]
                                        },
                                        {
                                            title: 'Multiplicidad y cardinalidad',
                                            connectorLabel: 'aclaran',
                                            definition: 'Más de un actor puede iniciar/participar; documentar concurrente o secuencial según el caso.',
                                            children: [
                                                {
                                                    title: 'Ejemplos del Título',
                                                    connectorLabel: 'ilustran',
                                                    definition: 'Cliente + Co-titular autorizando una operación de alto valor.'
                                                }
                                            ]
                                        },
                                        {
                                            title: 'Roles múltiples por entidad',
                                            connectorLabel: 'permiten',
                                            definition: 'Una entidad física puede jugar varios actores (p.ej., Usuario y Operador) en contextos distintos.',
                                            children: [
                                                {
                                                    title: 'Ejemplos del Título',
                                                    connectorLabel: 'ilustran',
                                                    definition: 'Empleado actúa como “Cajero” en caja y como “Cliente” en su sesión personal.'
                                                }
                                            ]
                                        },
                                        {
                                            title: 'Actores no humanos',
                                            connectorLabel: 'incluyen',
                                            definition: 'Sistemas externos, dispositivos, sensores; usar iconografía apropiada o estereotipo «actor».',
                                            children: [
                                                {
                                                    title: 'Ejemplos del Título',
                                                    connectorLabel: 'ilustran',
                                                    definition: '“Sistema Tributario” como actor en emisión de factura electrónica.'
                                                }
                                            ]
                                        },
                                        {
                                            title: 'Restricciones de asociación',
                                            connectorLabel: 'resumen',
                                            definition: 'Asociaciones binarias entre actor y caso; evitar conexiones ambiguas o transitivas.',
                                            children: [
                                                {
                                                    title: 'Ejemplos del Título',
                                                    connectorLabel: 'ilustran',
                                                    definition: 'Actor “Supervisor” asociado a “Autorizar Devolución” y “Revisar Auditoría”.'
                                                }
                                            ]
                                        }
                                    ]
                                },

                                {
                                    title: 'Tipologías de actores',
                                    connectorLabel: 'exploran',
                                    definition: 'Primario (inicia), secundario (apoya), offstage (impactado); humanos vs sistemas; internos vs externos.',
                                    children: [
                                        {
                                            title: 'Criterios de identificación',
                                            connectorLabel: 'proponen',
                                            definition: '¿Quién recibe valor directo? ¿Quién integra? ¿Quién impone reglas o restricciones?',
                                            children: [
                                                {
                                                    title: 'Ejemplos del Título',
                                                    connectorLabel: 'ilustran',
                                                    definition: 'Cliente (primario), Banco (secundario), Regulador (offstage).'
                                                }
                                            ]
                                        },
                                        {
                                            title: 'Errores comunes',
                                            connectorLabel: 'evitar',
                                            definition: 'Usar nombres de personas concretas o cargos internos para actores; confundir rol con pantalla.',
                                            children: [
                                                {
                                                    title: 'Ejemplos del Título',
                                                    connectorLabel: 'ilustran',
                                                    definition: 'Evitar “Juan Pérez” como actor; usar “Cliente”.'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },

                        {
                            title: 'Caso de Uso (Use Case)',
                            connectorLabel: 'es una',
                            definition: 'Unidad de funcionalidad útil ofrecida por el sujeto; completa; describible con interacciones/actividades/estados/pre/post/narrativa.',
                            children: [
                                {
                                    title: 'Estructura de la narrativa',
                                    connectorLabel: 'incluye',
                                    definition: 'Propósito, alcance, pre, post, flujo básico, alternos, excepciones, NFRs; enlaces a componentes.',
                                    children: [
                                        {
                                            title: 'Precondiciones',
                                            connectorLabel: 'exigen',
                                            definition: 'Supuestos verdaderos antes de iniciar; verificables; no duplicar lógica de negocio aquí.',
                                            children: [
                                                {
                                                    title: 'Ejemplos del Título',
                                                    connectorLabel: 'ilustran',
                                                    definition: '{Tarjeta válida; cuenta activa}.'
                                                }
                                            ]
                                        },
                                        {
                                            title: 'Postcondiciones',
                                            connectorLabel: 'garantizan',
                                            definition: 'Efectos observables al finalizar (éxito/fallo controlado); medibles cuando aplique.',
                                            children: [
                                                {
                                                    title: 'Ejemplos del Título',
                                                    connectorLabel: 'ilustran',
                                                    definition: '{Saldo actualizado; comprobante emitido}.'
                                                }
                                            ]
                                        },
                                        {
                                            title: 'Flujo básico',
                                            connectorLabel: 'describe',
                                            definition: 'Secuencia nominal sin desvíos; centrado en valor; pasos de alto nivel.',
                                            children: [
                                                {
                                                    title: 'Ejemplos del Título',
                                                    connectorLabel: 'ilustran',
                                                    definition: 'Insertar tarjeta → validar PIN → seleccionar monto → dispensar efectivo → imprimir recibo.'
                                                }
                                            ]
                                        },
                                        {
                                            title: 'Flujos alternos',
                                            connectorLabel: 'cubren',
                                            definition: 'Variantes previstas; decisión clara de reingresar al flujo básico o finalizar.',
                                            children: [
                                                {
                                                    title: 'Ejemplos del Título',
                                                    connectorLabel: 'ilustran',
                                                    definition: 'Cambio de denominaciones si no hay billetes de 50.'
                                                }
                                            ]
                                        },
                                        {
                                            title: 'Excepciones',
                                            connectorLabel: 'manejan',
                                            definition: 'Errores con recuperación controlada; registrar y comunicar; dejar sistema estable.',
                                            children: [
                                                {
                                                    title: 'Ejemplos del Título',
                                                    connectorLabel: 'ilustran',
                                                    definition: 'Falla de red: mostrar mensaje y abortar transacción sin debitar.'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    title: 'Criterios de partición',
                                    connectorLabel: 'guían',
                                    definition: 'Separar por valor entregado; evitar mega-casos; extraer pasos comunes con include; mantener independencia semántica en extend.',
                                    children: [
                                        {
                                            title: 'Granularidad',
                                            connectorLabel: 'equilibra',
                                            definition: 'Ni demasiado amplio ni trivial; apuntar a una transacción/objetivo de negocio coherente.',
                                            children: [
                                                {
                                                    title: 'Ejemplos del Título',
                                                    connectorLabel: 'ilustran',
                                                    definition: '“Registrar Pago” vs “Clic en botón Pagar”.'
                                                }
                                            ]
                                        },
                                        {
                                            title: 'Cohesión',
                                            connectorLabel: 'asegura',
                                            definition: 'Pasos del caso orientados al mismo resultado; evitar mezclar propósitos distintos.',
                                            children: [
                                                {
                                                    title: 'Ejemplos del Título',
                                                    connectorLabel: 'ilustran',
                                                    definition: 'No mezclar “Actualizar perfil” dentro de “Realizar compra”.'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },

                        {
                            title: 'Relaciones entre Casos de Uso',
                            connectorLabel: 'se estructuran con',
                            definition: 'Include (reutilización obligatoria), Extend (comportamiento opcional/condicionado) y Generalización (herencia).',
                            children: [
                                {
                                    title: 'Inclusión (Include)',
                                    connectorLabel: 'para',
                                    definition: 'Inserta comportamiento del caso incluido dentro del base en un punto específico; subrutina.',
                                    children: [
                                        {
                                            title: 'Antipatrones de include',
                                            connectorLabel: 'evitar',
                                            definition: 'Usar include para “ordenar pasos” o romper el flujo sin sentido; incluir lógica no compartida.',
                                            children: [
                                                {
                                                    title: 'Ejemplos del Título',
                                                    connectorLabel: 'ilustran',
                                                    definition: 'Incorrecto: incluir “Mostrar UI”. Correcto: incluir “Autenticar”.'
                                                }
                                            ]
                                        },
                                        {
                                            title: 'Trazabilidad',
                                            connectorLabel: 'vincula',
                                            definition: 'El caso incluido debe trazar a requisitos comunes y pruebas reutilizables.',
                                            children: [
                                                {
                                                    title: 'Ejemplos del Título',
                                                    connectorLabel: 'ilustran',
                                                    definition: '“Validar Límite Diario” compartido por “Retirar” y “Transferir”.'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    title: 'Extensión (Extend)',
                                    connectorLabel: 'para',
                                    definition: 'Inserta comportamiento opcional del extensor en puntos nombrados del base, bajo condición.',
                                    children: [
                                        {
                                            title: 'Diseño de puntos de extensión',
                                            connectorLabel: 'recomienda',
                                            definition: 'Nombrar con intención; la guarda debe ser verificable; la extensión no rompe semántica del base.',
                                            children: [
                                                {
                                                    title: 'Ejemplos del Título',
                                                    connectorLabel: 'ilustran',
                                                    definition: 'Punto “Selección”; guarda {usuario solicita ayuda}.'
                                                }
                                            ]
                                        },
                                        {
                                            title: 'Antipatrones de extend',
                                            connectorLabel: 'evitar',
                                            definition: 'Usar extend para “parchar” un base incompleto; condiciones ambiguas; múltiples extensiones contradictorias.',
                                            children: [
                                                {
                                                    title: 'Ejemplos del Título',
                                                    connectorLabel: 'ilustran',
                                                    definition: 'Evitar dos extensiones que ejecuten acciones mutuamente excluyentes sin priorización.'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    title: 'Generalización',
                                    connectorLabel: 'para',
                                    definition: 'Heredar comportamiento/relaciones y especializar cuando corresponda.',
                                    children: [
                                        {
                                            title: 'Criterios de especialización',
                                            connectorLabel: 'definen',
                                            definition: 'La variante cambia reglas o pasos; mantener contrato visible; documentar diferencias claramente.',
                                            children: [
                                                {
                                                    title: 'Ejemplos del Título',
                                                    connectorLabel: 'ilustran',
                                                    definition: '“Validar con Huella” especializa “Validar Usuario”.'
                                                }
                                            ]
                                        },
                                        {
                                            title: 'Riesgos',
                                            connectorLabel: 'controlan',
                                            definition: 'Jerarquías profundas difíciles de mantener; preferir include cuando es reutilización sin variación semántica.',
                                            children: [
                                                {
                                                    title: 'Ejemplos del Título',
                                                    connectorLabel: 'ilustran',
                                                    definition: 'Evitar tres niveles de herencia en casos; usar include para “Verificar Captcha”.'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },

                        {
                            title: 'Presentación y Notación',
                            connectorLabel: 'muestra',
                            definition: 'Elipses para casos; stick-man o «actor» para actores; rectángulo para sujeto opcional; include/extend/generalización claros.',
                            children: [
                                {
                                    title: 'Legibilidad',
                                    connectorLabel: 'prioriza',
                                    definition: 'Nombres legibles; evitar cruces; agrupar por cercanía conceptual; notas para condiciones y puntos.',
                                    children: [
                                        {
                                            title: 'Estilo',
                                            connectorLabel: 'sugiere',
                                            definition: 'Mayúsculas/acentos correctos; verbos en infinitivo; consistencia de términos entre vistas.',
                                            children: [
                                                {
                                                    title: 'Ejemplos del Título',
                                                    connectorLabel: 'ilustran',
                                                    definition: '“Registrar pago”, “Emitir factura”, “Consultar estado”.'
                                                }
                                            ]
                                        },
                                        {
                                            title: 'Errores gráficos',
                                            connectorLabel: 'evitar',
                                            definition: 'Actores dentro del sujeto; flechas invertidas en include/extend; puntos de extensión sin nombre.',
                                            children: [
                                                {
                                                    title: 'Ejemplos del Título',
                                                    connectorLabel: 'ilustran',
                                                    definition: 'Colocar “Customer” fuera del sujeto; include base→incluido; extend extensor→base.'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },

        /* ===============================================================
         * NIVEL 1 — TEMA 3: COMPONENTES (COMPONENTS)
         * =============================================================== */
        {
            title: 'Componentes (Components)',
            connectorLabel: 'definen la',
            definition: 'Unidad modular reemplazable con interfaces provistas y requeridas; puertos para encapsular; realización por clasificadores; wiring por assembly/delegation.',
            children: [

                /* ========================= NIVEL 2 ========================= */
                {
                    title: 'Visión General y Ciclo de Vida',
                    connectorLabel: 'incluye',
                    definition: 'Componentes como clases especializadas con provided/required; empaquetables; desplegables; reusables.',
                    children: [

                        /* ===================== NIVEL 3 ===================== */
                        {
                            title: 'Caja Negra (Especificación)',
                            connectorLabel: 'se define por',
                            definition: 'Interfaces provistas (lollipop) y requeridas (socket), contratos y protocolos opcionales.',
                            children: [

                                /* ================= NIVEL 4 ================= */
                                {
                                    title: 'Interfaces Proporcionadas',
                                    connectorLabel: 'exponen',
                                    definition: 'Servicios ofrecidos; listables en compartimentos; realizables por partes internas.',
                                    children: [

                                        /* ============== NIVEL 5 (múltiples) ============== */
                                        {
                                            title: 'Contratos funcionales',
                                            connectorLabel: 'especifican',
                                            definition: 'Operaciones, mensajes, pre/post y errores; semántica clara para consumidores.',
                                            children: [
                                                { title: 'Ejemplos del Título', connectorLabel: 'ilustran', definition: '“OrderEntry.Create()” devuelve orderId y códigos de error normalizados.' }
                                            ]
                                        },
                                        {
                                            title: 'Políticas no funcionales',
                                            connectorLabel: 'anotan',
                                            definition: 'Latencia, throughput, idempotencia, seguridad; notas o estereotipos.',
                                            children: [
                                                { title: 'Ejemplos del Título', connectorLabel: 'ilustran', definition: 'Idempotencia con idempotencyKey; P95 < 300 ms.' }
                                            ]
                                        },
                                        {
                                            title: 'Versionado',
                                            connectorLabel: 'gestiona',
                                            definition: 'Evolución compatible; deprecación; política de cambios; negociación de versión.',
                                            children: [
                                                { title: 'Ejemplos del Título', connectorLabel: 'ilustran', definition: '“OrderEntry.v2” añade “notes” sin romper v1.' }
                                            ]
                                        }
                                    ]
                                },

                                {
                                    title: 'Interfaces Requeridas',
                                    connectorLabel: 'declaran',
                                    definition: 'Dependencias explícitas; contratos de consumo; backpressure y reintentos documentados.',
                                    children: [
                                        {
                                            title: 'Tolerancia a fallos',
                                            connectorLabel: 'define',
                                            definition: 'Estrategias de reintento, circuit breaker, timeouts, fallback aceptables.',
                                            children: [
                                                { title: 'Ejemplos del Título', connectorLabel: 'ilustran', definition: 'Retry x3 con backoff exponencial; fallback a cola.' }
                                            ]
                                        },
                                        {
                                            title: 'Compatibilidad',
                                            connectorLabel: 'exige',
                                            definition: 'Cada feature requerida debe mapear a una provista compatible en el otro extremo del conector.',
                                            children: [
                                                { title: 'Ejemplos del Título', connectorLabel: 'ilustran', definition: '“Payment.authorize(amount, currency)” ↔ provista por “PaymentsAPI”.' }
                                            ]
                                        }
                                    ]
                                },

                                {
                                    title: 'Puertos (Ports)',
                                    connectorLabel: 'agrupan',
                                    definition: 'Puntos de interacción que encapsulan interfaces provistas y requeridas; isService/isBehavior/isConjugated.',
                                    children: [
                                        {
                                            title: 'Puertos simples vs complejos',
                                            connectorLabel: 'distinguen',
                                            definition: 'Simple: una interfaz (ball-and-socket). Complejo: múltiples interfaces; usar listas/compartimentos.',
                                            children: [
                                                { title: 'Ejemplos del Título', connectorLabel: 'ilustran', definition: '“OnlineServices” provisto: OrderEntry, Tracking; requerido: Payment.' }
                                            ]
                                        },
                                        {
                                            title: 'Protocolos en puertos',
                                            connectorLabel: 'restringen',
                                            definition: 'State machines para controlar secuencias de mensajes/operaciones aceptables.',
                                            children: [
                                                { title: 'Ejemplos del Título', connectorLabel: 'ilustran', definition: 'Handshake→authorize→commit→close.' }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },

                        {
                            title: 'Caja Blanca (Realización)',
                            connectorLabel: 'se implementa con',
                            definition: 'Realizadores (clases/partes), estructura interna compuesta y conectores de ensamblaje/delegación.',
                            children: [
                                {
                                    title: 'Realizadores',
                                    connectorLabel: 'vinculan',
                                    definition: 'ComponentRealization desde el componente hacia clasificadores que implementan su comportamiento.',
                                    children: [
                                        { title: 'Patrones internos', connectorLabel: 'aplican', definition: 'Separación de responsabilidades; entidades/servicios; adaptadores.' ,
                                            children: [
                                                { title: 'Ejemplos del Título', connectorLabel: 'ilustran', definition: '“OrderHeader/LineItem” + “OrderService” + “PaymentAdapter”.' }
                                            ]
                                        },
                                        { title: 'Pruebas', connectorLabel: 'cubren', definition: 'Realizadores probados en aislamiento usando dobles de prueba para interfaces requeridas.',
                                            children: [
                                                { title: 'Ejemplos del Título', connectorLabel: 'ilustran', definition: 'Mocks para “PaymentsAPI”; contract tests.' }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    title: 'Estructura Interna Compuesta',
                                    connectorLabel: 'organiza',
                                    definition: 'Partes (roles) y conectores; nombres explícitos si hay instancias repetidas; conectores n-arios cuando aplique.',
                                    children: [
                                        {
                                            title: 'Delegación',
                                            connectorLabel: 'redirige',
                                            definition: 'Del puerto externo a la parte interna que implementa; preserva encapsulación.',
                                            children: [
                                                { title: 'Ejemplos del Título', connectorLabel: 'ilustran', definition: '“Store” delega “OrderEntry” a “:Order”.' }
                                            ]
                                        },
                                        {
                                            title: 'Ensamblaje',
                                            connectorLabel: 'conecta',
                                            definition: 'Requerida→provista; comprobar compatibilidad feature a feature; contratos claros.',
                                            children: [
                                                { title: 'Ejemplos del Título', connectorLabel: 'ilustran', definition: '“:Order” requiere “OrderableItem” provista por “:Product”.' }
                                            ]
                                        },
                                        {
                                            title: 'Conectores n-arios',
                                            connectorLabel: 'permiten',
                                            definition: 'Varias partes colaborando en un mismo vínculo; documentar participación y roles.',
                                            children: [
                                                { title: 'Ejemplos del Título', connectorLabel: 'ilustran', definition: 'Pedido–Servicio–Inventario en un conector trivalente.' }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },

                /* ========================= NIVEL 2 — CONECTORES ========================= */
                {
                    title: 'Conectores y Wiring',
                    connectorLabel: 'permiten',
                    definition: 'Ensamblar componentes por compatibilidad de interfaces; delegar contratos; validar protocolos en el enlace.',
                    children: [
                        {
                            title: 'Assembly Connector',
                            connectorLabel: 'conecta',
                            definition: 'Une interfaz requerida con interfaz provista compatible; binario o n-ario; ball-and-socket para puertos simples.',
                            children: [
                                {
                                    title: 'Ejemplo de Ensamblaje',
                                    connectorLabel: 'muestra',
                                    definition: '“:Order” requiere “OrderableItem” provista por “:Product”; conector explícito con contrato revisado.',
                                    children: [
                                        { title: 'Ejemplos del Título', connectorLabel: 'ilustran', definition: 'Estructura compuesta con ball-and-socket.’' }
                                    ]
                                },
                                {
                                    title: 'Compatibilidad',
                                    connectorLabel: 'verifica',
                                    definition: 'Operaciones, eventos y propiedades coinciden o son covariantes/contravariantes donde corresponda.',
                                    children: [
                                        { title: 'Ejemplos del Título', connectorLabel: 'ilustran', definition: '“getStatus():StatusV2” aceptado por consumidor que espera StatusV1 si es compatible.' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Delegation Connector',
                            connectorLabel: 'redirige',
                            definition: 'Conecta puerto público con parte interna implementadora o consumidora.',
                            children: [
                                {
                                    title: 'Propagación de Interfaz',
                                    connectorLabel: 'permite',
                                    definition: 'Exponer afuera un contrato implementado adentro; no rompe encapsulación.',
                                    children: [
                                        { title: 'Ejemplos del Título', connectorLabel: 'ilustran', definition: '“Store” expone “OrderEntry” delegando a “:Order”.' }
                                    ]
                                },
                                {
                                    title: 'Cadenas de delegación',
                                    connectorLabel: 'componen',
                                    definition: 'Varias capas conectadas por delegación; documentar recorrido para trazabilidad.',
                                    children: [
                                        { title: 'Ejemplos del Título', connectorLabel: 'ilustran', definition: 'API Gateway → Backend For Frontend → Servicio de Dominio.' }
                                    ]
                                }
                            ]
                        }
                    ]
                },

                /* ========================= NIVEL 2 — CONTRATOS ========================= */
                {
                    title: 'Contratos y Sustituibilidad',
                    connectorLabel: 'garantizan',
                    definition: 'Si el contrato se mantiene, la implementación puede sustituirse sin romper a consumidores.',
                    children: [
                        {
                            title: 'Conformidad de Tipo',
                            connectorLabel: 'exige',
                            definition: 'Provided/Required conformes; pruebas de contrato; negociación de versión cuando haya cambios.',
                            children: [
                                {
                                    title: 'Estrategias',
                                    connectorLabel: 'incluyen',
                                    definition: 'Versionado, idempotencia, backpressure, circuit breakers, timeouts y reintentos.',
                                    children: [
                                        { title: 'Ejemplos del Título', connectorLabel: 'ilustran', definition: '“ConfirmPayment” idempotente; breaker abierto tras 5 fallos; retry con jitter.' }
                                    ]
                                },
                                {
                                    title: 'Observabilidad',
                                    connectorLabel: 'demuestra',
                                    definition: 'Métricas por operación, logs estructurados, trazas distribuidas para validar SLOs del contrato.',
                                    children: [
                                        { title: 'Ejemplos del Título', connectorLabel: 'ilustran', definition: 'Traza end-to-end “checkout-1234”; P95=220ms; errorRate<0.1%.' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Empaquetado (PackagingComponents)',
                            connectorLabel: 'organiza',
                            definition: 'El componente puede poseer/importar paquetes, casos de uso, artefactos y dependencias.',
                            children: [
                                {
                                    title: 'Namespaces',
                                    connectorLabel: 'definen',
                                    definition: 'Agrupar para coherencia; minimizar dependencias cíclicas; controlar visibilidad.',
                                    children: [
                                        { title: 'Ejemplos del Título', connectorLabel: 'ilustran', definition: '“billing.*” y “payments.*” con dependencias unidireccionales.' }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },

        /* ===============================================================
         * NIVEL 1 — TEMA 4: DESPLIEGUE (DEPLOYMENT)
         * =============================================================== */
        {
            title: 'Despliegue (Deployment)',
            connectorLabel: 'define la',
            definition: 'Arquitectura de ejecución: artifacts en nodes (device o execution environment), conectados por communication paths; modelable a nivel tipo e instancia.',
            children: [

                /* ========================= NIVEL 2 ========================= */
                {
                    title: 'Elementos del Despliegue',
                    connectorLabel: 'modela',
                    definition: 'Nodos (hardware/software), Artefactos (elementos físicos), y su relación de Deployment; specs parametrizan la ejecución.',
                    children: [

                        /* ===================== NIVEL 3 ===================== */
                        {
                            title: 'Nodo (Node)',
                            connectorLabel: 'es',
                            definition: 'DeploymentTarget físico o virtual; Device (hardware) o ExecutionEnvironment (software); anidable.',
                            children: [

                                /* ================= NIVEL 4 ================= */
                                {
                                    title: 'Tipos de Nodo',
                                    connectorLabel: 'incluyen',
                                    definition: 'Device: servidor, PC, sensor. ExecutionEnvironment: SO, VM, contenedor, runtime.',
                                    children: [

                                        /* ============== NIVEL 5 (múltiples) ============== */
                                        {
                                            title: 'Anidamiento',
                                            connectorLabel: 'permite',
                                            definition: 'EE dentro de Device; múltiples capas (hipervisor→VM→runtime).',
                                            children: [
                                                { title: 'Ejemplos del Título', connectorLabel: 'ilustran', definition: '“AppServer-1” (device) contiene “JVM-17” (EE).' }
                                            ]
                                        },
                                        {
                                            title: 'Etiquetado',
                                            connectorLabel: 'aclara',
                                            definition: 'Estereotipos «device»/«executionEnvironment»; notas de capacidad y zona.',
                                            children: [
                                                { title: 'Ejemplos del Título', connectorLabel: 'ilustran', definition: '“DB-Primary” [device, zone=a] con RAM/CPU anotadas.' }
                                            ]
                                        },
                                        {
                                            title: 'Segmentos de red',
                                            connectorLabel: 'delimitan',
                                            definition: 'DMZ, backend, storage; políticas de acceso; cifrado en tránsito.',
                                            children: [
                                                { title: 'Ejemplos del Título', connectorLabel: 'ilustran', definition: 'DMZ para “Web”, backend para “App”, red aislada para “DB”.' }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },

                        {
                            title: 'Artefacto (Artifact)',
                            connectorLabel: 'es',
                            definition: 'Elemento físico producto/insumo: binario, script, configuración, documento. Relación «manifest» con elementos lógicos.',
                            children: [
                                {
                                    title: 'Tipos de artifact',
                                    connectorLabel: 'incluyen',
                                    definition: '«executable», «library», «file», «script», perfiles específicos (p.ej., «jar»).',
                                    children: [
                                        { title: 'Notación', connectorLabel: 'usa', definition: 'Rectángulo con «artifact»; ícono de documento; instancia subrayada opcional.',
                                            children: [
                                                { title: 'Ejemplos del Título', connectorLabel: 'ilustran', definition: '“order.jar” manifiesta el componente “Order”.' }
                                            ]
                                        },
                                        { title: 'Control de configuración', connectorLabel: 'gestiona', definition: 'Versiones, huellas (hash), firmas; trazabilidad a build/commit.',
                                            children: [
                                                { title: 'Ejemplos del Título', connectorLabel: 'ilustran', definition: 'SHA256 del binario; etiqueta release “2025.08.1”.' }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },

                /* ========================= NIVEL 2 — RELACIONES ========================= */
                {
                    title: 'Relaciones de Deployment',
                    connectorLabel: 'expresan',
                    definition: 'Deployment (artifact→node), DeployedArtifact, CommunicationPath entre DeploymentTargets; tipo e instancia.',
                    children: [
                        {
                            title: 'Deployment',
                            connectorLabel: 'asigna',
                            definition: 'Subtipo de Dependency; location=DeploymentTarget; deployedArtifact=Artifacts; configurable con DeploymentSpecification.',
                            children: [
                                {
                                    title: 'Nivel Tipo vs Instancia',
                                    connectorLabel: 'distingue',
                                    definition: 'Tipo: Node “Application Server” ↔ Artifact “order-handler.exe”. Instancia: “app-1”, “app-2”, “app-3”.',
                                    children: [
                                        { title: 'Ejemplos del Título', connectorLabel: 'ilustran', definition: 'Blue/Green: v1 en nodo A, v2 en nodo B; rollback posible.' }
                                    ]
                                },
                                {
                                    title: 'Estrategias de despliegue',
                                    connectorLabel: 'incluyen',
                                    definition: 'Blue/Green, Canary, Activo/Pasivo, Rolling; gestión de sesión/estado para cambios.',
                                    children: [
                                        { title: 'Ejemplos del Título', connectorLabel: 'ilustran', definition: 'Canary 5%→25%→50%→100% con métricas de error/latencia.' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'CommunicationPath',
                            connectorLabel: 'modela',
                            definition: 'Asociación solo entre DeploymentTargets para intercambio de mensajes; protocolos y medios anotables.',
                            children: [
                                {
                                    title: 'Reglas y Notación',
                                    connectorLabel: 'incluyen',
                                    definition: 'Línea sólida; extremos tipeados por targets; estereotipos o notas para TLS, gRPC, HTTP/2, etc.',
                                    children: [
                                        { title: 'Ejemplos del Título', connectorLabel: 'ilustran', definition: 'AppServer↔DB con TLS; AppServer↔Cache con gRPC.' }
                                    ]
                                },
                                {
                                    title: 'Capacidad y QoS',
                                    connectorLabel: 'documenta',
                                    definition: 'Ancho de banda, latencia, jitter; colas; límites de conexión concurrente.',
                                    children: [
                                        { title: 'Ejemplos del Título', connectorLabel: 'ilustran', definition: 'Límite 2000 conns; P95<50ms intra-Z; P95<150ms inter-Z.' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Deployment Specification',
                            connectorLabel: 'parametriza',
                            definition: 'Artefacto con propiedades para ejecutar: flags, memoria, endpoints, secretos; separa config del binario.',
                            children: [
                                {
                                    title: 'Gestión de secretos',
                                    connectorLabel: 'protege',
                                    definition: 'No en binario; referenciados por vault; rotación programada; least privilege.',
                                    children: [
                                        { title: 'Ejemplos del Título', connectorLabel: 'ilustran', definition: 'DB_PASSWORD vía vault; rotación mensual; TTL tokens 15m.' }
                                    ]
                                },
                                {
                                    title: 'Observabilidad',
                                    connectorLabel: 'añade',
                                    definition: 'Log level, sampling, exportadores; health endpoints; dashboards clave.',
                                    children: [
                                        { title: 'Ejemplos del Título', connectorLabel: 'ilustran', definition: 'L=INFO en prod; tracing 10%; /healthz y /ready.' }
                                    ]
                                }
                            ]
                        }
                    ]
                },

                /* ========================= NIVEL 2 — TOPOLOGÍAS ========================= */
                {
                    title: 'Topologías y Operación',
                    connectorLabel: 'permiten',
                    definition: 'Nodos anidados; sidecars; resiliencia; capacidad; rutas de red; zonas y dominios de fallo.',
                    children: [
                        {
                            title: 'Patrones de Despliegue',
                            connectorLabel: 'incluyen',
                            definition: 'Blue/Green, Canary, Activo/Pasivo; sidecar de métricas/proxy; secretos y config gestionados.',
                            children: [
                                {
                                    title: 'Observabilidad',
                                    connectorLabel: 'añade',
                                    definition: 'Logs, métricas, trazas; health checks; SLOs; alarmas y dashboards.',
                                    children: [
                                        { title: 'Ejemplos del Título', connectorLabel: 'ilustran', definition: 'Sidecar “metrics-agent”; alertas P95>300ms.' }
                                    ]
                                },
                                {
                                    title: 'Recuperación ante fallos',
                                    connectorLabel: 'orquesta',
                                    definition: 'Failover manual/automático; RTO/RPO; pruebas de caos; DR en otra zona.',
                                    children: [
                                        { title: 'Ejemplos del Título', connectorLabel: 'ilustran', definition: 'Failover a DB-Secondary; DR en zona-b; RTO 10m, RPO 1m.' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Capacidad y Resiliencia',
                            connectorLabel: 'documenta',
                            definition: 'Recursos CPU/RAM; concurrencia; límites; redundancia; replicación; throttling.',
                            children: [
                                {
                                    title: 'Notas de Capacidad',
                                    connectorLabel: 'etiquetan',
                                    definition: 'Valores por entorno; crecimiento; mantenimiento; tolerancias de latencia.',
                                    children: [
                                        { title: 'Ejemplos del Título', connectorLabel: 'ilustran', definition: 'AppServer autoscale 2–10; DB IOPS>20k; ventana Dom 02:00.' }
                                    ]
                                },
                                {
                                    title: 'Limitación y colas',
                                    connectorLabel: 'estabiliza',
                                    definition: 'Backpressure; colas por prioridad; rechazos controlados con códigos claros.',
                                    children: [
                                        { title: 'Ejemplos del Título', connectorLabel: 'ilustran', definition: '429 con Retry-After; cola “payments-high-priority”.' }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};

/* ===============================================================
 * GLOSARIO (ampliado para consulta rápida)
 * =============================================================== */
var glossaryData = [
    { term: 'Actor', definition: 'Rol externo (humano/sistema) que interactúa con el sujeto; nombre claro; asociaciones binarias válidas.' },
    { term: 'Use Case', definition: 'Unidad de funcionalidad útil que completa y deja estado estable; describe comportamiento ofrecido por el sujeto.' },
    { term: 'Include', definition: 'Inserción obligatoria del comportamiento del caso incluido en el base, en un punto específico.' },
    { term: 'Extend', definition: 'Inserción opcional condicionada del extensor en puntos con nombre del caso base (guarda).' },
    { term: 'Extension Point', definition: 'Punto con nombre dentro del caso base donde puede agregarse comportamiento de extensión.' },
    { term: 'Subject', definition: 'Clasificador al que aplican los casos de uso; puede representarse como rectángulo que los contiene.' },
    { term: 'Component', definition: 'Parte modular con provided/required; internos encapsulados; realizada por clasificadores; sustituible por contrato.' },
    { term: 'Port', definition: 'Punto explícito de interacción que agrupa interfaces provistas y requeridas; soporta políticas/seguridad.' },
    { term: 'ComponentRealization', definition: 'Relación que vincula componente con sus realizadores (implementación del comportamiento).' },
    { term: 'Assembly Connector', definition: 'Conecta requerida→provista compatibles; ball-and-socket en puertos simples.' },
    { term: 'Delegation Connector', definition: 'Redirige un puerto público a la parte interna que implementa el servicio.' },
    { term: 'Artifact', definition: 'Elemento físico (binario/script/config/docs) resultado del proceso; se relaciona con lógicos vía «manifest».' },
    { term: 'Manifestation', definition: 'Relación que indica que un artefacto implementa físicamente elementos del modelo (p. ej., componente).' },
    { term: 'Node', definition: 'DeploymentTarget (Device o ExecutionEnvironment) en el que se despliegan artefactos.' },
    { term: 'Deployment', definition: 'Asignación de artefactos/instancias a un DeploymentTarget; configurable por DeploymentSpecification.' },
    { term: 'CommunicationPath', definition: 'Asociación solo entre DeploymentTargets para intercambio de señales/mensajes.' }
];
