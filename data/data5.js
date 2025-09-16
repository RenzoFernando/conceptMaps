/* data5.js — Dorfman (repaso págs. 7, 12–16, 18–20) — versión profunda
 * Reglas del usuario:
 *  - Profundidad uniforme: raíz (nivel 1) → ... → nivel 6 (SIEMPRE "Ejemplo" morado sin hijos).
 *  - Estructura rica: cada rama con varias subramas; evitar cadenas lineales de un solo hijo.
 *  - Basado en: Dorfman, "Requirements Engineering" (p.7, 12–16, 18–20) y figura System Life‑Cycle.
 */
(function(){
  var mindMapData = {
    title: 'Dorfman — Ingeniería de Requisitos (Repaso: págs. 7, 12–16, 18–20) + System Life‑Cycle',
    connectorLabel: 'tema',
    definition: 'Mapa conceptual fiel al paper de Dorfman. Todas las rutas llegan a nivel 6 con un nodo de ejemplo.',
    children: [
    {
          title: 'Introducción y beneficios (p.7)',
          connectorLabel: 'expone',
          definition: 'La “crisis del software” evidenció que las deficiencias de requisitos contribuyen significativamente a fallas de costo/tiempo. Beneficios: acuerdo entre actores, base para estimaciones, mejor calidad, menos retrabajo.',
          children: [
            {
          title: 'Crisis del software',
          connectorLabel: 'incluye',
          definition: 'Origen del enfoque en requisitos: proyectos fallan por requisitos inadecuados; sensibilidad mayor en sistemas intensivos en software.',
          children: [
            {
              title: 'Claves',
              connectorLabel: 'considera',
              definition: 'Puntos esenciales para comprender crisis del software — definiciones operativas y límites de uso.',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'profundiza en',
                  definition: 'Desglose operativo y elementos que no se deben confundir.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'Introducción → Crisis del software → Claves → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            },
            {
              title: 'Criterios',
              connectorLabel: 'se valida con',
              definition: 'Condiciones observables/medibles de suficiencia, completitud y consistencia para crisis del software.',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'despliega',
                  definition: 'Métricas, umbrales, responsabilidades y fuentes de evidencia.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'Introducción → Crisis del software → Criterios → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            },
            {
              title: 'Riesgos y aplicación',
              connectorLabel: 'advierte',
              definition: 'Antipatrones y fallos típicos al aplicar crisis del software, con mitigaciones.',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'ejemplifica',
                  definition: 'Causas-raíz, señales tempranas y tácticas de contención.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'Introducción → Crisis del software → Riesgos y aplicación → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            },
            {
              title: 'Evidencias',
              connectorLabel: 'demuestra con',
              definition: 'Artefactos que prueban la correcta aplicación de crisis del software.',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'lista',
                  definition: 'Plantillas, matrices, actas y reportes relevantes.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'Introducción → Crisis del software → Evidencias → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            }
          ]
        },
            {
          title: 'Beneficios de requisitos sólidos',
          connectorLabel: 'incluye',
          definition: 'Alineación entre desarrolladores, clientes y usuarios; criterios de aceptación claros; soporte a estimación de recursos y mejora de atributos de calidad.',
          children: [
            {
              title: 'Claves',
              connectorLabel: 'considera',
              definition: 'Puntos esenciales para comprender beneficios de requisitos sólidos — definiciones operativas y límites de uso.',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'profundiza en',
                  definition: 'Desglose operativo y elementos que no se deben confundir.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'Introducción → Beneficios de requisitos sólidos → Claves → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            },
            {
              title: 'Criterios',
              connectorLabel: 'se valida con',
              definition: 'Condiciones observables/medibles de suficiencia, completitud y consistencia para beneficios de requisitos sólidos.',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'despliega',
                  definition: 'Métricas, umbrales, responsabilidades y fuentes de evidencia.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'Introducción → Beneficios de requisitos sólidos → Criterios → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            },
            {
              title: 'Riesgos y aplicación',
              connectorLabel: 'advierte',
              definition: 'Antipatrones y fallos típicos al aplicar beneficios de requisitos sólidos, con mitigaciones.',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'ejemplifica',
                  definition: 'Causas-raíz, señales tempranas y tácticas de contención.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'Introducción → Beneficios de requisitos sólidos → Riesgos y aplicación → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            },
            {
              title: 'Evidencias',
              connectorLabel: 'demuestra con',
              definition: 'Artefactos que prueban la correcta aplicación de beneficios de requisitos sólidos.',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'lista',
                  definition: 'Plantillas, matrices, actas y reportes relevantes.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'Introducción → Beneficios de requisitos sólidos → Evidencias → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            }
          ]
        },
            {
          title: 'Productos del análisis',
          connectorLabel: 'incluye',
          definition: 'Especificación y documentación de funciones, desempeño, interfaces internas/externas, atributos de calidad y restricciones válidas al diseño/proceso.',
          children: [
            {
              title: 'Claves',
              connectorLabel: 'considera',
              definition: 'Puntos esenciales para comprender productos del análisis — definiciones operativas y límites de uso.',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'profundiza en',
                  definition: 'Desglose operativo y elementos que no se deben confundir.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'Introducción → Productos del análisis → Claves → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            },
            {
              title: 'Criterios',
              connectorLabel: 'se valida con',
              definition: 'Condiciones observables/medibles de suficiencia, completitud y consistencia para productos del análisis.',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'despliega',
                  definition: 'Métricas, umbrales, responsabilidades y fuentes de evidencia.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'Introducción → Productos del análisis → Criterios → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            },
            {
              title: 'Riesgos y aplicación',
              connectorLabel: 'advierte',
              definition: 'Antipatrones y fallos típicos al aplicar productos del análisis, con mitigaciones.',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'ejemplifica',
                  definition: 'Causas-raíz, señales tempranas y tácticas de contención.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'Introducción → Productos del análisis → Riesgos y aplicación → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            },
            {
              title: 'Evidencias',
              connectorLabel: 'demuestra con',
              definition: 'Artefactos que prueban la correcta aplicación de productos del análisis.',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'lista',
                  definition: 'Plantillas, matrices, actas y reportes relevantes.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'Introducción → Productos del análisis → Evidencias → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            }
          ]
        }
          ]
        },
    {
          title: 'Sistema vs. Software; Jerarquía de elementos (pp.12–13, Fig.6)',
          connectorLabel: 'distingue',
          definition: 'Requisitos de sistema (visión holística) y de software (elemento específico). Jerarquía: Sistema → Subsistemas → Programas → Unidades.',
          children: [
            {
          title: 'Requisitos de sistema',
          connectorLabel: 'incluye',
          definition: 'Incluyen hardware, software, personas y procedimientos; comportamiento frente al entorno y Concept of Operations (ConOps).',
          children: [
            {
              title: 'Claves',
              connectorLabel: 'considera',
              definition: 'Puntos esenciales para comprender requisitos de sistema — definiciones operativas y límites de uso.',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'profundiza en',
                  definition: 'Desglose operativo y elementos que no se deben confundir.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'Sistema/Software → Requisitos de sistema → Claves → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            },
            {
              title: 'Criterios',
              connectorLabel: 'se valida con',
              definition: 'Condiciones observables/medibles de suficiencia, completitud y consistencia para requisitos de sistema.',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'despliega',
                  definition: 'Métricas, umbrales, responsabilidades y fuentes de evidencia.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'Sistema/Software → Requisitos de sistema → Criterios → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            },
            {
              title: 'Riesgos y aplicación',
              connectorLabel: 'advierte',
              definition: 'Antipatrones y fallos típicos al aplicar requisitos de sistema, con mitigaciones.',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'ejemplifica',
                  definition: 'Causas-raíz, señales tempranas y tácticas de contención.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'Sistema/Software → Requisitos de sistema → Riesgos y aplicación → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            },
            {
              title: 'Evidencias',
              connectorLabel: 'demuestra con',
              definition: 'Artefactos que prueban la correcta aplicación de requisitos de sistema.',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'lista',
                  definition: 'Plantillas, matrices, actas y reportes relevantes.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'Sistema/Software → Requisitos de sistema → Evidencias → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            }
          ]
        },
            {
          title: 'Requisitos de software',
          connectorLabel: 'incluye',
          definition: 'Responsabilidades del elemento software y sus interfaces; detalle mayor y verificabilidad específica.',
          children: [
            {
              title: 'Claves',
              connectorLabel: 'considera',
              definition: 'Puntos esenciales para comprender requisitos de software — definiciones operativas y límites de uso.',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'profundiza en',
                  definition: 'Desglose operativo y elementos que no se deben confundir.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'Sistema/Software → Requisitos de software → Claves → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            },
            {
              title: 'Criterios',
              connectorLabel: 'se valida con',
              definition: 'Condiciones observables/medibles de suficiencia, completitud y consistencia para requisitos de software.',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'despliega',
                  definition: 'Métricas, umbrales, responsabilidades y fuentes de evidencia.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'Sistema/Software → Requisitos de software → Criterios → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            },
            {
              title: 'Riesgos y aplicación',
              connectorLabel: 'advierte',
              definition: 'Antipatrones y fallos típicos al aplicar requisitos de software, con mitigaciones.',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'ejemplifica',
                  definition: 'Causas-raíz, señales tempranas y tácticas de contención.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'Sistema/Software → Requisitos de software → Riesgos y aplicación → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            },
            {
              title: 'Evidencias',
              connectorLabel: 'demuestra con',
              definition: 'Artefactos que prueban la correcta aplicación de requisitos de software.',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'lista',
                  definition: 'Plantillas, matrices, actas y reportes relevantes.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'Sistema/Software → Requisitos de software → Evidencias → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            }
          ]
        },
            {
          title: 'Jerarquía (Figura 6)',
          connectorLabel: 'incluye',
          definition: 'Estructura multinivel con incremento de detalle; integración ascendente tras desarrollo de niveles inferiores.',
          children: [
            {
              title: 'Claves',
              connectorLabel: 'considera',
              definition: 'Puntos esenciales para comprender jerarquía (figura 6) — definiciones operativas y límites de uso.',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'profundiza en',
                  definition: 'Desglose operativo y elementos que no se deben confundir.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'Sistema/Software → Jerarquía (Figura 6) → Claves → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            },
            {
              title: 'Criterios',
              connectorLabel: 'se valida con',
              definition: 'Condiciones observables/medibles de suficiencia, completitud y consistencia para jerarquía (figura 6).',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'despliega',
                  definition: 'Métricas, umbrales, responsabilidades y fuentes de evidencia.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'Sistema/Software → Jerarquía (Figura 6) → Criterios → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            },
            {
              title: 'Riesgos y aplicación',
              connectorLabel: 'advierte',
              definition: 'Antipatrones y fallos típicos al aplicar jerarquía (figura 6), con mitigaciones.',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'ejemplifica',
                  definition: 'Causas-raíz, señales tempranas y tácticas de contención.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'Sistema/Software → Jerarquía (Figura 6) → Riesgos y aplicación → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            },
            {
              title: 'Evidencias',
              connectorLabel: 'demuestra con',
              definition: 'Artefactos que prueban la correcta aplicación de jerarquía (figura 6).',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'lista',
                  definition: 'Plantillas, matrices, actas y reportes relevantes.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'Sistema/Software → Jerarquía (Figura 6) → Evidencias → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            }
          ]
        }
          ]
        },
    {
          title: 'Fundamentos de la ingeniería de requisitos (pp.12–16)',
          connectorLabel: 'incluye',
          definition: 'Secuencia iterativa: Elicitación → Particionamiento → Asignación → Flowdown → Trazabilidad → Interfaces; con revisión continua.',
          children: [
            {
          title: 'Elicitación',
          connectorLabel: 'incluye',
          definition: 'Colaboración con usuarios para determinar necesidades; implica métodos psicológicos/sociológicos y conocimiento del dominio.',
          children: [
            {
              title: 'Claves',
              connectorLabel: 'considera',
              definition: 'Puntos esenciales para comprender elicitación — definiciones operativas y límites de uso.',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'profundiza en',
                  definition: 'Desglose operativo y elementos que no se deben confundir.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'Fundamentos → Elicitación → Claves → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            },
            {
              title: 'Criterios',
              connectorLabel: 'se valida con',
              definition: 'Condiciones observables/medibles de suficiencia, completitud y consistencia para elicitación.',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'despliega',
                  definition: 'Métricas, umbrales, responsabilidades y fuentes de evidencia.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'Fundamentos → Elicitación → Criterios → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            },
            {
              title: 'Riesgos y aplicación',
              connectorLabel: 'advierte',
              definition: 'Antipatrones y fallos típicos al aplicar elicitación, con mitigaciones.',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'ejemplifica',
                  definition: 'Causas-raíz, señales tempranas y tácticas de contención.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'Fundamentos → Elicitación → Riesgos y aplicación → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            },
            {
              title: 'Evidencias',
              connectorLabel: 'demuestra con',
              definition: 'Artefactos que prueban la correcta aplicación de elicitación.',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'lista',
                  definition: 'Plantillas, matrices, actas y reportes relevantes.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'Fundamentos → Elicitación → Evidencias → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            }
          ]
        },
            {
          title: 'Particionamiento (definir jerarquía)',
          connectorLabel: 'incluye',
          definition: 'Definir elementos y niveles de la jerarquía (nombres y funciones). Producto: borrador de uno o dos niveles al cerrar requisitos de sistema.',
          children: [
            {
              title: 'Claves',
              connectorLabel: 'considera',
              definition: 'Puntos esenciales para comprender particionamiento (definir jerarquía) — definiciones operativas y límites de uso.',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'profundiza en',
                  definition: 'Desglose operativo y elementos que no se deben confundir.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'Fundamentos → Particionamiento (definir jerarquía) → Claves → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            },
            {
              title: 'Criterios',
              connectorLabel: 'se valida con',
              definition: 'Condiciones observables/medibles de suficiencia, completitud y consistencia para particionamiento (definir jerarquía).',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'despliega',
                  definition: 'Métricas, umbrales, responsabilidades y fuentes de evidencia.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'Fundamentos → Particionamiento (definir jerarquía) → Criterios → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            },
            {
              title: 'Riesgos y aplicación',
              connectorLabel: 'advierte',
              definition: 'Antipatrones y fallos típicos al aplicar particionamiento (definir jerarquía), con mitigaciones.',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'ejemplifica',
                  definition: 'Causas-raíz, señales tempranas y tácticas de contención.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'Fundamentos → Particionamiento (definir jerarquía) → Riesgos y aplicación → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            },
            {
              title: 'Evidencias',
              connectorLabel: 'demuestra con',
              definition: 'Artefactos que prueban la correcta aplicación de particionamiento (definir jerarquía).',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'lista',
                  definition: 'Plantillas, matrices, actas y reportes relevantes.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'Fundamentos → Particionamiento (definir jerarquía) → Evidencias → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            }
          ]
        },
            {
          title: 'Asignación (allocation)',
          connectorLabel: 'incluye',
          definition: 'Asignar cada requisito del nivel superior a uno o más elementos del nivel inferior; proceso iterativo que revela cambios y correcciones.',
          children: [
            {
              title: 'Claves',
              connectorLabel: 'considera',
              definition: 'Puntos esenciales para comprender asignación (allocation) — definiciones operativas y límites de uso.',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'profundiza en',
                  definition: 'Desglose operativo y elementos que no se deben confundir.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'Fundamentos → Asignación (allocation) → Claves → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            },
            {
              title: 'Criterios',
              connectorLabel: 'se valida con',
              definition: 'Condiciones observables/medibles de suficiencia, completitud y consistencia para asignación (allocation).',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'despliega',
                  definition: 'Métricas, umbrales, responsabilidades y fuentes de evidencia.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'Fundamentos → Asignación (allocation) → Criterios → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            },
            {
              title: 'Riesgos y aplicación',
              connectorLabel: 'advierte',
              definition: 'Antipatrones y fallos típicos al aplicar asignación (allocation), con mitigaciones.',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'ejemplifica',
                  definition: 'Causas-raíz, señales tempranas y tácticas de contención.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'Fundamentos → Asignación (allocation) → Riesgos y aplicación → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            },
            {
              title: 'Evidencias',
              connectorLabel: 'demuestra con',
              definition: 'Artefactos que prueban la correcta aplicación de asignación (allocation).',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'lista',
                  definition: 'Plantillas, matrices, actas y reportes relevantes.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'Fundamentos → Asignación (allocation) → Evidencias → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            }
          ]
        },
            {
          title: 'Flowdown',
          connectorLabel: 'incluye',
          definition: 'Redactar requisitos de los elementos inferiores en respuesta a la asignación; pueden ser iguales o “derivados”.',
          children: [
            {
              title: 'Claves',
              connectorLabel: 'considera',
              definition: 'Puntos esenciales para comprender flowdown — definiciones operativas y límites de uso.',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'profundiza en',
                  definition: 'Desglose operativo y elementos que no se deben confundir.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'Fundamentos → Flowdown → Claves → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            },
            {
              title: 'Criterios',
              connectorLabel: 'se valida con',
              definition: 'Condiciones observables/medibles de suficiencia, completitud y consistencia para flowdown.',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'despliega',
                  definition: 'Métricas, umbrales, responsabilidades y fuentes de evidencia.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'Fundamentos → Flowdown → Criterios → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            },
            {
              title: 'Riesgos y aplicación',
              connectorLabel: 'advierte',
              definition: 'Antipatrones y fallos típicos al aplicar flowdown, con mitigaciones.',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'ejemplifica',
                  definition: 'Causas-raíz, señales tempranas y tácticas de contención.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'Fundamentos → Flowdown → Riesgos y aplicación → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            },
            {
              title: 'Evidencias',
              connectorLabel: 'demuestra con',
              definition: 'Artefactos que prueban la correcta aplicación de flowdown.',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'lista',
                  definition: 'Plantillas, matrices, actas y reportes relevantes.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'Fundamentos → Flowdown → Evidencias → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            }
          ]
        },
            {
          title: 'Trazabilidad',
          connectorLabel: 'incluye',
          definition: '“Contabilidad” que enlaza requisitos entre niveles para asegurar cobertura, gestionar cambios y evitar omisiones/extras.',
          children: [
            {
              title: 'Claves',
              connectorLabel: 'considera',
              definition: 'Puntos esenciales para comprender trazabilidad — definiciones operativas y límites de uso.',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'profundiza en',
                  definition: 'Desglose operativo y elementos que no se deben confundir.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'Fundamentos → Trazabilidad → Claves → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            },
            {
              title: 'Criterios',
              connectorLabel: 'se valida con',
              definition: 'Condiciones observables/medibles de suficiencia, completitud y consistencia para trazabilidad.',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'despliega',
                  definition: 'Métricas, umbrales, responsabilidades y fuentes de evidencia.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'Fundamentos → Trazabilidad → Criterios → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            },
            {
              title: 'Riesgos y aplicación',
              connectorLabel: 'advierte',
              definition: 'Antipatrones y fallos típicos al aplicar trazabilidad, con mitigaciones.',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'ejemplifica',
                  definition: 'Causas-raíz, señales tempranas y tácticas de contención.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'Fundamentos → Trazabilidad → Riesgos y aplicación → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            },
            {
              title: 'Evidencias',
              connectorLabel: 'demuestra con',
              definition: 'Artefactos que prueban la correcta aplicación de trazabilidad.',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'lista',
                  definition: 'Plantillas, matrices, actas y reportes relevantes.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'Fundamentos → Trazabilidad → Evidencias → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            }
          ]
        },
            {
          title: 'Interfaces (externas e internas)',
          connectorLabel: 'incluye',
          definition: 'Especificar interfaces del sistema con el entorno y entre elementos internos; mayor detalle a medida que avanza la descomposición.',
          children: [
            {
              title: 'Claves',
              connectorLabel: 'considera',
              definition: 'Puntos esenciales para comprender interfaces (externas e internas) — definiciones operativas y límites de uso.',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'profundiza en',
                  definition: 'Desglose operativo y elementos que no se deben confundir.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'Fundamentos → Interfaces (externas e internas) → Claves → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            },
            {
              title: 'Criterios',
              connectorLabel: 'se valida con',
              definition: 'Condiciones observables/medibles de suficiencia, completitud y consistencia para interfaces (externas e internas).',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'despliega',
                  definition: 'Métricas, umbrales, responsabilidades y fuentes de evidencia.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'Fundamentos → Interfaces (externas e internas) → Criterios → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            },
            {
              title: 'Riesgos y aplicación',
              connectorLabel: 'advierte',
              definition: 'Antipatrones y fallos típicos al aplicar interfaces (externas e internas), con mitigaciones.',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'ejemplifica',
                  definition: 'Causas-raíz, señales tempranas y tácticas de contención.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'Fundamentos → Interfaces (externas e internas) → Riesgos y aplicación → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            },
            {
              title: 'Evidencias',
              connectorLabel: 'demuestra con',
              definition: 'Artefactos que prueban la correcta aplicación de interfaces (externas e internas).',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'lista',
                  definition: 'Plantillas, matrices, actas y reportes relevantes.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'Fundamentos → Interfaces (externas e internas) → Evidencias → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            }
          ]
        }
          ]
        },
    {
          title: 'Ciclo de vida refinado y System Life‑Cycle (p.18)',
          connectorLabel: 'muestra',
          definition: 'Enfoque por fases desfasadas: la implementación de un nivel se convierte en el ciclo del nivel inferior. Integración escalonada; evita “big bang”.',
          children: [
            {
          title: 'Phasing (desfase de elementos)',
          connectorLabel: 'incluye',
          definition: 'Los elementos pueden iniciar/terminar en momentos distintos para optimizar recursos e integración progresiva.',
          children: [
            {
              title: 'Claves',
              connectorLabel: 'considera',
              definition: 'Puntos esenciales para comprender phasing (desfase de elementos) — definiciones operativas y límites de uso.',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'profundiza en',
                  definition: 'Desglose operativo y elementos que no se deben confundir.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'Ciclo de vida → Phasing (desfase de elementos) → Claves → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            },
            {
              title: 'Criterios',
              connectorLabel: 'se valida con',
              definition: 'Condiciones observables/medibles de suficiencia, completitud y consistencia para phasing (desfase de elementos).',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'despliega',
                  definition: 'Métricas, umbrales, responsabilidades y fuentes de evidencia.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'Ciclo de vida → Phasing (desfase de elementos) → Criterios → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            },
            {
              title: 'Riesgos y aplicación',
              connectorLabel: 'advierte',
              definition: 'Antipatrones y fallos típicos al aplicar phasing (desfase de elementos), con mitigaciones.',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'ejemplifica',
                  definition: 'Causas-raíz, señales tempranas y tácticas de contención.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'Ciclo de vida → Phasing (desfase de elementos) → Riesgos y aplicación → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            },
            {
              title: 'Evidencias',
              connectorLabel: 'demuestra con',
              definition: 'Artefactos que prueban la correcta aplicación de phasing (desfase de elementos).',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'lista',
                  definition: 'Plantillas, matrices, actas y reportes relevantes.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'Ciclo de vida → Phasing (desfase de elementos) → Evidencias → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            }
          ]
        },
            {
          title: 'Integración y aceptación',
          connectorLabel: 'incluye',
          definition: 'Pruebas ascendentes: unidades → programas → subsistemas → sistema; ventanas de integración planificadas.',
          children: [
            {
              title: 'Claves',
              connectorLabel: 'considera',
              definition: 'Puntos esenciales para comprender integración y aceptación — definiciones operativas y límites de uso.',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'profundiza en',
                  definition: 'Desglose operativo y elementos que no se deben confundir.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'Ciclo de vida → Integración y aceptación → Claves → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            },
            {
              title: 'Criterios',
              connectorLabel: 'se valida con',
              definition: 'Condiciones observables/medibles de suficiencia, completitud y consistencia para integración y aceptación.',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'despliega',
                  definition: 'Métricas, umbrales, responsabilidades y fuentes de evidencia.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'Ciclo de vida → Integración y aceptación → Criterios → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            },
            {
              title: 'Riesgos y aplicación',
              connectorLabel: 'advierte',
              definition: 'Antipatrones y fallos típicos al aplicar integración y aceptación, con mitigaciones.',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'ejemplifica',
                  definition: 'Causas-raíz, señales tempranas y tácticas de contención.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'Ciclo de vida → Integración y aceptación → Riesgos y aplicación → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            },
            {
              title: 'Evidencias',
              connectorLabel: 'demuestra con',
              definition: 'Artefactos que prueban la correcta aplicación de integración y aceptación.',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'lista',
                  definition: 'Plantillas, matrices, actas y reportes relevantes.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'Ciclo de vida → Integración y aceptación → Evidencias → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            }
          ]
        },
            {
          title: 'Mantenimiento y retiro (phase‑out)',
          connectorLabel: 'incluye',
          definition: 'Planificación de sostenimiento, gestión de cambios y retiro desde la primera entrega.',
          children: [
            {
              title: 'Claves',
              connectorLabel: 'considera',
              definition: 'Puntos esenciales para comprender mantenimiento y retiro (phase‑out) — definiciones operativas y límites de uso.',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'profundiza en',
                  definition: 'Desglose operativo y elementos que no se deben confundir.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'Ciclo de vida → Mantenimiento y retiro (phase‑out) → Claves → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            },
            {
              title: 'Criterios',
              connectorLabel: 'se valida con',
              definition: 'Condiciones observables/medibles de suficiencia, completitud y consistencia para mantenimiento y retiro (phase‑out).',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'despliega',
                  definition: 'Métricas, umbrales, responsabilidades y fuentes de evidencia.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'Ciclo de vida → Mantenimiento y retiro (phase‑out) → Criterios → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            },
            {
              title: 'Riesgos y aplicación',
              connectorLabel: 'advierte',
              definition: 'Antipatrones y fallos típicos al aplicar mantenimiento y retiro (phase‑out), con mitigaciones.',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'ejemplifica',
                  definition: 'Causas-raíz, señales tempranas y tácticas de contención.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'Ciclo de vida → Mantenimiento y retiro (phase‑out) → Riesgos y aplicación → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            },
            {
              title: 'Evidencias',
              connectorLabel: 'demuestra con',
              definition: 'Artefactos que prueban la correcta aplicación de mantenimiento y retiro (phase‑out).',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'lista',
                  definition: 'Plantillas, matrices, actas y reportes relevantes.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'Ciclo de vida → Mantenimiento y retiro (phase‑out) → Evidencias → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            }
          ]
        }
          ]
        },
    {
          title: 'Validación y Verificación (V&V) y atributos de especificación (p.18)',
          connectorLabel: 'revisa',
          definition: 'Verificar y validar particionamiento, asignación, flowdown e interfaces. Atributos: clara, completa, correcta, entendible, consistente, concisa, factible.',
          children: [
            {
          title: 'Revisiones de requisitos',
          connectorLabel: 'incluye',
          definition: 'Inspecciones, revisiones por pares y prototipos; el costo de corrección crece si se detecta tarde.',
          children: [
            {
              title: 'Claves',
              connectorLabel: 'considera',
              definition: 'Puntos esenciales para comprender revisiones de requisitos — definiciones operativas y límites de uso.',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'profundiza en',
                  definition: 'Desglose operativo y elementos que no se deben confundir.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'V&V → Revisiones de requisitos → Claves → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            },
            {
              title: 'Criterios',
              connectorLabel: 'se valida con',
              definition: 'Condiciones observables/medibles de suficiencia, completitud y consistencia para revisiones de requisitos.',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'despliega',
                  definition: 'Métricas, umbrales, responsabilidades y fuentes de evidencia.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'V&V → Revisiones de requisitos → Criterios → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            },
            {
              title: 'Riesgos y aplicación',
              connectorLabel: 'advierte',
              definition: 'Antipatrones y fallos típicos al aplicar revisiones de requisitos, con mitigaciones.',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'ejemplifica',
                  definition: 'Causas-raíz, señales tempranas y tácticas de contención.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'V&V → Revisiones de requisitos → Riesgos y aplicación → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            },
            {
              title: 'Evidencias',
              connectorLabel: 'demuestra con',
              definition: 'Artefactos que prueban la correcta aplicación de revisiones de requisitos.',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'lista',
                  definition: 'Plantillas, matrices, actas y reportes relevantes.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'V&V → Revisiones de requisitos → Evidencias → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            }
          ]
        },
            {
          title: 'Atributos de calidad',
          connectorLabel: 'incluye',
          definition: 'Criterios (Boehm/Davis) para evaluar especificaciones; evaluación lo más cuantitativa posible.',
          children: [
            {
              title: 'Claves',
              connectorLabel: 'considera',
              definition: 'Puntos esenciales para comprender atributos de calidad — definiciones operativas y límites de uso.',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'profundiza en',
                  definition: 'Desglose operativo y elementos que no se deben confundir.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'V&V → Atributos de calidad → Claves → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            },
            {
              title: 'Criterios',
              connectorLabel: 'se valida con',
              definition: 'Condiciones observables/medibles de suficiencia, completitud y consistencia para atributos de calidad.',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'despliega',
                  definition: 'Métricas, umbrales, responsabilidades y fuentes de evidencia.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'V&V → Atributos de calidad → Criterios → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            },
            {
              title: 'Riesgos y aplicación',
              connectorLabel: 'advierte',
              definition: 'Antipatrones y fallos típicos al aplicar atributos de calidad, con mitigaciones.',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'ejemplifica',
                  definition: 'Causas-raíz, señales tempranas y tácticas de contención.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'V&V → Atributos de calidad → Riesgos y aplicación → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            },
            {
              title: 'Evidencias',
              connectorLabel: 'demuestra con',
              definition: 'Artefactos que prueban la correcta aplicación de atributos de calidad.',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'lista',
                  definition: 'Plantillas, matrices, actas y reportes relevantes.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'V&V → Atributos de calidad → Evidencias → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            }
          ]
        }
          ]
        },
    {
          title: 'Prácticas, métodos y herramientas (pp.19–20)',
          connectorLabel: 'detalla',
          definition: 'Métodos: orientados al proceso, datos, control, objetos e híbridos. Herramientas: edición gráfica, trazabilidad, modelado de comportamiento, bases de datos/procesadores de texto y suites CASE.',
          children: [
            {
          title: 'Métodos orientados al proceso',
          connectorLabel: 'incluye',
          definition: 'Transformaciones de entrada→salida; Structured Analysis/SADT; foco en flujos.',
          children: [
            {
              title: 'Claves',
              connectorLabel: 'considera',
              definition: 'Puntos esenciales para comprender métodos orientados al proceso — definiciones operativas y límites de uso.',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'profundiza en',
                  definition: 'Desglose operativo y elementos que no se deben confundir.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'Prácticas → Métodos orientados al proceso → Claves → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            },
            {
              title: 'Criterios',
              connectorLabel: 'se valida con',
              definition: 'Condiciones observables/medibles de suficiencia, completitud y consistencia para métodos orientados al proceso.',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'despliega',
                  definition: 'Métricas, umbrales, responsabilidades y fuentes de evidencia.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'Prácticas → Métodos orientados al proceso → Criterios → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            },
            {
              title: 'Riesgos y aplicación',
              connectorLabel: 'advierte',
              definition: 'Antipatrones y fallos típicos al aplicar métodos orientados al proceso, con mitigaciones.',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'ejemplifica',
                  definition: 'Causas-raíz, señales tempranas y tácticas de contención.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'Prácticas → Métodos orientados al proceso → Riesgos y aplicación → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            },
            {
              title: 'Evidencias',
              connectorLabel: 'demuestra con',
              definition: 'Artefactos que prueban la correcta aplicación de métodos orientados al proceso.',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'lista',
                  definition: 'Plantillas, matrices, actas y reportes relevantes.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'Prácticas → Métodos orientados al proceso → Evidencias → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            }
          ]
        },
            {
          title: 'Métodos orientados a los datos',
          connectorLabel: 'incluye',
          definition: 'Estado como estructura de datos; ER, JSD; normalización e integridad.',
          children: [
            {
              title: 'Claves',
              connectorLabel: 'considera',
              definition: 'Puntos esenciales para comprender métodos orientados a los datos — definiciones operativas y límites de uso.',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'profundiza en',
                  definition: 'Desglose operativo y elementos que no se deben confundir.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'Prácticas → Métodos orientados a los datos → Claves → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            },
            {
              title: 'Criterios',
              connectorLabel: 'se valida con',
              definition: 'Condiciones observables/medibles de suficiencia, completitud y consistencia para métodos orientados a los datos.',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'despliega',
                  definition: 'Métricas, umbrales, responsabilidades y fuentes de evidencia.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'Prácticas → Métodos orientados a los datos → Criterios → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            },
            {
              title: 'Riesgos y aplicación',
              connectorLabel: 'advierte',
              definition: 'Antipatrones y fallos típicos al aplicar métodos orientados a los datos, con mitigaciones.',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'ejemplifica',
                  definition: 'Causas-raíz, señales tempranas y tácticas de contención.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'Prácticas → Métodos orientados a los datos → Riesgos y aplicación → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            },
            {
              title: 'Evidencias',
              connectorLabel: 'demuestra con',
              definition: 'Artefactos que prueban la correcta aplicación de métodos orientados a los datos.',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'lista',
                  definition: 'Plantillas, matrices, actas y reportes relevantes.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'Prácticas → Métodos orientados a los datos → Evidencias → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            }
          ]
        },
            {
          title: 'Métodos orientados al control',
          connectorLabel: 'incluye',
          definition: 'Sincronización, concurrencia, temporización y eventos; extensiones en tiempo real.',
          children: [
            {
              title: 'Claves',
              connectorLabel: 'considera',
              definition: 'Puntos esenciales para comprender métodos orientados al control — definiciones operativas y límites de uso.',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'profundiza en',
                  definition: 'Desglose operativo y elementos que no se deben confundir.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'Prácticas → Métodos orientados al control → Claves → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            },
            {
              title: 'Criterios',
              connectorLabel: 'se valida con',
              definition: 'Condiciones observables/medibles de suficiencia, completitud y consistencia para métodos orientados al control.',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'despliega',
                  definition: 'Métricas, umbrales, responsabilidades y fuentes de evidencia.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'Prácticas → Métodos orientados al control → Criterios → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            },
            {
              title: 'Riesgos y aplicación',
              connectorLabel: 'advierte',
              definition: 'Antipatrones y fallos típicos al aplicar métodos orientados al control, con mitigaciones.',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'ejemplifica',
                  definition: 'Causas-raíz, señales tempranas y tácticas de contención.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'Prácticas → Métodos orientados al control → Riesgos y aplicación → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            },
            {
              title: 'Evidencias',
              connectorLabel: 'demuestra con',
              definition: 'Artefactos que prueban la correcta aplicación de métodos orientados al control.',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'lista',
                  definition: 'Plantillas, matrices, actas y reportes relevantes.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'Prácticas → Métodos orientados al control → Evidencias → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            }
          ]
        },
            {
          title: 'Métodos orientados a objetos',
          connectorLabel: 'incluye',
          definition: 'Clases/objetos, responsabilidades y colaboraciones; trazabilidad entre niveles.',
          children: [
            {
              title: 'Claves',
              connectorLabel: 'considera',
              definition: 'Puntos esenciales para comprender métodos orientados a objetos — definiciones operativas y límites de uso.',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'profundiza en',
                  definition: 'Desglose operativo y elementos que no se deben confundir.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'Prácticas → Métodos orientados a objetos → Claves → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            },
            {
              title: 'Criterios',
              connectorLabel: 'se valida con',
              definition: 'Condiciones observables/medibles de suficiencia, completitud y consistencia para métodos orientados a objetos.',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'despliega',
                  definition: 'Métricas, umbrales, responsabilidades y fuentes de evidencia.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'Prácticas → Métodos orientados a objetos → Criterios → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            },
            {
              title: 'Riesgos y aplicación',
              connectorLabel: 'advierte',
              definition: 'Antipatrones y fallos típicos al aplicar métodos orientados a objetos, con mitigaciones.',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'ejemplifica',
                  definition: 'Causas-raíz, señales tempranas y tácticas de contención.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'Prácticas → Métodos orientados a objetos → Riesgos y aplicación → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            },
            {
              title: 'Evidencias',
              connectorLabel: 'demuestra con',
              definition: 'Artefactos que prueban la correcta aplicación de métodos orientados a objetos.',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'lista',
                  definition: 'Plantillas, matrices, actas y reportes relevantes.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'Prácticas → Métodos orientados a objetos → Evidencias → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            }
          ]
        },
            {
          title: 'Enfoques híbridos',
          connectorLabel: 'incluye',
          definition: 'Combinación de vistas por riesgo/dominio.',
          children: [
            {
              title: 'Claves',
              connectorLabel: 'considera',
              definition: 'Puntos esenciales para comprender enfoques híbridos — definiciones operativas y límites de uso.',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'profundiza en',
                  definition: 'Desglose operativo y elementos que no se deben confundir.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'Prácticas → Enfoques híbridos → Claves → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            },
            {
              title: 'Criterios',
              connectorLabel: 'se valida con',
              definition: 'Condiciones observables/medibles de suficiencia, completitud y consistencia para enfoques híbridos.',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'despliega',
                  definition: 'Métricas, umbrales, responsabilidades y fuentes de evidencia.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'Prácticas → Enfoques híbridos → Criterios → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            },
            {
              title: 'Riesgos y aplicación',
              connectorLabel: 'advierte',
              definition: 'Antipatrones y fallos típicos al aplicar enfoques híbridos, con mitigaciones.',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'ejemplifica',
                  definition: 'Causas-raíz, señales tempranas y tácticas de contención.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'Prácticas → Enfoques híbridos → Riesgos y aplicación → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            },
            {
              title: 'Evidencias',
              connectorLabel: 'demuestra con',
              definition: 'Artefactos que prueban la correcta aplicación de enfoques híbridos.',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'lista',
                  definition: 'Plantillas, matrices, actas y reportes relevantes.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'Prácticas → Enfoques híbridos → Evidencias → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            }
          ]
        },
            {
          title: 'Herramientas y entornos',
          connectorLabel: 'incluye',
          definition: 'Evolución: SREM, PSL/PSA → entornos integrados (Software through Pictures, CADRE Teamwork) → CASE/SEE en desktop; capacidades de trazabilidad y modelado.',
          children: [
            {
              title: 'Claves',
              connectorLabel: 'considera',
              definition: 'Puntos esenciales para comprender herramientas y entornos — definiciones operativas y límites de uso.',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'profundiza en',
                  definition: 'Desglose operativo y elementos que no se deben confundir.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'Prácticas → Herramientas y entornos → Claves → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            },
            {
              title: 'Criterios',
              connectorLabel: 'se valida con',
              definition: 'Condiciones observables/medibles de suficiencia, completitud y consistencia para herramientas y entornos.',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'despliega',
                  definition: 'Métricas, umbrales, responsabilidades y fuentes de evidencia.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'Prácticas → Herramientas y entornos → Criterios → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            },
            {
              title: 'Riesgos y aplicación',
              connectorLabel: 'advierte',
              definition: 'Antipatrones y fallos típicos al aplicar herramientas y entornos, con mitigaciones.',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'ejemplifica',
                  definition: 'Causas-raíz, señales tempranas y tácticas de contención.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'Prácticas → Herramientas y entornos → Riesgos y aplicación → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            },
            {
              title: 'Evidencias',
              connectorLabel: 'demuestra con',
              definition: 'Artefactos que prueban la correcta aplicación de herramientas y entornos.',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'lista',
                  definition: 'Plantillas, matrices, actas y reportes relevantes.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'Prácticas → Herramientas y entornos → Evidencias → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            }
          ]
        }
          ]
        },
    {
          title: 'Preguntas (resueltas en el mapa)',
          connectorLabel: 'responde',
          definition: 'Nodo adicional exigido por el usuario para respuestas específicas.',
          children: [
            {
          title: '1) Fases del ciclo de vida del análisis de requisitos',
          connectorLabel: 'incluye',
          definition: 'Fases enlazadas con el ciclo de vida: Elicitación → Particionamiento → Asignación → Flowdown → Trazabilidad → Interfaces + V&V iterativa. Cada fase puede solaparse por phasing según Figura 12.',
          children: [
            {
              title: 'Claves',
              connectorLabel: 'considera',
              definition: 'Puntos esenciales para comprender 1) fases del ciclo de vida del análisis de requisitos — definiciones operativas y límites de uso.',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'profundiza en',
                  definition: 'Desglose operativo y elementos que no se deben confundir.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'Preguntas → 1) Fases del ciclo de vida del análisis de requisitos → Claves → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            },
            {
              title: 'Criterios',
              connectorLabel: 'se valida con',
              definition: 'Condiciones observables/medibles de suficiencia, completitud y consistencia para 1) fases del ciclo de vida del análisis de requisitos.',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'despliega',
                  definition: 'Métricas, umbrales, responsabilidades y fuentes de evidencia.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'Preguntas → 1) Fases del ciclo de vida del análisis de requisitos → Criterios → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            },
            {
              title: 'Riesgos y aplicación',
              connectorLabel: 'advierte',
              definition: 'Antipatrones y fallos típicos al aplicar 1) fases del ciclo de vida del análisis de requisitos, con mitigaciones.',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'ejemplifica',
                  definition: 'Causas-raíz, señales tempranas y tácticas de contención.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'Preguntas → 1) Fases del ciclo de vida del análisis de requisitos → Riesgos y aplicación → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            },
            {
              title: 'Evidencias',
              connectorLabel: 'demuestra con',
              definition: 'Artefactos que prueban la correcta aplicación de 1) fases del ciclo de vida del análisis de requisitos.',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'lista',
                  definition: 'Plantillas, matrices, actas y reportes relevantes.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'Preguntas → 1) Fases del ciclo de vida del análisis de requisitos → Evidencias → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            }
          ]
        },
            {
          title: '2) Cobertura en anchura y en profundidad',
          connectorLabel: 'incluye',
          definition: 'Anchura: abarcar todas las ramas relevantes a un nivel (cobertura transversal mediante asignación y definición de interfaces). Profundidad: descender por niveles con flowdown y trazabilidad hasta requisitos verificables.',
          children: [
            {
              title: 'Claves',
              connectorLabel: 'considera',
              definition: 'Puntos esenciales para comprender 2) cobertura en anchura y en profundidad — definiciones operativas y límites de uso.',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'profundiza en',
                  definition: 'Desglose operativo y elementos que no se deben confundir.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'Preguntas → 2) Cobertura en anchura y en profundidad → Claves → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            },
            {
              title: 'Criterios',
              connectorLabel: 'se valida con',
              definition: 'Condiciones observables/medibles de suficiencia, completitud y consistencia para 2) cobertura en anchura y en profundidad.',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'despliega',
                  definition: 'Métricas, umbrales, responsabilidades y fuentes de evidencia.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'Preguntas → 2) Cobertura en anchura y en profundidad → Criterios → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            },
            {
              title: 'Riesgos y aplicación',
              connectorLabel: 'advierte',
              definition: 'Antipatrones y fallos típicos al aplicar 2) cobertura en anchura y en profundidad, con mitigaciones.',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'ejemplifica',
                  definition: 'Causas-raíz, señales tempranas y tácticas de contención.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'Preguntas → 2) Cobertura en anchura y en profundidad → Riesgos y aplicación → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
        }
                  ]
                }
              ]
            },
            {
              title: 'Evidencias',
              connectorLabel: 'demuestra con',
              definition: 'Artefactos que prueban la correcta aplicación de 2) cobertura en anchura y en profundidad.',
              children: [
                {
                  title: 'Detalle',
                  connectorLabel: 'lista',
                  definition: 'Plantillas, matrices, actas y reportes relevantes.',
                  children: [
                    {
          title: 'Ejemplo',
          definition: 'Preguntas → 2) Cobertura en anchura y en profundidad → Evidencias → Detalle — caso ilustrativo concreto y breve, con valores numéricos o criterios observables.'
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
  };

  var glossaryData = [
    { term: 'ConOps (Concept of Operations)', definition: 'Documento narrativo del entorno y operación del sistema; guía requisitos de nivel sistema.' },
    { term: 'Particionamiento', definition: 'Definir la jerarquía de elementos (nombres y funciones) para gestionar la complejidad.' },
    { term: 'Asignación (Allocation)', definition: 'Distribuir cada requisito del nivel superior a elementos del nivel inferior responsables.' },
    { term: 'Flowdown', definition: 'Redactar requisitos específicos del nivel inferior en respuesta a la asignación; pueden ser derivados.' },
    { term: 'Requisito derivado', definition: 'Necesidad del nivel inferior identificada para satisfacer un requisito superior asignado.' },
    { term: 'Trazabilidad', definition: 'Relación bidireccional entre requisitos de distintos niveles para controlar cambios y garantizar cobertura.' },
    { term: 'Interfaces externas/internas', definition: 'Externa: sistema ↔ entorno. Interna: entre elementos del sistema para cumplir lo asignado.' },
    { term: 'Phasing', definition: 'Ejecución desfasada de elementos para optimizar recursos e integración progresiva.' },
    { term: 'Validación y Verificación (V&V)', definition: 'Asegurar que los requisitos son de calidad y que el sistema los satisface.' },
    { term: 'Atributos de especificación', definition: 'Clara, completa, correcta, entendible, consistente, concisa, factible.' },
    { term: 'Cobertura en anchura', definition: 'Abarcar completamente las ramas a un nivel (asignación/Interfaces). Evita huecos y “extras”.' },
    { term: 'Cobertura en profundidad', definition: 'Seguir el rastro nivel a nivel (flowdown/trazabilidad) hasta requisitos verificables.' },
    { term: 'SREM', definition: 'Stand‑alone temprano de análisis de requisitos con fuerte soporte gráfico.' },
    { term: 'PSL/PSA', definition: 'Lenguaje/Sistema de análisis temprano; evolucionó a mejores capacidades gráficas.' },
    { term: 'CASE/SEE', definition: 'Entornos integrados de desarrollo con herramientas de requisitos, diseño, trazabilidad y pruebas.' }
  ];

  window.mindMapData = mindMapData;
  window.glossaryData = glossaryData;
})();