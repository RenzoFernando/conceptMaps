var mindMapData = {
    title: 'Requisitos y Arquitectura de Software: ¿Cómo se conectan?',
    definition: 'Reporte CMU/SEI-2006-TR-013 de Len Bass y su equipo (agosto 2006).',
    children: [
        {
            title: 'El Problema Central: Los Requisitos Clave (ASR)',
            connectorLabel: 'se enfoca en',
            definition: 'Entender qué son los Requisitos Arquitectónicamente Significativos (ASR), por qué son la clave del éxito y los desafíos que tenemos para definirlos bien desde el principio.',
            children: [
                {
                    title: '¿Qué es un Requisito Arquitectónicamente Significativo (ASR)?',
                    connectorLabel: 'primero, definir',
                    definition: 'Son esos requisitos que tienen un efecto profundo y de largo alcance en la estructura del software. No son los detalles, son los pilares.',
                    children: [
                        {
                            title: 'Fuentes Comunes de un ASR',
                            connectorLabel: 'surgen de',
                            definition: 'Los ASR no siempre son obvios. Vienen de varias fuentes que moldean la estructura fundamental del sistema.',
                            children: [
                                {
                                    title: 'Atributos de Calidad', connectorLabel: 'como los', definition: 'Rendimiento, seguridad, modificabilidad, fiabilidad. Son los que más pesan en las decisiones de diseño estructural.',
                                    children: [
                                        {
                                            title: 'Tácticas Arquitectónicas', connectorLabel: 'requieren', definition: 'Cada atributo de calidad se logra con un conjunto de técnicas estructurales. Por ejemplo, la alta disponibilidad se logra con redundancia.',
                                            children: [
                                                {
                                                    title: 'Ejemplo de Atributo de Calidad',
                                                    definition: 'ASR: "El sistema debe estar disponible el 99.99% del tiempo". Esto obliga a una arquitectura con servidores redundantes, balanceadores de carga y bases de datos replicadas.'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    title: 'Volumen de Funcionalidad', connectorLabel: 'como el', definition: 'Una sola función no impacta, pero un montón de funciones similares obligan a buscar patrones comunes para no reinventar la rueda.',
                                    children: [
                                        {
                                            title: 'Identificación de Abstracciones', connectorLabel: 'para la', definition: 'La arquitectura debe encontrar partes comunes en la funcionalidad para reducir el tiempo de implementación y mantenimiento.',
                                            children: [
                                                {
                                                    title: 'Ejemplo de Volumen de Funcionalidad',
                                                    definition: 'Un sistema de e-commerce tiene 50 tipos diferentes de reportes. Este volumen justifica crear un "motor de reportes" genérico en la arquitectura, en lugar de codificar cada reporte desde cero.'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    title: 'Familias de Sistemas (Product Lines)', connectorLabel: 'como las', definition: 'Cuando creas una línea de productos, las variaciones y los puntos en común son ASRs clave que definen la plataforma base.',
                                    children: [
                                        {
                                            title: 'Manejo de Variabilidad', connectorLabel: 'para el', definition: 'La arquitectura debe ser flexible para soportar diferentes versiones del producto sin tener que reescribir todo el núcleo.',
                                            children: [
                                                {
                                                    title: 'Ejemplo de Familias de Sistemas',
                                                    definition: 'Una empresa de software automotriz tiene una arquitectura base. De ahí saca la versión "básica" para un auto económico y la "premium" (con GPS y multimedia) para un auto de lujo.'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    title: 'Elección de Tecnologías', connectorLabel: 'como la', definition: 'Si te obligan a usar J2EE o .NET, esa decisión restringe todo el diseño y se convierte en un ASR por sí misma.',
                                    children: [
                                        {
                                            title: 'Restricciones de Diseño', connectorLabel: 'imponen', definition: 'La tecnología elegida viene con su propio conjunto de reglas, patrones y limitaciones que moldean la arquitectura.',
                                            children: [
                                                {
                                                    title: 'Ejemplo de Elección de Tecnología',
                                                    definition: 'El cliente exige usar un framework específico de JavaScript. La arquitectura debe adoptar un enfoque de Single-Page Application (SPA) y comunicarse con el backend vía APIs REST, decisiones dictadas por el framework.'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    title: 'Despliegue y Operaciones', connectorLabel: 'como el', definition: 'Cómo se va a instalar, monitorear y mantener el sistema también impone requisitos estructurales importantes.',
                                    children: [
                                        {
                                            title: 'Soporte Operacional', connectorLabel: 'requiere', definition: 'La arquitectura puede necesitar componentes específicos para facilitar el despliegue o el monitoreo.',
                                            children: [
                                                {
                                                    title: 'Ejemplo de Despliegue',
                                                    definition: 'Requisito: "El sistema debe poder actualizarse sin tiempo de inactividad (zero-downtime)". La arquitectura debe soportar un despliegue Blue/Green o Canary, lo cual es una decisión estructural.'
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
                    title: 'Los 3 Retos Fundamentales a Resolver',
                    connectorLabel: 'implica superar',
                    definition: 'Para pasar de una idea de negocio a ASRs bien definidos, hay tres problemas que todo método debería solucionar.',
                    children: [
                        {
                            title: '1. Expresión de Requisitos', connectorLabel: 'el reto de la', definition: 'Los requisitos deben estar en un formato que le dé al arquitecto la información que necesita para diseñar, sin ser vagos.',
                            children: [
                                {
                                    title: 'Necesidad de Precisión', connectorLabel: 'la', definition: 'La flexibilidad total del lenguaje natural es peligrosa. Se necesita una estructura que exija claridad y criterios medibles.',
                                    children: [
                                        {
                                            title: 'Ejemplo de Expresión',
                                            definition: 'En vez de "el sistema debe ser seguro", una buena expresión sería: "El sistema debe encriptar todos los datos en reposo usando AES-256". Esto le da al arquitecto una guía clara.'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            title: '2. Elicitación de Requisitos', connectorLabel: 'el reto de la', definition: 'El proceso de obtener los requisitos debe ser capaz de sacar a la luz los ASRs, que a menudo están ocultos o no son obvios para el cliente.',
                            children: [
                                {
                                    title: 'Descubrimiento Activo', connectorLabel: 'requiere un', definition: 'No basta con preguntar "¿qué quieres?". Hay que usar técnicas para explorar las necesidades implícitas, especialmente las no funcionales.',
                                    children: [
                                        {
                                            title: 'Ejemplo de Elicitación',
                                            definition: 'Durante un taller, se le pregunta al cliente: "¿Qué pasaría si el sistema se cae por una hora?". La respuesta ("perderíamos miles de dólares") saca a la luz un ASR de alta disponibilidad que no se había mencionado.'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            title: '3. Vínculo con Metas de Negocio', connectorLabel: 'el reto del', definition: 'Las metas de negocio deben ser la entrada sistemática para el proceso de elicitación, no una idea vaga en el aire.',
                            children: [
                                {
                                    title: 'Hallazgo Principal del Reporte', connectorLabel: 'según el', definition: 'El reporte concluye que hay buenas soluciones para los retos 1 y 2, pero el vínculo sistemático con las metas de negocio (reto 3) sigue siendo el gran problema sin resolver.',
                                    children: [
                                        {
                                            title: 'Ejemplo del Hallazgo',
                                            definition: 'Sabemos cómo escribir un requisito de rendimiento medible (Expresión) y tenemos talleres para descubrirlos (Elicitación), pero nos cuesta traducir "Queremos ser líderes del mercado" en requisitos técnicos concretos de forma sistemática (Vínculo).'
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
            title: 'Criterios de Evaluación para los Métodos',
            connectorLabel: 'se evalúan con',
            definition: 'Para comparar los métodos, el equipo del SEI definió un conjunto de criterios agrupados en tres categorías principales.',
            children: [
                {
                    title: 'Ajuste en el Proceso de Desarrollo',
                    connectorLabel: 'criterios de',
                    definition: 'Cómo el método se integra en el día a día del desarrollo de software.',
                    children: [
                        {
                            title: 'Soporte para Descubrir ASRs', connectorLabel: 'mide el', definition: '¿El método ayuda activamente a encontrar los ASRs o los trata como un requisito más?',
                            children: [
                                {
                                    title: 'Guía Explícita', connectorLabel: 'busca una', definition: 'Un buen método debería tener pasos o artefactos específicos para identificar los requisitos de alto impacto.',
                                    children: [
                                        {
                                            title: 'Ejemplo de Soporte',
                                            definition: 'El QAW está explícitamente diseñado para esto. En cambio, el lenguaje natural no ofrece ninguna guía; es una hoja en blanco.'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Derivación desde Metas de Negocio', connectorLabel: 'mide la', definition: '¿Ayuda a traducir los objetivos de la empresa ("ganar más clientes") en requisitos técnicos ("soportar 10,000 usuarios concurrentes")?',
                            children: [
                                {
                                    title: 'Trazabilidad Estratégica', connectorLabel: 'requiere', definition: 'Debe existir un camino claro y documentado desde la meta de negocio hasta el requisito técnico que la soporta.',
                                    children: [
                                        {
                                            title: 'Ejemplo de Derivación',
                                            definition: 'El enfoque de O\'Brien es el único que intenta hacer esto de forma sistemática, aunque es muy costoso en tiempo y esfuerzo.'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Chequeo de Consistencia', connectorLabel: 'mide el', definition: '¿El método ofrece alguna forma de verificar que los requisitos no se contradicen entre sí?',
                            children: [
                                {
                                    title: 'Validación Formal o Semiformal', connectorLabel: 'mediante', definition: 'Un método que usa un modelo (como UML) tiene más chances de detectar inconsistencias que uno basado en texto libre.',
                                    children: [
                                        {
                                            title: 'Ejemplo de Inconsistencia',
                                            definition: 'Un requisito pide "respuesta en menos de 1 segundo" y otro "usar un proceso de validación de 3 pasos que tarda 5 segundos". El lenguaje natural no detecta esto; un modelo podría.'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Soporte para Pruebas (Testing)', connectorLabel: 'mide el', definition: '¿Los requisitos que genera son lo suficientemente claros y medibles para poder crear casos de prueba?',
                            children: [
                                {
                                    title: 'Requisitos Verificables', connectorLabel: 'fomenta', definition: 'El resultado del método debe ser un conjunto de afirmaciones que se puedan probar de forma objetiva.',
                                    children: [
                                        {
                                            title: 'Ejemplo de Soporte para Pruebas',
                                            definition: 'Un requisito como "El sistema responderá en menos de 500ms" es testeable. Uno como "El sistema será rápido" no lo es. Un buen método fomenta lo primero.'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    title: 'Calidad de los Artefactos Producidos',
                    connectorLabel: 'criterios de',
                    definition: 'Qué tan buenos son los documentos o modelos que resultan del método.',
                    children: [
                        {
                            title: 'Expresividad', connectorLabel: 'mide la', definition: '¿El formato permite describir toda la gama de requisitos (rendimiento, seguridad, etc.) sin ser vago?',
                            children: [
                                {
                                    title: 'Riqueza y Estructura', connectorLabel: 'equilibra', definition: 'El método ideal tiene un vocabulario rico para distintos atributos de calidad, pero con una estructura que obliga a la precisión.',
                                    children: [
                                        {
                                            title: 'Ejemplo de Expresividad',
                                            definition: 'Los escenarios del QAW son muy expresivos para atributos de calidad porque su estructura (estímulo, respuesta, medida) obliga a ser concreto.'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Facilidad de Organización', connectorLabel: 'mide la', definition: '¿Es fácil para un arquitecto encontrar todos los requisitos relacionados con, por ejemplo, la seguridad?',
                            children: [
                                {
                                    title: 'Mecanismos de Agrupación', connectorLabel: 'provee', definition: 'El método debe permitir categorizar, etiquetar o agrupar requisitos para que se puedan filtrar y analizar por temas.',
                                    children: [
                                        {
                                            title: 'Ejemplo de Organización',
                                            definition: 'El Análisis Global organiza los factores por defecto en categorías (tecnológico, organizacional, producto), lo que facilita encontrarlos.'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Soporte para Variabilidad', connectorLabel: 'mide el', definition: '¿El método ayuda a definir requisitos para una familia de productos (product lines), especificando qué es común y qué varía?',
                            children: [
                                {
                                    title: 'Manejo de Puntos de Variación', connectorLabel: 'incluye el', definition: 'El método debe tener una forma de marcar ciertos requisitos como opcionales o alternativos dependiendo de la versión del producto.',
                                    children: [
                                        {
                                            title: 'Ejemplo de Variabilidad',
                                            definition: 'En Casos de Uso, la relación "extends" se puede usar para modelar una funcionalidad opcional que solo aparece en la versión "Premium" de una aplicación.'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    title: 'Facilidad de Uso del Método',
                    connectorLabel: 'criterios de',
                    definition: 'Qué tan práctico es aplicar el método en un proyecto real.',
                    children: [
                        {
                            title: 'Nivel de Habilidad Requerido', connectorLabel: 'mide el', definition: '¿Se necesita ser un experto para usar el método o es accesible para un equipo promedio?',
                            children: [
                                {
                                    title: 'Curva de Aprendizaje', connectorLabel: 'analiza la', definition: 'Considera el tiempo y esfuerzo que le tomaría a un equipo aprender y aplicar el método de forma efectiva.',
                                    children: [
                                        {
                                            title: 'Ejemplo de Habilidad',
                                            definition: 'Escribir en lenguaje natural no requiere habilidad especial (aunque hacerlo bien, sí). Facilitar un QAW requiere habilidades tanto de arquitectura como de moderación.'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Soporte de Herramientas (Tooling)', connectorLabel: 'mide el', definition: '¿Existen herramientas de software que faciliten la aplicación del método?',
                            children: [
                                {
                                    title: 'Automatización y Gestión', connectorLabel: 'busca', definition: 'Las herramientas pueden ayudar a dibujar diagramas, gestionar la trazabilidad, detectar inconsistencias y generar reportes.',
                                    children: [
                                        {
                                            title: 'Ejemplo de Tooling',
                                            definition: 'Para el modelado de Casos de Uso, existen muchas herramientas UML. Para el QAW, no hay herramientas especializadas, se basa más en la facilitación humana.'
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
            title: 'Los 5 Métodos Analizados',
            connectorLabel: 'se comparan',
            definition: 'El corazón del reporte: una evaluación detallada de cinco enfoques populares o prometedores para la definición de requisitos.',
            children: [
                {
                    title: '1. Especificación con Lenguaje Natural',
                    connectorLabel: 'el método de',
                    definition: 'El enfoque tradicional, especialmente en entornos como el DoD de EE.UU., donde los requisitos se listan en un documento usando frases como "El sistema deberá...".',
                    children: [
                        {
                            title: 'Artefacto Producido', connectorLabel: 'su', definition: 'Generalmente un documento extenso (CSCI en el DoD) con una lista de "shalls" y "wills", organizado en secciones fijas (interfaces, rendimiento, seguridad, etc.).',
                            children: [
                                {
                                    title: 'Evaluación del Artefacto', connectorLabel: 'la', definition: 'Su fortaleza es que funciona como una checklist, pero es difícil de mantener consistente y a menudo contiene ambigüedades.',
                                    children: [
                                        {
                                            title: 'Ejemplo de Artefacto',
                                            definition: 'Un extracto de un documento de requisitos: "3.1.4 El sistema deberá proveer una respuesta al usuario en un tiempo razonable". El término "razonable" es el problema principal aquí.'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Proceso de Aplicación', connectorLabel: 'su', definition: 'Normalmente es un proceso formal donde una entidad (el cliente) escribe la especificación y otra (el contratista) la implementa. Sirve como vehículo de comunicación contractual.',
                            children: [
                                {
                                    title: 'Evaluación del Proceso', connectorLabel: 'la', definition: 'Es un proceso rígido que no fomenta la colaboración para descubrir requisitos ocultos. La habilidad para escribir bien es crucial y escasa.',
                                    children: [
                                        {
                                            title: 'Ejemplo de Proceso',
                                            definition: 'Una agencia del gobierno publica un documento de 500 páginas con "shalls". Las empresas contratistas lo leen y hacen una propuesta. Hay poco espacio para la negociación o el descubrimiento conjunto.'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    title: '2. Análisis de Casos de Uso',
                    connectorLabel: 'el método de',
                    definition: 'Un enfoque que modela los requisitos describiendo las interacciones entre actores externos (usuarios, otros sistemas) y el sistema para lograr un objetivo.',
                    children: [
                        {
                            title: 'Artefacto Producido', connectorLabel: 'su', definition: 'Un modelo de Casos de Uso, que incluye diagramas UML, descripciones detalladas de cada caso (flujos de eventos, pre/post condiciones) y escenarios específicos.',
                            children: [
                                {
                                    title: 'Evaluación del Artefacto', connectorLabel: 'la', definition: 'Muy efectivo para visualizar la funcionalidad, pero los ASRs no funcionales suelen quedar como notas al margen o texto dentro de un flujo, difíciles de encontrar.',
                                    children: [
                                        {
                                            title: 'Ejemplo de Artefacto',
                                            definition: 'Un diagrama UML muestra al actor "Cliente" conectado al caso de uso "Realizar Compra". El texto del caso de uso describe los pasos, y en el paso de "Confirmar Pago" se anota: "El sistema debe responder en < 2 segundos".'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Proceso de Aplicación', connectorLabel: 'su', definition: 'Puede ser top-down (identificar actores y luego casos) o bottom-up (empezar con escenarios concretos). Es un proceso colaborativo, idealmente en talleres.',
                            children: [
                                {
                                    title: 'Evaluación del Proceso', connectorLabel: 'la', definition: 'Fomenta el entendimiento de la funcionalidad, pero depende mucho de la habilidad del ingeniero de requisitos para guiar la conversación hacia los ASRs.',
                                    children: [
                                        {
                                            title: 'Ejemplo de Proceso',
                                            definition: 'En un taller, el equipo pregunta al cliente: "Describe paso a paso cómo un usuario se registra". De esa narrativa, se extraen el caso de uso, los flujos alternos (ej. email ya existe) y las excepciones.'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    title: '3. Quality Attribute Workshop (QAW)',
                    connectorLabel: 'el método de',
                    definition: 'Un taller facilitado por el SEI, diseñado específicamente para obtener y priorizar los atributos de calidad de un sistema directamente de los stakeholders.',
                    children: [
                        {
                            title: 'Artefacto Producido', connectorLabel: 'su', definition: 'Una lista priorizada de Escenarios de Atributos de Calidad. Cada escenario es una historia corta con un estímulo, un entorno, una respuesta y una medida concreta.',
                            children: [
                                {
                                    title: 'Evaluación del Artefacto', connectorLabel: 'la', definition: 'Es el mejor artefacto evaluado para expresar ASRs de calidad de forma clara y testeable, aunque no cubre otros tipos de ASRs.',
                                    children: [
                                        {
                                            title: 'Ejemplo de Artefacto',
                                            definition: 'Escenario de modificabilidad priorizado #1: "Un desarrollador, bajo operación normal (entorno), debe añadir soporte para un nuevo proveedor de pagos (estímulo). La tarea debe completarse en 3 días-persona (respuesta medible)".'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Proceso de Aplicación', connectorLabel: 'su', definition: 'Un taller de 1 a 2 días con 8 pasos: presentaciones, brainstorming de escenarios, consolidación, priorización por votos y refinamiento de los más importantes.',
                            children: [
                                {
                                    title: 'Evaluación del Proceso', connectorLabel: 'la', definition: 'Es un proceso muy efectivo y estructurado para descubrir ASRs de calidad. Su principal desventaja es que requiere un facilitador con experiencia en arquitectura.',
                                    children: [
                                        {
                                            title: 'Ejemplo de Proceso',
                                            definition: 'En el paso de brainstorming, el facilitador pide a cada stakeholder que piense en un evento inesperado. El de operaciones dice: "Un ataque de denegación de servicio". De ahí nace un escenario de seguridad.'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    title: '4. Análisis Global (Global Analysis)',
                    connectorLabel: 'el método de',
                    definition: 'Un método para identificar y analizar los factores que tienen una influencia global en la arquitectura, agrupándolos en tecnológicos, organizacionales y de producto.',
                    children: [
                        {
                            title: 'Artefacto Producido', connectorLabel: 'su', definition: 'Tablas de factores (una por cada categoría) y tarjetas de issues (problemas de diseño que surgen de los factores), con estrategias para abordarlos.',
                            children: [
                                {
                                    title: 'Evaluación del Artefacto', connectorLabel: 'la', definition: 'Las tablas son una excelente forma de organizar los ASRs y las restricciones, haciéndolos fáciles de encontrar y analizar. Ayudan a planificar las pruebas.',
                                    children: [
                                        {
                                            title: 'Ejemplo de Artefacto',
                                            definition: 'Tabla de Factores Tecnológicos: Factor -> "Estándar de la industria para APIs". Variabilidad -> "Puede cambiar de REST a GraphQL en 2 años". Impacto -> "La arquitectura debe tener una capa de servicio desacoplada".'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Proceso de Aplicación', connectorLabel: 'su', definition: 'Un proceso en dos fases (analizar factores y desarrollar estrategias) que se repite a medida que avanza el diseño. Es complementario a otros análisis.',
                            children: [
                                {
                                    title: 'Evaluación del Proceso', connectorLabel: 'la', definition: 'Es un proceso estructurado que ayuda a pensar en el "big picture", pero no dice cómo escribir los factores en sí, dejando la puerta abierta a la vaguedad.',
                                    children: [
                                        {
                                            title: 'Ejemplo de Proceso',
                                            definition: 'El equipo se reúne para la fase de "analizar factores". Llenan la tabla de factores organizacionales y descubren que el presupuesto es muy ajustado, lo que genera una "tarjeta de issue" sobre la viabilidad de usar servicios cloud costosos.'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    title: '5. El Enfoque de O\'Brien',
                    connectorLabel: 'el método de',
                    definition: 'Una aproximación que busca un vínculo muy fuerte entre las metas de negocio, los atributos de calidad medibles y las decisiones de arquitectura.',
                    children: [
                        {
                            title: 'Artefacto Producido', connectorLabel: 'su', definition: 'Seis artefactos clave, incluyendo el caso de negocio, requisitos funcionales y de calidad, un SLA legible y, lo más novedoso, un SLA Ejecutable.',
                            children: [
                                {
                                    title: 'SLA Ejecutable', connectorLabel: 'destaca el', definition: 'Un acuerdo de nivel de servicio que puede ser verificado en tiempo real por el sistema en ejecución, a través de monitoreo automatizado.',
                                    children: [
                                        {
                                            title: 'Ejemplo de Artefacto',
                                            definition: 'El SLA Ejecutable es un dashboard que muestra en tiempo real el P99 de latencia de las transacciones. Si supera los 500ms, se dispara una alerta automática. El requisito se vuelve observable.'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Proceso de Aplicación', connectorLabel: 'su', definition: 'Un proceso que parte del caso de negocio, deriva los ASRs de calidad, diseña la arquitectura para cumplirlos y luego monitorea su cumplimiento durante todo el ciclo de vida.',
                            children: [
                                {
                                    title: 'Derivación desde el Negocio', connectorLabel: 'enfatiza la', definition: 'Requiere una interacción intensa con la alta dirección para traducir sus metas en métricas de calidad cuantificables.',
                                    children: [
                                        {
                                            title: 'Ejemplo de Proceso',
                                            definition: 'Meta de Negocio: "Reducir la tasa de abandono de clientes en un 15%". ASR Derivado (Rendimiento): "El tiempo de carga de la página principal no debe exceder los 1.2 segundos para el 99% de los usuarios", ya que se identificó la lentitud como causa principal del abandono.'
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
            title: 'Conclusiones y lo que Falta',
            connectorLabel: 'finalmente, las',
            definition: 'El reporte cierra resumiendo qué tan bien resolvimos los tres retos iniciales y qué es lo que sigue faltando en el campo de la ingeniería de requisitos.',
            children: [
                {
                    title: 'Estado de los 3 Retos Fundamentales',
                    connectorLabel: 'el',
                    definition: 'Una mirada final al estado del arte según la evaluación de los cinco métodos.',
                    children: [
                        {
                            title: '1. Expresión de Requisitos',
                            connectorLabel: 'sobre la',
                            definition: 'Conclusión: ¡Problema bien resuelto! Se considera que los Escenarios de Atributos de Calidad del QAW son la forma más efectiva de expresar los ASRs de manera clara, sin ambigüedad y medible.',
                            children: [
                                {
                                    title: 'Claridad y Precisión', connectorLabel: 'gracias a la', definition: 'La estructura de los escenarios (estímulo, respuesta, medida) elimina la vaguedad y produce requisitos testeables por naturaleza.',
                                    children: [
                                        {
                                            title: 'Ejemplo de la Conclusión',
                                            definition: 'La industria ya tiene una herramienta (escenarios QAW) que funciona muy bien para escribir requisitos de calidad que un arquitecto puede entender y un tester puede probar.'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            title: '2. Elicitación de Requisitos',
                            connectorLabel: 'sobre la',
                            definition: 'Conclusión: ¡Problema bien resuelto! Existen técnicas robustas como el QAW para descubrir atributos de calidad y el Análisis Global para otros factores importantes.',
                            children: [
                                {
                                    title: 'Métodos Estructurados', connectorLabel: 'usando', definition: 'En lugar de depender de la suerte, métodos como el QAW guían a los stakeholders para que piensen en los ASRs de forma sistemática.',
                                    children: [
                                        {
                                            title: 'Ejemplo de la Conclusión',
                                            definition: 'Ya no es necesario esperar a que el cliente mencione la seguridad. Un buen proceso de elicitación, como el QAW, lo preguntará activamente a través de escenarios de amenaza.'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            title: '3. Vínculo con Metas de Negocio',
                            connectorLabel: 'y sobre el',
                            definition: 'Conclusión: ¡El gran problema pendiente! El enfoque de O\'Brien es un paso en la dirección correcta, pero es demasiado costoso y laborioso. Falta un método sistemático y eficiente.',
                            children: [
                                {
                                    title: 'El Puente Roto', connectorLabel: 'representa', definition: 'La mayor dificultad sigue siendo traducir de forma fiable y repetible los objetivos de alto nivel del negocio en las decisiones técnicas que los harán posibles.',
                                    children: [
                                        {
                                            title: 'Ejemplo de la Conclusión General',
                                            definition: 'En resumen: como industria, ya sabemos cómo escribir bien un requisito importante y tenemos métodos para encontrarlos. Lo que todavía nos falla es el puente sistemático para conectar el "qué quiere el negocio" con el "qué debe hacer el sistema técnicamente".'
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
    { term: 'ASR (Requisito Arquitectónicamente Significativo)', definition: 'Un requisito que tiene un impacto profundo en la estructura de la arquitectura de software. Define los pilares del sistema, no los detalles.' },
    { term: 'Elicitación', definition: 'El proceso de descubrir, obtener y definir los requisitos de los stakeholders (clientes, usuarios, etc.). Es un trabajo de investigación y colaboración.' },
    { term: 'Atributo de Calidad', definition: 'Una propiedad no funcional del sistema que describe qué tan bien hace algo. Ejemplos: rendimiento, seguridad, usabilidad, modificabilidad.' },
    { term: 'CSCI (Computer Software Configuration Item)', definition: 'Un documento estándar del Departamento de Defensa de EE.UU. para especificar los requisitos de un ítem de software.' },
    { term: 'Caso de Uso', definition: 'Una descripción de una secuencia de acciones entre un actor (ej. un usuario) y el sistema para lograr un objetivo de valor para el actor.' },
    { term: 'QAW (Quality Attribute Workshop)', definition: 'Un taller facilitado, creado por el SEI, para identificar y priorizar los requisitos de atributos de calidad de un sistema con los stakeholders.' },
    { term: 'Análisis Global', definition: 'Un método para identificar factores tecnológicos, organizacionales y de producto que tienen una influencia global en la arquitectura.' },
    { term: 'SLA (Service-Level Agreement)', definition: 'Un acuerdo de nivel de servicio que describe en términos medibles (a menudo de atributos de calidad) el servicio esperado del sistema.' },
    { term: 'Variabilidad', definition: 'La capacidad de un sistema o arquitectura para soportar la producción de una familia de productos similares (línea de productos), definiendo qué partes son comunes y cuáles varían.' },
    { term: 'Trazabilidad', definition: 'La práctica de mantener vínculos documentados entre los requisitos, el diseño, el código y las pruebas para gestionar el cambio y verificar la completitud.' },
    { term: 'Stakeholder (Parte Interesada)', definition: 'Cualquier persona, grupo u organización que tiene un interés o se ve afectado por el sistema. Incluye usuarios, clientes, desarrolladores, etc.' },
    { term: 'DoD (Department of Defense)', definition: 'Departamento de Defensa de los Estados Unidos, a menudo mencionado por sus rigurosos estándares de documentación.'},
    { term: 'SEI (Software Engineering Institute)', definition: 'Instituto de Ingeniería de Software de la Universidad Carnegie Mellon, autores del reporte y creadores de métodos como el QAW.'}
];

