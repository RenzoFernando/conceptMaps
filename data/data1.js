var mindMapData = {
    title: 'Capítulo 2: Arquitectura de Software',
    definition: 'Conceptos o propiedades fundamentales de un sistema en su entorno, encarnados en sus elementos, relaciones y en los principios de su diseño y evolución (ISO/IEC/IEEE 42010:2011).',
    children: [
        {
            title: 'Fundamentos de la Arquitectura',
            connectorLabel: 'se basa en',
            definition: 'Conceptos esenciales que definen qué es, para quién es relevante y por qué es crucial.',
            children: [
                {
                    title: 'Los 3 Sentidos de "Arquitectura"',
                    connectorLabel: 'entendida como',
                    definition: 'El término se utiliza para referirse a tres aspectos interrelacionados.',
                    children: [
                        {
                            title: 'Como Disciplina', connectorLabel: 'un', definition: 'Cuerpo de conocimiento con conceptos, principios y métodos.',
                            children: [
                                { title: 'Componentes del Conocimiento', connectorLabel: 'incluye', definition: 'Estudio de estilos, patrones, tácticas y métodos de análisis de trade-offs.',
                                    children: [
                                        {
                                            title: 'Impacto Práctico', connectorLabel: 'crea un', definition: 'Cuerpo de conocimiento común que profesionaliza la práctica y guía la toma de decisiones.',
                                            children: [
                                                {
                                                    title: 'Profesionalización del Rol', connectorLabel: 'resultando en', definition: 'Establece un lenguaje común y un conjunto de expectativas para el rol del arquitecto de software.',
                                                    children: [
                                                        {
                                                            title: 'Entrevista de Arquitecto',
                                                            definition: 'En una entrevista, se espera que un candidato a arquitecto pueda discutir los trade-offs de usar un patrón como "CQRS" en lugar de un CRUD tradicional, demostrando conocimiento de la disciplina.'
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
                            title: 'Como Proceso (Architecting)', connectorLabel: 'una serie de', definition: 'Fases que materializan la disciplina en un proyecto.',
                            children: [
                                { title: 'Fases del Diseño', connectorLabel: 'dividido en', definition: 'Diseño Arquitectónico, Diseño de Alto Nivel y Diseño Detallado.',
                                    children: [
                                        {
                                            title: 'Flujo de Proceso', connectorLabel: 'que fluye de', definition: 'Lo general (conceptual) a lo específico (implementación), donde cada fase refina la anterior.',
                                            children: [
                                                {
                                                    title: 'Refinamiento de un Módulo', connectorLabel: 'como en el', definition: 'El diseño arquitectónico define un "Módulo de Autenticación". El diseño de alto nivel especifica que usará JWT. El diseño detallado define las clases y funciones exactas para generar y validar los tokens.',
                                                    children: [
                                                        {
                                                            title: 'Implementación de JWT',
                                                            definition: 'Un desarrollador implementa la clase `JwtTokenProvider` con métodos `generateToken()` y `validateToken()`, siguiendo las especificaciones del diseño detallado.'
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
                            title: 'Como Resultado (Producto)', connectorLabel: 'el', definition: 'Resultado tangible expresado en "Descripciones de Arquitectura" (ADs).',
                            children: [
                                { title: 'Propósito de la AD', connectorLabel: 'sirve para', definition: 'Comunicar el diseño, guiar la implementación y servir como base para el análisis.',
                                    children: [
                                        {
                                            title: 'Contenido Clave', connectorLabel: 'contiene', definition: 'Vistas, modelos, justificaciones (rationale) y decisiones de diseño fundamentales.',
                                            children: [
                                                {
                                                    title: 'Documento de Visión de Arquitectura', connectorLabel: 'tal como un', definition: 'Un documento que incluye diagramas UML para la vista lógica, diagramas de despliegue para la vista física y una sección de "decisiones" que justifica por qué se eligió una base de datos NoSQL sobre una SQL.',
                                                    children: [
                                                        {
                                                            title: 'Revisión de Diseño',
                                                            definition: 'El equipo revisa el documento para asegurarse de que todos entienden por qué se eligió MongoDB (para flexibilidad de esquemas) antes de empezar a escribir código.'
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
                {
                    title: 'Stakeholders y Concerns',
                    connectorLabel: 'considera a',
                    definition: 'La arquitectura debe satisfacer las necesidades (concerns) de diversas partes interesadas (stakeholders).',
                    children: [
                        {
                            title: 'Principio de Dijkstra', connectorLabel: 'aplicando', definition: 'La "Separación de Preocupaciones" para gestionar la complejidad, abordando cada concern de forma aislada.',
                            children: [
                                { title: 'Clasificación de Concerns', connectorLabel: 'pueden ser', definition: 'Funcionales, de negocio, técnicos o de atributos de calidad (rendimiento, seguridad, etc.).',
                                    children: [
                                        {
                                            title: 'Rol en el Diseño', connectorLabel: 'definen los', definition: 'Requisitos Arquitectónicamente Significativos (ASRs) que guían las decisiones críticas.',
                                            children: [
                                                {
                                                    title: 'Requisito de Escalabilidad', connectorLabel: 'por ejemplo un', definition: 'Un ASR como "El sistema debe soportar 10,000 usuarios concurrentes" obliga a elegir una arquitectura de microservicios sobre un monolito para escalar componentes de forma independiente.',
                                                    children: [
                                                        {
                                                            title: 'Escalado del Servicio de Carrito',
                                                            definition: 'Durante el Black Friday, solo se aumenta el número de instancias del microservicio de "carrito de compras", sin afectar al resto del sistema, gracias a la decisión arquitectónica inicial.'
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
                            title: 'Ejemplos de Concerns por Rol', connectorLabel: 'como', definition: 'Diferentes stakeholders tienen diferentes prioridades que la arquitectura debe balancear.',
                            children: [
                                {
                                    title: 'Cliente', connectorLabel: 'prioriza', definition: 'Costo, tiempo de entrega, metas de negocio, ROI.',
                                    children: [
                                        {
                                            title: 'Pregunta Clave', connectorLabel: 'se pregunta', definition: '¿Cómo esta arquitectura soporta las metas de negocio a largo plazo y asegura la rentabilidad?',
                                            children: [
                                                {
                                                    title: 'Decisión de usar Cloud', connectorLabel: 'mediante una', definition: 'El arquitecto propone usar AWS (pago por uso) en lugar de comprar servidores costosos, alineándose con el concern del cliente de minimizar la inversión inicial (CapEx).',
                                                    children: [
                                                        {
                                                            title: 'Factura de AWS',
                                                            definition: 'La factura mensual de AWS es baja durante el desarrollo y solo aumenta cuando el tráfico de usuarios reales crece, demostrando la rentabilidad de la decisión al cliente.'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    title: 'Usuario Final', connectorLabel: 'prioriza', definition: 'Funcionalidad, usabilidad, rendimiento, experiencia de usuario.',
                                    children: [
                                        {
                                            title: 'Aspectos de UX', connectorLabel: 'enfocado en', definition: 'Intuitividad de la interfaz, eficiencia en tareas comunes y satisfacción general al usar el sistema.',
                                            children: [
                                                {
                                                    title: 'Uso de una CDN', connectorLabel: 'a través del', definition: 'Para mejorar el rendimiento (concern del usuario), la arquitectura incluye una Red de Distribución de Contenidos (CDN) para que las imágenes y archivos se carguen rápidamente desde una ubicación cercana al usuario.',
                                                    children: [
                                                        {
                                                            title: 'Tiempos de Carga Globales',
                                                            definition: 'Un usuario en Japón experimenta tiempos de carga de imágenes casi tan rápidos como un usuario en EE.UU., porque la CDN sirve las imágenes desde un servidor en Asia.'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    title: 'Desarrollador', connectorLabel: 'prioriza', definition: 'Modularidad, mantenibilidad, reutilización, facilidad de prueba.',
                                    children: [
                                        {
                                            title: 'Factores de Mantenibilidad', connectorLabel: 'evalúa', definition: 'Alta cohesión, bajo acoplamiento, legibilidad del código y claridad de las interfaces.',
                                            children: [
                                                {
                                                    title: 'Bajo Acoplamiento en Microservicios', connectorLabel: 'logrando', definition: 'Un desarrollador prefiere una comunicación asíncrona (colas de mensajes) entre servicios en lugar de llamadas directas síncronas para que un fallo en el servicio B no detenga al servicio A.',
                                                    children: [
                                                        {
                                                            title: 'Fallo del Servicio de Notificaciones',
                                                            definition: 'El servicio de envío de correos se cae, pero los usuarios pueden seguir comprando porque los pedidos se encolan en RabbitMQ y se procesan cuando el servicio se recupera.'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    title: 'Operador de Sistemas', connectorLabel: 'prioriza', definition: 'Seguridad, robustez, monitoreo, despliegue, escalabilidad.',
                                    children: [
                                        {
                                            title: 'Necesidades de Operación', connectorLabel: 'requiere', definition: 'Dashboards de monitoreo, logs centralizados, alertas proactivas y procesos de despliegue automatizados.',
                                            children: [
                                                {
                                                    title: 'Infraestructura como Código (IaC)', connectorLabel: 'implementando', definition: 'Para facilitar el despliegue (concern del operador), se usa Terraform para definir la infraestructura en código, permitiendo recrear el entorno de producción de forma automática y consistente.',
                                                    children: [
                                                        {
                                                            title: 'Recuperación ante Desastres',
                                                            definition: 'Un centro de datos completo de AWS se cae. El operador ejecuta un script de Terraform que recrea toda la infraestructura en una región diferente en menos de una hora.'
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
                {
                    title: 'Evolución de la Definición',
                    connectorLabel: 'cuya definición',
                    definition: 'El concepto ha madurado de una visión estructural simple a una más holística y contextual.',
                    children: [
                        {
                            title: 'Definición Temprana (IEEE 1990)', connectorLabel: 'inicialmente', definition: '"La estructura organizacional de un sistema". Enfoque en componentes y sus interrelaciones.',
                            children: [
                                { title: 'Limitaciones', connectorLabel: 'con', definition: 'Enfoque excesivo en la estructura del código, ignorando otras estructuras críticas.',
                                    children: [
                                        {
                                            title: 'Estructuras Ignoradas', connectorLabel: 'como', definition: 'Estructuras de despliegue, de ejecución (runtime), de datos o de equipos de trabajo.',
                                            children: [
                                                {
                                                    title: 'Visión Limitada de un Monolito', connectorLabel: 'por ejemplo, la', definition: 'Un diagrama de clases de un sistema monolítico (estructura de código) no dice nada sobre si se despliega en un solo servidor o en varios, o cómo se organizan los equipos para mantenerlo.',
                                                    children: [
                                                        {
                                                            title: 'Falta de Contexto Operacional',
                                                            definition: 'Un nuevo operador no puede saber, solo viendo el código, que la base de datos requiere un backup cada hora para cumplir con los SLAs de recuperación.'
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
                            title: 'Definición de Estructuras (Bass et al.)', connectorLabel: 'luego como', definition: '"El conjunto de estructuras necesarias para razonar sobre el sistema".',
                            children: [
                                { title: 'Avance Clave', connectorLabel: 'representa el', definition: 'Reconocimiento de que un sistema tiene múltiples estructuras para múltiples propósitos.',
                                    children: [
                                        {
                                            title: 'Ejemplos de Estructuras', connectorLabel: 'tales como', definition: 'Estructura de módulos (código), de C&C (runtime) y de asignación (entorno).',
                                            children: [
                                                {
                                                    title: 'Análisis de un Sistema Web', connectorLabel: 'al realizar un', definition: 'Se analiza la estructura de módulos (código en repositorios), la estructura C&C (cómo interactúan el navegador y el servidor en ejecución) y la estructura de asignación (qué software corre en qué servidor).',
                                                    children: [
                                                        {
                                                            title: 'Razonamiento Multidimensional',
                                                            definition: 'Para analizar el rendimiento, se mira la estructura C&C (llamadas de red). Para analizar la mantenibilidad, se mira la estructura de módulos (acoplamiento de código).'
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
                            title: 'Definición Actual (ISO 2011)', connectorLabel: 'hoy es',
                            definition: 'Enfatiza los conceptos "fundamentales" del sistema "en su entorno" y sus "principios de diseño y evolución".',
                            children: [
                                {
                                    title: 'Idea Clave: Fundamental', connectorLabel: 'enfocada en lo', definition: 'Las decisiones de alto impacto, costosas y difíciles de cambiar una vez implementadas.',
                                    children: [
                                        {
                                            title: 'Ejemplo de Decisión Fundamental', connectorLabel: 'como', definition: 'Elegir un estilo de microservicios vs. monolítico, o seleccionar una base de datos específica.',
                                            children: [
                                                {
                                                    title: 'Elección de Base de Datos', connectorLabel: 'como la', definition: 'Elegir PostgreSQL (SQL) vs. MongoDB (NoSQL) es fundamental. Cambiar de una a otra a mitad del proyecto puede costar meses de trabajo y reescritura de código.',
                                                    children: [
                                                        {
                                                            title: 'Impacto del Cambio',
                                                            definition: 'Un equipo que eligió MongoDB descubre que necesita transacciones complejas. Migrar a PostgreSQL requiere cambiar no solo el código de acceso a datos, sino también la lógica de negocio que dependía de la flexibilidad de esquemas.'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    title: 'Idea Clave: En su Entorno', connectorLabel: 'considerando', definition: 'El contexto más allá del software: personas, hardware, otros sistemas e interacciones.',
                                    children: [
                                        {
                                            title: 'Factores del Entorno', connectorLabel: 'incluye', definition: 'Regulaciones legales, cultura organizacional, capacidades del equipo y sistemas heredados.',
                                            children: [
                                                {
                                                    title: 'Regulación GDPR', connectorLabel: 'por ejemplo, la', definition: 'La ley GDPR (entorno legal) obliga a que la arquitectura de un sistema europeo incluya mecanismos para anonimizar o eliminar datos de usuario, una decisión que afecta el diseño de la base de datos.',
                                                    children: [
                                                        {
                                                            title: 'Implementación de "Derecho al Olvido"',
                                                            definition: 'La arquitectura debe incluir un servicio que, al recibir una solicitud, busque y elimine los datos de un usuario en la base de datos principal, en los logs y en los sistemas de analítica.'
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
                }
            ]
        },
        {
            title: 'Descripción de Arquitectura (AD)',
            connectorLabel: 'se documenta en',
            definition: 'La práctica y herramientas para documentar una arquitectura de forma que sea comprensible, analizable y útil.',
            children: [
                {
                    title: 'Vistas y Puntos de Vista',
                    connectorLabel: 'mediante',
                    definition: 'Un enfoque para gestionar la complejidad separando las preocupaciones en representaciones coherentes.',
                    children: [
                        {
                            title: 'Analogía Clave', connectorLabel: 'es como', definition: 'Un Punto de Vista es la receta (plantilla), y la Vista es el plato cocinado (la representación real).',
                            children: [
                                {
                                    title: 'Punto de Vista (Viewpoint)', connectorLabel: 'define', definition: 'La plantilla: convenciones, notaciones (ej. UML) y modelos para construir una vista.',
                                    children: [
                                        {
                                            title: 'Definición de la Vista Lógica', connectorLabel: 'por ejemplo, la', definition: 'El punto de vista lógico establece que se usarán diagramas de clases UML para mostrar la estructura estática del sistema.',
                                            children: [
                                                {
                                                    title: 'Guía para el Arquitecto',
                                                    definition: 'Un arquitecto nuevo sabe que para entender la funcionalidad, debe buscar en la documentación el "Diagrama de Clases del Dominio", porque el punto de vista así lo establece.'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    title: 'Vista (View)', connectorLabel: 'es la', definition: 'Representación de aspectos de una arquitectura para stakeholders y concerns específicos.',
                                    children: [
                                        {
                                            title: 'Creación de la Vista Lógica', connectorLabel: 'por ejemplo, la', definition: 'Siguiendo el punto de vista, se crea un diagrama de clases específico para el sistema de e-commerce, mostrando las clases Cliente, Pedido, etc.',
                                            children: [
                                                {
                                                    title: 'Comunicación con el Analista',
                                                    definition: 'El arquitecto le muestra esta vista (el diagrama de clases) al analista de negocio para validar que la estructura del software refleja correctamente las reglas del negocio.'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Modelo 4+1 (Kruchten)', connectorLabel: 'ejemplificado en',
                            definition: 'Un modelo popular que organiza las vistas para distintas preocupaciones y stakeholders.',
                            children: [
                                { title: 'Vista Lógica', connectorLabel: 'para', definition: 'Analistas/Diseñadores. Aborda requisitos funcionales y estructura del dominio.',
                                    children: [{
                                        title: 'Artefactos Típicos', connectorLabel: 'usa', definition: 'Diagramas de Clases, Diagramas de Objetos.',
                                        children: [
                                            {
                                                title: 'Diagrama de Clases de un E-commerce', connectorLabel: 'como un', definition: 'Un diagrama que muestra las clases `Cliente`, `Pedido`, `Producto` y sus relaciones (un `Cliente` puede tener muchos `Pedidos`, un `Pedido` contiene varios `Productos`).',
                                                children: [
                                                    {
                                                        title: 'Validación Funcional',
                                                        definition: 'El analista de negocio usa este diagrama para confirmar que el sistema puede manejar "pedidos con productos de diferentes vendedores", una regla de negocio clave.'
                                                    }
                                                ]
                                            }
                                        ]
                                    }]
                                },
                                { title: 'Vista de Proceso', connectorLabel: 'para', definition: 'Integradores de Sistemas. Aborda concurrencia, rendimiento y escalabilidad.',
                                    children: [{
                                        title: 'Artefactos Típicos', connectorLabel: 'usa', definition: 'Diagramas de Secuencia, Actividad, Comunicación.',
                                        children: [
                                            {
                                                title: 'Diagrama de Secuencia de Compra', connectorLabel: 'como un', definition: 'Muestra la secuencia de llamadas entre el `Navegador`, el `Servidor Web`, el `Servicio de Pagos` y la `Base de Datos` cuando un usuario realiza una compra.',
                                                children: [
                                                    {
                                                        title: 'Análisis de Rendimiento',
                                                        definition: 'El integrador usa este diagrama para identificar que la llamada al servicio de pagos es un cuello de botella y decide añadir un caché para reducir la latencia.'
                                                    }
                                                ]
                                            }
                                        ]
                                    }]
                                },
                                { title: 'Vista Física/Despliegue', connectorLabel: 'para', definition: 'Ingenieros de Sistemas/DevOps. Aborda la topología del hardware y la distribución.',
                                    children: [{
                                        title: 'Artefactos Típicos', connectorLabel: 'usa', definition: 'Diagramas de Despliegue, de Red.',
                                        children: [
                                            {
                                                title: 'Diagrama de Despliegue en AWS', connectorLabel: 'como un', definition: 'Muestra una red virtual (VPC) con subredes públicas y privadas, un balanceador de carga, servidores de aplicaciones en un Auto Scaling Group y una base de datos RDS.',
                                                children: [
                                                    {
                                                        title: 'Planificación de Capacidad',
                                                        definition: 'El ingeniero de DevOps usa este diagrama para calcular los costos de AWS y para configurar las reglas de firewall (Security Groups) entre la subred pública y la privada.'
                                                    }
                                                ]
                                            }
                                        ]
                                    }]
                                },
                                { title: 'Vista de Desarrollo', connectorLabel: 'para', definition: 'Desarrolladores/Gestores. Aborda la organización de módulos en el entorno de desarrollo.',
                                    children: [{
                                        title: 'Artefactos Típicos', connectorLabel: 'usa', definition: 'Diagramas de Paquetes, Componentes.',
                                        children: [
                                            {
                                                title: 'Estructura de Repositorio Monorepo', connectorLabel: 'como una', definition: 'Un diagrama que muestra la organización de carpetas en un monorepo, con un directorio `packages` que contiene el código de la `interfaz-de-usuario`, la `api-gateway` y los `servicios-compartidos`.',
                                                children: [
                                                    {
                                                        title: 'Asignación de Tareas',
                                                        definition: 'El gestor de proyectos asigna al "Equipo Frontend" la propiedad de la carpeta `interfaz-de-usuario` y al "Equipo Backend" la propiedad de la carpeta `api-gateway`.'
                                                    }
                                                ]
                                            }
                                        ]
                                    }]
                                },
                                { title: 'Vista de Escenarios (+1)', connectorLabel: 'para', definition: 'Testers/Usuarios. Valida y demuestra el diseño con casos de uso concretos.',
                                    children: [{
                                        title: 'Artefactos Típicos', connectorLabel: 'usa', definition: 'Diagramas de Casos de Uso, Historias de Usuario.',
                                        children: [
                                            {
                                                title: 'Caso de Uso "Recuperar Contraseña"', connectorLabel: 'como el', definition: 'Describe los pasos que sigue un actor (Usuario) para interactuar con el sistema y completar el proceso de recuperación de su contraseña, validando que la arquitectura soporta este flujo.',
                                                children: [
                                                    {
                                                        title: 'Diseño de Pruebas',
                                                        definition: 'El equipo de QA usa este caso de uso para escribir un plan de pruebas automatizadas que simula cada paso, asegurando que la funcionalidad es robusta antes de salir a producción.'
                                                    }
                                                ]
                                            }
                                        ]
                                    }]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            title: 'Proceso de Arquitectura',
            connectorLabel: 'sigue un',
            definition: 'Cómo se crea, define y refina la arquitectura dentro del contexto del ciclo de vida del desarrollo.',
            children: [
                {
                    title: 'Arquitectura en Contexto',
                    connectorLabel: 'adaptándose al',
                    definition: 'La práctica de la arquitectura varía significativamente según el ciclo de vida y la escala del proyecto.',
                    children: [
                        {
                            title: 'Ciclo de Vida Tradicional (Cascada)', connectorLabel: 'con una', definition: 'Fase explícita y formal de "diseño arquitectónico" impulsada por los requisitos definidos "up-front".',
                            children: [
                                {
                                    title: 'Característica Principal', connectorLabel: 'es', definition: 'Secuencial y con poca flexibilidad a cambios una vez que la fase de diseño ha concluido.',
                                    children: [
                                        {
                                            title: 'Contrato de Requisitos Fijos', connectorLabel: 'basado en un', definition: 'El cliente firma un documento de 200 páginas con todos los requisitos. El arquitecto diseña un sistema para cumplir exactamente con eso, y cualquier cambio requiere una renegociación formal del contrato.',
                                            children: [
                                                {
                                                    title: 'Construcción de un Avión',
                                                    definition: 'El diseño del sistema de aviónica de un avión se define por completo antes de construirlo; no se "itera" sobre el diseño del ala una vez que el avión está en el aire.'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Líneas de Producto (Product Lines)', connectorLabel: 'con una', definition: 'Arquitectura de referencia (RA) que sirve como base para una familia de productos.',
                            children: [
                                {
                                    title: 'Objetivo Principal', connectorLabel: 'es', definition: 'Maximizar la reutilización de componentes y estructuras para reducir costos y tiempo de desarrollo.',
                                    children: [
                                        {
                                            title: 'Plataforma de Automóviles', connectorLabel: 'como una', definition: 'Un fabricante de automóviles diseña una plataforma base (chasis, motor) y la reutiliza para construir un sedán, un SUV y un hatchback, cambiando solo los componentes específicos de cada modelo.',
                                            children: [
                                                {
                                                    title: 'Software de Automoción',
                                                    definition: 'Se crea un software base para el sistema de infoentretenimiento. La versión "básica" solo tiene radio. La versión "premium" reutiliza la base y añade los módulos de GPS y conectividad Bluetooth.'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Enfoques Ágiles', connectorLabel: 'donde', definition: 'La arquitectura "emerge" de la codificación, con un diseño intencional mínimo y refactorización continua.',
                            children: [
                                { title: 'Riesgo Principal', connectorLabel: 'es', definition: 'Ignorar atributos de calidad no funcionales (seguridad, rendimiento) que no son visibles para el usuario.',
                                    children: [
                                        {
                                            title: 'Técnicas de Mitigación', connectorLabel: 'se usan', definition: '"Spikes" arquitectónicos para investigar riesgos, y un diseño incremental guiado por principios.',
                                            children: [
                                                {
                                                    title: 'Spike de Seguridad', connectorLabel: 'por ejemplo un', definition: 'Antes de construir la función de login, el equipo dedica un día (spike) a investigar la mejor forma de almacenar contraseñas de forma segura (hashing con salt), mitigando el riesgo de una brecha de seguridad.',
                                                    children: [
                                                        {
                                                            title: 'Decisión Informada',
                                                            definition: 'Después del spike, el equipo decide usar la librería `bcrypt` y añade una tarea al backlog para implementarla, en lugar de descubrir el problema de seguridad más tarde.'
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
                }
            ]
        }
    ]
};

var glossaryData = [
    { term: 'ASR (Requisito Arquitectónicamente Significativo)', definition: 'Cualquier requisito (funcional, de calidad, o restricción) que tenga una influencia profunda en la estructura y decisiones de la arquitectura.'},
    { term: 'Stakeholder (Parte Interesada)', definition: 'Cualquier persona, grupo u organización con un interés o rol en el sistema, cuyas necesidades (concerns) deben ser consideradas.' },
    { term: 'Concern (Preocupación/Interés)', definition: 'Un interés específico que un stakeholder tiene en el sistema, como el rendimiento, el costo, la seguridad o la usabilidad.' },
    { term: 'Viewpoint (Punto de Vista)', definition: 'Una plantilla o especificación que define cómo construir y usar una vista, estableciendo las convenciones, notaciones y modelos a utilizar.' },
    { term: 'View (Vista)', definition: 'Una representación de uno o más aspectos de una arquitectura, creada desde un punto de vista específico para abordar los concerns de ciertos stakeholders.' },
    { term: 'Rationale (Justificación)', definition: 'La documentación explícita del "porqué" de una decisión de diseño, incluyendo alternativas consideradas, criterios de selección y trade-offs.' },
    { term: 'Trade-off (Compromiso/Balance)', definition: 'Una situación en la que se debe elegir entre opciones en conflicto, a menudo sacrificando una cualidad (ej. rendimiento) para mejorar otra (ej. seguridad).' },
    { term: 'ADL (Lenguaje de Descripción de Arquitectura)', definition: 'Un lenguaje con una sintaxis y semántica definidas para describir una arquitectura de software de forma no ambigua, permitiendo análisis formal.' },
    { term: 'Architectural Framework (Marco de Arquitectura)', definition: 'Un conjunto de prácticas, herramientas y convenciones para guiar la descripción de arquitecturas en un dominio específico (ej. AUTOSAR para automotriz).' },
    { term: 'Architectural Style (Estilo Arquitectónico)', definition: 'Un conjunto coordinado de restricciones arquitectónicas que define una familia de sistemas. Ej: Cliente-Servidor, REST, Microservicios.' },
    { term: 'Architectural Tactic (Táctica Arquitectónica)', definition: 'Una decisión de diseño individual que contribuye al logro de un atributo de calidad. Ej: Usar redundancia para mejorar la disponibilidad.' },
    { term: 'Deuda Técnica', definition: 'El costo implícito de retrabajo causado por elegir una solución fácil ahora en lugar de usar un mejor enfoque que tomaría más tiempo.'}
];
