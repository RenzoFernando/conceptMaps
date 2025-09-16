var mindMapData = {
  title: 'Ingeniería de Requisitos (Basado en Dorfman)',
  definition: 'Un análisis jerárquico de los principios, procesos y prácticas de la Ingeniería de Requisitos, adaptado del trabajo de Merlin Dorfman. Explora desde los fundamentos y el ciclo de vida hasta los métodos y herramientas aplicadas.',
  children: [
    {
      title: 'Contexto e Importancia',
      connectorLabel: 'se fundamenta en',
      definition: 'La comprensión de por qué la ingeniería de requisitos es crucial, abordando el origen de muchos fracasos de proyectos y los beneficios de una práctica rigurosa.',
      children: [
        {
          title: 'La Crisis del Software',
          connectorLabel: 'surge de',
          definition: 'Un término acuñado en los años 60 para describir los problemas crónicos en el desarrollo de software: proyectos tardíos, por encima del presupuesto y que no cumplían las expectativas.',
          children: [
            {
              title: 'Origen del Problema',
              connectorLabel: 'identifica como',
              definition: 'Las investigaciones determinaron que las deficiencias en los requisitos son uno de los contribuyentes más significativos al fracaso de los proyectos.',
              children: [
                {
                  title: 'Deficiencias en Requisitos',
                  connectorLabel: 'manifiestas como',
                  definition: 'La causa raíz de fallos en el cumplimiento de metas de rendimiento y costo en casi todos los proyectos de software problemáticos.',
                  children: [
                    {
                      title: 'Impacto Directo en Proyectos',
                      connectorLabel: 'resultando en',
                      definition: 'Inadecuaciones que juegan un rol principal y costoso en el fracaso de los proyectos, a menudo subestimadas por parecer triviales al inicio.',
                      children: [
                        {
                          title: 'Ejemplo de Impacto',
                          definition: 'Un proyecto para un sistema de logística falla porque el requisito "gestionar inventario" era ambiguo. Un equipo lo interpretó como un simple conteo, pero el cliente esperaba gestión de lotes y fechas de caducidad, lo que obligó a un rediseño completo y costoso.'
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
          title: 'Beneficios de Buenos Requisitos',
          connectorLabel: 'conduce a',
          definition: 'Resultados tangibles que justifican la inversión en un proceso de ingeniería de requisitos bien ejecutado, mejorando el producto final y la eficiencia del desarrollo.',
          children: [
            {
              title: 'Acuerdos Claros entre Stakeholders',
              connectorLabel: 'estableciendo',
              definition: 'Un entendimiento común entre desarrolladores, clientes y usuarios sobre el trabajo a realizar y los criterios de aceptación del sistema entregado.',
              children: [
                {
                  title: 'Criterios de Aceptación Definidos',
                  connectorLabel: 'a través de',
                  definition: 'Especificaciones claras y medibles que permiten verificar objetivamente si el sistema cumple con lo acordado.',
                  children: [
                    {
                      title: 'Ejemplo de Criterio de Aceptación',
                      definition: 'En lugar de "el sistema debe ser rápido", un buen requisito especifica: "El tiempo de respuesta para la búsqueda de productos debe ser inferior a 2 segundos con 1000 usuarios concurrentes".'
                    }
                  ]
                }
              ]
            },
            {
              title: 'Base Sólida para la Estimación',
              connectorLabel: 'proporcionando una',
              definition: 'Información precisa que permite una estimación fiable de los recursos necesarios, incluyendo costo, personal, equipamiento y tiempo.',
              children: [
                {
                  title: 'Planificación Precisa de Recursos',
                  connectorLabel: 'permitiendo la',
                  definition: 'Capacidad de asignar el personal con las habilidades correctas y el equipo necesario de manera oportuna, basándose en requisitos bien definidos.',
                  children: [
                    {
                      title: 'Ejemplo de Planificación',
                      definition: 'Un requisito detallado para un módulo de encriptación permite al gerente de proyecto estimar que necesitará un especialista en seguridad por 6 semanas, en lugar de descubrirlo a mitad del desarrollo.'
                    }
                  ]
                }
              ]
            },
            {
              title: 'Mejora de Atributos de Calidad',
              connectorLabel: 'fomentando la',
              definition: 'Incorporación de características no funcionales como usabilidad, mantenibilidad y rendimiento desde las primeras fases del ciclo de vida.',
              children: [
                {
                  title: 'Diseño Orientado al Usuario',
                  connectorLabel: 'facilitando un',
                  definition: 'El desarrollo de sistemas que no solo funcionan correctamente, sino que son intuitivos, eficientes y satisfactorios para el usuario final.',
                  children: [
                    {
                      title: 'Ejemplo de Usabilidad',
                      definition: 'El requisito "los usuarios deben poder completar una compra en 3 clics" guía el diseño de la interfaz de usuario para ser simple y directa, mejorando la experiencia de compra.'
                    }
                  ]
                }
              ]
            },
            {
              title: 'Minimización de Recursos y Retrabajo',
              connectorLabel: 'logrando la',
              definition: 'La consecución de los objetivos del proyecto con el mínimo de recursos, reduciendo el retrabajo, las omisiones y los malentendidos.',
              children: [
                {
                  title: 'Eficiencia en el Desarrollo',
                  connectorLabel: 'maximizando la',
                  definition: 'Evitar el desperdicio de tiempo y dinero corrigiendo errores que podrían haberse evitado con una mejor comprensión inicial de las necesidades.',
                  children: [
                    {
                      title: 'Ejemplo de Eficiencia',
                      definition: 'Al definir desde el inicio que el sistema debe soportar múltiples idiomas, el equipo diseña la base de datos y la interfaz correctamente, evitando una costosa reestructuración posterior.'
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
      title: 'Fundamentos de la Ingeniería de Requisitos',
      connectorLabel: 'se basa en',
      definition: 'El conjunto de actividades y principios clave que estructuran el proceso de definición de requisitos, desde la captura inicial de necesidades hasta su validación y gestión.',
      children: [
        {
          title: 'Elicitación',
          connectorLabel: 'comienza con la',
          definition: 'El proceso de descubrir, obtener y definir las necesidades de los usuarios y otros stakeholders. Es una actividad colaborativa y de investigación.',
          children: [
            {
              title: 'Propósito y Métodos',
              connectorLabel: 'cuyo',
              definition: 'Trabajar activamente con los usuarios para comprender no solo lo que piden, sino lo que realmente necesitan, en el contexto de su entorno y operación.',
              children: [
                {
                  title: 'Uso del Concept of Operations (ConOps)',
                  connectorLabel: 'apoyándose en',
                  definition: 'Un documento narrativo que describe el sistema en su entorno operativo, ayudando a los stakeholders a visualizar su uso y a validar los requisitos.',
                  children: [
                    {
                      title: 'Ejemplo de ConOps',
                      definition: 'Para un nuevo sistema de emergencias 911, se redacta un ConOps que narra cómo un operador recibe una llamada, despacha una ambulancia y coordina con la policía, todo a través de la nueva interfaz.'
                    }
                  ]
                },
                {
                  title: 'Técnicas de Elicitación',
                  connectorLabel: 'aplicando',
                  definition: 'Métodos como entrevistas, talleres, observación de usuarios (etnografía), y análisis de documentos existentes para recopilar información completa.',
                  children: [
                    {
                      title: 'Ejemplo de Entrevista',
                      definition: 'Un analista entrevista a los agentes de un centro de llamadas para entender sus frustraciones con el software actual y descubrir necesidades ocultas para mejorar su eficiencia.'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: 'Descomposición y Abstracción',
          connectorLabel: 'continúa con',
          definition: 'Estrategias fundamentales para gestionar la complejidad de sistemas grandes, dividiendo el problema en partes manejables y viendo los detalles de forma progresiva.',
          children: [
            {
              title: 'Particionamiento Jerárquico',
              connectorLabel: 'mediante el',
              definition: 'Definir una jerarquía de elementos del sistema (ej. Sistema -> Subsistema -> Componente -> Módulo), donde cada nivel es una descomposición del nivel superior.',
              children: [
                {
                  title: 'De lo General a lo Específico',
                  connectorLabel: 'pasando de',
                  definition: 'Los requisitos en el nivel superior son abstractos y generales, mientras que en los niveles inferiores se vuelven progresivamente más detallados y específicos.',
                  children: [
                    {
                      title: 'Ejemplo de Descomposición',
                      definition: 'Un requisito de sistema "El sistema debe gestionar las transacciones de venta" se descompone en requisitos de subsistema como "Calcular total de la compra", "Procesar pago" y "Actualizar inventario".'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: 'Asignación (Allocation)',
          connectorLabel: 'sigue con la',
          definition: 'El proceso de determinar qué elemento o elementos de un nivel jerárquico inferior serán responsables de satisfacer un requisito del nivel superior.',
          children: [
            {
              title: 'Proceso Iterativo de Asignación',
              connectorLabel: 'en un',
              definition: 'Cada requisito de sistema se asigna a uno o más subsistemas. Este proceso puede revelar la necesidad de redefinir la jerarquía o corregir los requisitos.',
              children: [
                {
                  title: 'Validación de la Jerarquía',
                  connectorLabel: 'que implica la',
                  definition: 'A medida que se asignan requisitos, se valida si la estructura de subsistemas definida es lógica y capaz de cumplir con todas las funcionalidades del sistema.',
                  children: [
                    {
                      title: 'Ejemplo de Asignación',
                      definition: 'El requisito "El usuario debe poder iniciar sesión" se asigna al "Subsistema de Interfaz de Usuario" (para la pantalla de login) y al "Subsistema de Seguridad" (para validar las credenciales).'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: 'Flujo Descendente (Flowdown)',
          connectorLabel: 'luego el',
          definition: 'Una vez que un requisito de alto nivel es asignado a un elemento de bajo nivel, se escriben uno o más requisitos específicos para ese elemento.',
          children: [
            {
              title: 'Creación de Requisitos Derivados',
              connectorLabel: 'resultando en la',
              definition: 'Los requisitos de bajo nivel son una consecuencia directa de la asignación. Pueden ser una versión más detallada del requisito padre o una capacidad nueva necesaria para soportarlo.',
              children: [
                {
                  title: 'Aumento del Nivel de Detalle',
                  connectorLabel: 'con un',
                  definition: 'A medida que se desciende en la jerarquía, los requisitos se vuelven menos abstractos y más cercanos a la implementación técnica.',
                  children: [
                    {
                      title: 'Ejemplo de Flowdown',
                      definition: 'Tras asignar "Iniciar sesión" al "Subsistema de Seguridad", se derivan los requisitos: "Validar formato del email", "Encriptar contraseña con SHA-256" y "Bloquear cuenta tras 3 intentos fallidos".'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: 'Trazabilidad',
          connectorLabel: 'gestionando con',
          definition: 'La práctica de mantener y documentar los vínculos entre requisitos a lo largo de la jerarquía, asegurando que nada se pierda o se añada indebidamente.',
          children: [
            {
              title: 'Trazabilidad Ascendente y Descendente',
              connectorLabel: 'permitiendo',
              definition: 'La capacidad de seguir un requisito desde su origen (ascendente) hasta su implementación (descendente) y viceversa, facilitando el análisis de impacto y la verificación.',
              children: [
                {
                  title: 'Gestión del Cambio',
                  connectorLabel: 'facilitando la',
                  definition: 'Si un requisito de alto nivel cambia, la trazabilidad permite identificar rápidamente todos los requisitos, diseños y pruebas de bajo nivel que se ven afectados.',
                  children: [
                    {
                      title: 'Ejemplo de Trazabilidad',
                      definition: 'El cliente pide cambiar el método de encriptación. Usando la matriz de trazabilidad, el equipo localiza el requisito "Encriptar contraseña con SHA-256" y todos los componentes de código y casos de prueba asociados para actualizarlos.'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: 'Definición de Interfaces',
          connectorLabel: 'definiendo las',
          definition: 'Especificar las conexiones entre los elementos del sistema, y entre el sistema y el mundo exterior. Se refinan a medida que se desciende en la jerarquía.',
          children: [
            {
              title: 'Interfaces Externas e Internas',
              connectorLabel: 'distinguiendo entre',
              definition: 'Las externas conectan el sistema con usuarios o sistemas externos. Las internas conectan los componentes dentro del sistema para que puedan colaborar.',
              children: [
                {
                  title: 'Descubrimiento de Interfaces',
                  connectorLabel: 'mediante el',
                  definition: 'A medida que se asignan requisitos, se hace evidente la necesidad de comunicación entre subsistemas, lo que lleva a la definición de nuevas interfaces internas.',
                  children: [
                    {
                      title: 'Ejemplo de Interfaz',
                      definition: 'Para que el "Subsistema de Notificaciones" pueda enviar un email de confirmación de compra, se define una interfaz interna que le permite solicitar los detalles del pedido al "Subsistema de Órdenes".'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: 'Validación y Verificación (V&V)',
          connectorLabel: 'y finalizando con',
          definition: 'El proceso de revisión para asegurar la calidad de los requisitos. Validación: "¿Estamos construyendo el producto correcto?". Verificación: "¿Estamos construyendo el producto correctamente?".',
          children: [
            {
              title: 'Atributos de un Buen Requisito',
              connectorLabel: 'evaluando los',
              definition: 'Un conjunto de cualidades que un requisito debe poseer, como ser claro, inequívoco, completo, consistente, factible y verificable.',
              children: [
                {
                  title: 'Costo de la Corrección de Errores',
                  connectorLabel: 'considerando el',
                  definition: 'El costo de corregir un error en los requisitos aumenta exponencialmente a medida que avanza el ciclo de vida. Es más barato corregirlo en la fase de requisitos que en producción.',
                  children: [
                    {
                      title: 'Ejemplo de Validación',
                      definition: 'El equipo revisa el requisito "El sistema debe ser fácil de usar". Se considera no verificable y se reemplaza por "Un nuevo usuario debe poder completar la tarea X en menos de 5 minutos sin entrenamiento".'
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
      title: 'Repaso del Ciclo de Vida y Conceptos Clave',
      connectorLabel: 'repasando el',
      definition: 'Una visión refinada del ciclo de vida del sistema que integra la descomposición jerárquica y la entrega por fases, junto con la interacción entre requisitos y diseño.',
      children: [
        {
          title: 'Ciclo de Vida Refinado (Modelo en Fases)',
          connectorLabel: 'basado en un',
          definition: 'Un modelo de ciclo de vida más realista que el secuencial, que reconoce la multiplicidad de niveles jerárquicos y la posibilidad de desarrollo no sincronizado entre componentes (Fig. 12).',
          children: [
            {
              title: 'Decomposición Jerárquica',
              connectorLabel: 'implica una',
              definition: 'La fase de implementación de un nivel superior se convierte en el ciclo de vida completo (concepto, requisitos, diseño, etc.) para los elementos del nivel inferior.',
              children: [
                {
                  title: 'Flujo de Concepto a Mantenimiento',
                  connectorLabel: 'con un',
                  definition: 'Cada subsistema, componente o módulo atraviesa su propio ciclo de vida, desde la concepción hasta el mantenimiento, dentro del ciclo de vida más grande del sistema.',
                  children: [
                    {
                      title: 'Ejemplo de Flujo Jerárquico',
                      definition: 'La fase de "Implementación" del Sistema general desencadena el inicio de la fase de "Concepto" para cada uno de sus Subsistemas. A su vez, la "Implementación" de un Subsistema inicia el "Concepto" de sus Componentes.'
                    }
                  ]
                }
              ]
            },
            {
              title: 'Entrega por Fases (Phased Delivery)',
              connectorLabel: 'y permite la',
              definition: 'La capacidad de iniciar y finalizar los ciclos de desarrollo de diferentes elementos en distintos momentos, optimizando recursos e integración.',
              children: [
                {
                  title: 'Uso Eficiente del Personal',
                  connectorLabel: 'resultando en un',
                  definition: 'Las planificaciones de cada elemento se pueden escalonar para evitar una demanda excesiva de especialistas técnicos en un mismo momento.',
                  children: [
                    {
                      title: 'Ejemplo de Planificación de Personal',
                      definition: 'El desarrollo del "Subsistema de Base de Datos" se planifica para terminar antes de que comience el del "Subsistema de Reportes", permitiendo que los mismos expertos en BD asesoren a ambos equipos secuencialmente.'
                    }
                  ]
                },
                {
                  title: 'Integración Lógica y Progresiva',
                  connectorLabel: 'y una',
                  definition: 'Los componentes se integran de manera incremental, uno a la vez, en lugar de un enfoque "Big Bang" donde todo se une al final.',
                  children: [
                    {
                      title: 'Ejemplo de Integración Progresiva',
                      definition: 'Primero se integra el "Módulo de Autenticación" con la base de usuarios. Una vez validado, se añade el "Módulo de Perfil de Usuario", asegurando un crecimiento estable y controlable del sistema.'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: 'Requisitos vs. Diseño Arquitectónico',
          connectorLabel: 'relacionando con',
          definition: 'La interacción y alternancia entre la definición de "qué" debe hacer el sistema (requisitos) y "cómo" lo hará (diseño).',
          children: [
            {
              title: 'La Dualidad Qué/Cómo',
              connectorLabel: 'entendiendo',
              definition: 'La ingeniería de requisitos y el diseño no son fases estrictamente separadas, sino actividades que se alternan y se retroalimentan a medida que se refina el sistema.',
              children: [
                {
                  title: 'Proceso Alternante de Refinamiento',
                  connectorLabel: 'en un',
                  definition: 'Los requisitos de sistema ("qué") guían el diseño arquitectónico inicial ("cómo"). Este diseño de componentes genera nuevos requisitos ("qué") para cada componente.',
                  children: [
                    {
                      title: 'El Diseño de uno es el Requisito de otro',
                      connectorLabel: 'donde',
                      definition: 'La salida de una fase de diseño (ej. una especificación de API) se convierte en la entrada de requisitos para la siguiente fase de desarrollo.',
                      children: [
                        {
                          title: 'Ejemplo de Ciclo Qué/Cómo',
                          definition: 'El arquitecto diseña una arquitectura de microservicios (el "cómo"). La especificación de la API para el microservicio de "Usuarios" se convierte en el "qué" (el requisito) para el equipo que lo implementará.'
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
      title: 'Prácticas de Ingeniería de Requisitos',
      connectorLabel: 'aplicando',
      definition: 'Los métodos y herramientas específicas que se utilizan para llevar a cabo las actividades de análisis y gestión de requisitos.',
      children: [
        {
          title: 'Métodos de Análisis',
          connectorLabel: 'utilizando',
          definition: 'Enfoques estructurados para analizar y modelar los requisitos desde diferentes perspectivas.',
          children: [
            {
              title: 'Orientados a Procesos',
              connectorLabel: 'como los',
              definition: 'Se centran en cómo los datos son transformados por el sistema a medida que fluyen a través de él. El foco está en las funciones y transformaciones.',
              children: [
                {
                  title: 'Análisis Estructurado (SA)',
                  connectorLabel: 'por ejemplo, el',
                  definition: 'Utiliza herramientas como los Diagramas de Flujo de Datos (DFD) para visualizar procesos, flujos de datos y almacenes de datos.',
                  children: [
                    {
                      title: 'Ejemplo de SA',
                      definition: 'Un DFD muestra cómo una "Solicitud de Préstamo" (entrada) es procesada por "Verificar Crédito" y "Evaluar Riesgo" para producir una "Decisión de Aprobación" (salida).'
                    }
                  ]
                },
                {
                  title: 'Técnica de Diseño y Análisis Estructurado (SADT)',
                  connectorLabel: 'o la',
                  definition: 'Un método más formal que utiliza diagramas de actividades y datos para modelar sistemas complejos, con un fuerte énfasis en la jerarquía y la descomposición.',
                  children: [
                    {
                      title: 'Ejemplo de SADT',
                      definition: 'Un modelo SADT podría representar la actividad "Gestionar Pedido" con entradas (Datos del Cliente), salidas (Factura), controles (Política de Descuentos) y mecanismos (Sistema de Inventario).'
                    }
                  ]
                }
              ]
            },
            {
              title: 'Orientados a Datos',
              connectorLabel: 'como los',
              definition: 'Ponen énfasis en la estructura de los datos del sistema y las relaciones entre ellos. La función se ve como secundaria a la estructura de datos.',
              children: [
                {
                  title: 'Modelado Entidad-Relación (ER)',
                  connectorLabel: 'por ejemplo, el',
                  definition: 'Define las entidades clave del sistema (ej. Cliente, Producto, Pedido) y las relaciones entre ellas (ej. un Cliente realiza muchos Pedidos).',
                  children: [
                    {
                      title: 'Ejemplo de ER',
                      definition: 'Un diagrama ER para una biblioteca modela las entidades "Libro", "Autor" y "Miembro", con relaciones como "un Autor escribe muchos Libros" y "un Miembro toma prestados muchos Libros".'
                    }
                  ]
                }
              ]
            },
            {
              title: 'Orientados a Control',
              connectorLabel: 'como los',
              definition: 'Se enfocan en el comportamiento del sistema en respuesta a eventos, especialmente en sistemas de tiempo real. El foco está en los estados y transiciones.',
              children: [
                {
                  title: 'Diagramas de Transición de Estados',
                  connectorLabel: 'por ejemplo, los',
                  definition: 'Modelan los diferentes estados en los que puede estar un objeto o sistema y los eventos que causan transiciones entre esos estados.',
                  children: [
                    {
                      title: 'Ejemplo de Control',
                      definition: 'Un diagrama de estados para un semáforo muestra los estados (Rojo, Amarillo, Verde) y los eventos (temporizador expira) que causan el cambio de un estado a otro.'
                    }
                  ]
                }
              ]
            },
            {
              title: 'Orientados a Objetos',
              connectorLabel: 'como los',
              definition: 'Modelan el sistema como una colección de objetos que colaboran entre sí. Cada objeto encapsula tanto datos (atributos) como comportamiento (métodos).',
              children: [
                {
                  title: 'Análisis Orientado a Objetos (OOA)',
                  connectorLabel: 'por ejemplo, el',
                  definition: 'Identifica las clases de objetos relevantes, sus atributos, sus métodos y cómo interactúan para cumplir con los requisitos del sistema.',
                  children: [
                    {
                      title: 'Ejemplo de OOA',
                      definition: 'En un sistema de cajero automático, se identifican las clases `Cliente`, `Cuenta` y `Transacción`. La clase `Cuenta` tiene un atributo `saldo` y un método `retirar()`. '
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: 'Herramientas (Tools)',
          connectorLabel: 'apoyándose en',
          definition: 'Software que ayuda a los ingenieros a realizar las tareas de requisitos, desde la edición gráfica hasta la gestión de la trazabilidad y la simulación del comportamiento.',
          children: [
            {
              title: 'Clasificación y Capacidades',
              connectorLabel: 'con una',
              definition: 'Las herramientas se pueden clasificar por su función principal, como edición gráfica, trazabilidad, modelado de comportamiento o bases de datos y procesadores de texto.',
              children: [
                {
                  title: 'Edición Gráfica',
                  connectorLabel: 'para',
                  definition: 'Soporte para crear y mantener diagramas según un método de análisis específico (ej. DFD, ER, diagramas de clases).',
                  children: [
                    {
                      title: 'Ejemplo de Edición Gráfica',
                      definition: 'Usar una herramienta como Lucidchart o Draw.io para dibujar un Diagrama de Flujo de Datos que modele el proceso de registro de un nuevo usuario en una aplicación.'
                    }
                  ]
                },
                {
                  title: 'Modelado de Comportamiento',
                  connectorLabel: 'para',
                  definition: 'Herramientas que permiten simular o ejecutar los modelos de requisitos para validar el comportamiento del sistema antes de su construcción.',
                  children: [
                    {
                      title: 'Ejemplo de Modelado de Comportamiento',
                      definition: 'Una herramienta que toma un diagrama de estados de una máquina expendedora y permite simular la inserción de monedas y la selección de productos para verificar que el comportamiento es correcto.'
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
      title: 'Preguntas Clave del Análisis',
      connectorLabel: 'respondiendo',
      definition: 'Respuestas a preguntas específicas sobre el ciclo de vida y las estrategias de cobertura en el análisis de requisitos.',
      children: [
        {
          title: '1. Fases del Ciclo de Vida del Análisis de Requerimientos',
          connectorLabel: 'explica las',
          definition: 'El análisis de requisitos es un proceso iterativo que se repite en cada nivel de la jerarquía del sistema, consistiendo en un ciclo de definición, asignación, derivación y validación.',
          children: [
            {
              title: 'Elicitación y Definición (Nivel Sistema)',
              connectorLabel: 'inicia con',
              definition: 'Se generan los requisitos de más alto nivel para el sistema completo, a menudo utilizando un documento de Concepto de Operaciones (ConOps) para entender el contexto.',
              children: [
                {
                  title: 'Creación de la Línea Base',
                  connectorLabel: 'estableciendo la',
                  definition: 'Se definen las funciones, rendimiento, interfaces externas y atributos de calidad que el sistema debe cumplir visto como una caja negra.',
                  children: [
                    {
                      title: 'Ejemplo de Definición',
                      definition: 'Para un sistema de comercio electrónico, se define el requisito de alto nivel: "El sistema deberá procesar 100 transacciones por segundo durante las horas pico".'
                    }
                  ]
                }
              ]
            },
            {
              title: 'Particionamiento y Asignación (Allocation)',
              connectorLabel: 'sigue con',
              definition: 'Se define la primera capa de la jerarquía (ej. subsistemas) y se asigna cada requisito del sistema a los subsistemas responsables de cumplirlo.',
              children: [
                {
                  title: 'Diseño Arquitectónico Preliminar',
                  connectorLabel: 'como un',
                  definition: 'Esta fase es en realidad un acto de diseño ("cómo"), ya que define una estructura que permitirá cumplir los requisitos ("qué").',
                  children: [
                    {
                      title: 'Ejemplo de Asignación',
                      definition: 'El requisito de "procesar transacciones" se asigna al "Subsistema de Pagos" y al "Subsistema de Inventario".'
                    }
                  ]
                }
              ]
            },
            {
              title: 'Flujo Descendente y Derivación (Flowdown)',
              connectorLabel: 'luego el',
              definition: 'Para cada subsistema, se escriben nuevos requisitos más detallados que son una consecuencia directa de los requisitos de sistema que le fueron asignados.',
              children: [
                {
                  title: 'Aumento del Detalle Técnico',
                  connectorLabel: 'con un',
                  definition: 'Los requisitos se vuelven más específicos, reflejando las responsabilidades concretas del subsistema.',
                  children: [
                    {
                      title: 'Ejemplo de Flowdown',
                      definition: 'Para el "Subsistema de Pagos", se derivan los requisitos: "Validar tarjeta de crédito con pasarela externa" y "Registrar transacción en la base de datos financiera".'
                    }
                  ]
                }
              ]
            },
            {
              title: 'Validación y Verificación Iterativa',
              connectorLabel: 'y finaliza con',
              definition: 'En cada paso (asignación, flowdown), se valida si el proceso es correcto. Los errores encontrados pueden requerir volver a fases anteriores (iteración).',
              children: [
                {
                  title: 'Aseguramiento de la Calidad',
                  connectorLabel: 'para el',
                  definition: 'Se revisa la completitud, consistencia y factibilidad de los requisitos en cada nivel antes de proceder al siguiente.',
                  children: [
                    {
                      title: 'Ejemplo de Iteración',
                      definition: 'Al intentar hacer el flowdown para el "Subsistema de Inventario", el equipo se da cuenta de que es imposible actualizar el stock en tiempo real (factibilidad). Se debe volver a la fase de requisitos de sistema para renegociar con el cliente y cambiarlo a "actualización cada 5 minutos".'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: '2. Cubrimiento en Anchura y en Profundidad',
          connectorLabel: 'explica el',
          definition: 'Dos estrategias complementarias para asegurar la completitud y corrección del conjunto de requisitos en una jerarquía.',
          children: [
            {
              title: 'Cubrimiento en Anchura (Breadth Coverage)',
              connectorLabel: 'es el',
              definition: 'Se refiere a completar el análisis y definición de todos los elementos en un mismo nivel jerárquico antes de pasar al siguiente nivel de detalle.',
              children: [
                {
                  title: 'Visión Horizontal Completa',
                  connectorLabel: 'proporciona una',
                  definition: 'Asegura que todos los subsistemas o componentes de un nivel han sido identificados y sus requisitos de alto nivel definidos, lo que permite entender sus interacciones (interfaces).',
                  children: [
                    {
                      title: 'Ejemplo de Cubrimiento en Anchura',
                      definition: 'En un sistema bancario, se definen a nivel de subsistema: "Gestión de Cuentas", "Transferencias", "Préstamos" y "Seguridad". Se especifican los requisitos de alto nivel para TODOS ellos antes de empezar a diseñar los componentes internos de CUALQUIERA de ellos.'
                    }
                  ]
                },
                {
                  title: 'Identificación Temprana de Interfaces',
                  connectorLabel: 'y facilita la',
                  definition: 'Al tener una visión completa del nivel, se pueden identificar y definir las interfaces necesarias entre los elementos antes de que el diseño detallado comience.',
                  children: [
                    {
                      title: 'Ejemplo de Interfaces',
                      definition: 'Al definir en anchura los subsistemas, se descubre que "Transferencias" necesita una interfaz para consultar el saldo en "Gestión de Cuentas" y otra para validar al usuario con "Seguridad".'
                    }
                  ]
                }
              ]
            },
            {
              title: 'Cubrimiento en Profundidad (Depth Coverage)',
              connectorLabel: 'es el',
              definition: 'Se refiere a seguir un requisito o una funcionalidad específica a través de todos los niveles de la jerarquía, desde el sistema hasta el componente de más bajo nivel.',
              children: [
                {
                  title: 'Trazabilidad Vertical Completa',
                  connectorLabel: 'asegura la',
                  definition: 'Garantiza que una capacidad clave del sistema ha sido completamente desglosada, asignada y detallada en todos los niveles necesarios para su implementación.',
                  children: [
                    {
                      title: 'Ejemplo de Cubrimiento en Profundidad',
                      definition: 'Se toma el requisito "El usuario debe poder realizar una transferencia internacional" y se sigue su flujo descendente: desde el requisito de sistema, pasando por los requisitos del subsistema "Transferencias", luego a los del componente "Validación SWIFT", hasta el módulo que formatea el mensaje ISO 20022.'
                    }
                  ]
                },
                {
                  title: 'Verificación de la Cadena Funcional',
                  connectorLabel: 'y permite la',
                  definition: 'Permite validar la coherencia y la lógica de una funcionalidad de principio a fin, asegurando que no haya eslabones perdidos en la cadena de requisitos.',
                  children: [
                    {
                      title: 'Ejemplo de Verificación',
                      definition: 'Al seguir en profundidad la transferencia, se verifica que los datos requeridos en el nivel más bajo (código IBAN) son solicitados correctamente por la interfaz de usuario en el nivel más alto.'
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
  { term: 'Elicitación (Elicitation)', definition: 'Proceso de descubrir y recopilar los requisitos de los stakeholders mediante técnicas como entrevistas, talleres y observación.' },
  { term: 'Descomposición (Decomposition)', definition: 'La práctica de dividir un sistema complejo en partes más pequeñas y manejables, como subsistemas o componentes.' },
  { term: 'Abstracción (Abstraction)', definition: 'El acto de simplificar la complejidad centrándose en las características esenciales de un sistema o componente, ignorando los detalles irrelevantes.' },
  { term: 'Asignación (Allocation)', definition: 'El proceso de asignar la responsabilidad de cumplir un requisito de alto nivel a uno o más elementos de nivel inferior en la jerarquía del sistema.' },
  { term: 'Flujo Descendente (Flowdown)', definition: 'La creación de requisitos más detallados y específicos para un elemento de nivel inferior como resultado de la asignación de un requisito de nivel superior.' },
  { term: 'Trazabilidad (Traceability)', definition: 'La capacidad de seguir la vida de un requisito, tanto hacia adelante como hacia atrás, desde su origen hasta su implementación y verificación.' },
  { term: 'Interfaz (Interface)', definition: 'Un punto de conexión compartido a través del cual los componentes del sistema, o el sistema y su entorno, intercambian información.' },
  { term: 'Validación (Validation)', definition: 'El proceso de asegurar que se está construyendo el sistema correcto, es decir, que cumple con las necesidades reales del usuario y los objetivos del negocio.' },
  { term: 'Verificación (Verification)', definition: 'El proceso de asegurar que el sistema se está construyendo correctamente, es decir, que cumple con sus especificaciones y requisitos definidos.' },
  { term: 'Stakeholder', definition: 'Cualquier persona, grupo u organización que tiene un interés en el sistema, como usuarios, clientes, desarrolladores y reguladores.' },
  { term: 'ConOps (Concept of Operations)', definition: 'Un documento narrativo que describe cómo se utilizará un sistema desde la perspectiva de sus usuarios en su entorno operativo previsto.' },
  { term: 'CASE (Computer-Aided Software Engineering)', definition: 'Herramientas de software que automatizan y apoyan las actividades del ciclo de vida del desarrollo de software, incluyendo la ingeniería de requisitos.' },
  { term: 'Ciclo de Vida en Fases (Phased-Delivery)', definition: 'Un modelo de desarrollo que permite que diferentes componentes del sistema se desarrollen en cronogramas distintos y se integren de forma progresiva.' },
  { term: 'Cubrimiento en Anchura (Breadth Coverage)', definition: 'Estrategia de análisis que consiste en definir todos los elementos de un mismo nivel jerárquico antes de detallar el siguiente nivel.' },
  { term: 'Cubrimiento en Profundidad (Depth Coverage)', definition: 'Estrategia de análisis que consiste en detallar una funcionalidad a través de todos los niveles de la jerarquía, desde el sistema hasta el componente final.' }
];

