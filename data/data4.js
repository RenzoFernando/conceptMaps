var mindMapData = {
    title: 'Arquitectura de Sistemas Paralelos: Clasificación de Flynn',
    definition: 'Análisis exhaustivo y detallado de los modelos de arquitectura para máquinas paralelas, centrado en la clasificación de Flynn, granularidad y estructuras de memoria, basado en los documentos de referencia y excluyendo temas específicos de redes.',
    children: [
        {
            title: 'Clasificación de Flynn (Flujos de Instrucción/Datos)',
            connectorLabel: 'se basa en',
            definition: 'Esquema de clasificación fundamental propuesto por Michael Flynn en 1966, basado en el número de flujos de instrucciones (programas) y flujos de datos que una máquina puede procesar simultáneamente.',
            children: [
                {
                    title: 'SISD (Single Instruction, Single Data)',
                    connectorLabel: 'categoriza',
                    definition: 'Un único flujo de instrucciones opera sobre un único flujo de datos. Corresponde al modelo computacional secuencial tradicional de Von Neumann.',
                    children: [
                        {
                            title: 'Modelo Operativo Secuencial',
                            connectorLabel: 'se caracteriza por',
                            definition: 'Un solo procesador (CPU) con un único contador de programa (PC) que ejecuta una secuencia de instrucciones de forma estrictamente ordenada, una tras otra.',
                            children: [
                                {
                                    title: 'Componentes Arquitectónicos Clave',
                                    connectorLabel: 'consta de',
                                    definition: 'Una Unidad de Control (CU) que interpreta instrucciones, una Unidad Aritmético-Lógica (ALU) que las ejecuta, y una memoria principal que almacena tanto instrucciones como datos.',
                                    children: [
                                        {
                                            title: 'Ciclo de Ejecución Fetch-Decode-Execute',
                                            connectorLabel: 'sigue un',
                                            definition: 'La instrucción es traída de memoria (Fetch), decodificada por la CU (Decode) y ejecutada por la ALU sobre un operando (Execute), antes de pasar a la siguiente instrucción indicada por el PC.',
                                            children: [
                                                {
                                                    title: 'Ejemplo Práctico de Máquina SISD',
                                                    definition: 'Un antiguo PC IBM con procesador Intel 8088 ejecutando MS-DOS. Solo puede correr un programa a la vez (un flujo de instrucción) que modifica datos en la RAM (un flujo de datos).'
                                                }
                                            ]
                                        },
                                        {
                                            title: 'SISD Multi-Instanciado para Fiabilidad',
                                            connectorLabel: 'puede ser',
                                            definition: 'Múltiples sistemas SISD idénticos que ejecutan el mismo programa sobre los mismos datos, no para acelerar, sino para redundancia y tolerancia a fallos (Fault Tolerance).',
                                            children: [
                                                {
                                                    title: 'Ejemplo de Multi-Instancia SISD',
                                                    definition: 'El sistema de control de vuelo de un transbordador espacial, que usaba múltiples computadores idénticos ejecutando el mismo software. Si uno fallaba, los otros continuaban operando sin interrupción.'
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
                    title: 'MISD (Multiple Instruction, Single Data)',
                    connectorLabel: 'categoriza',
                    definition: 'Múltiples flujos de instrucciones operan sobre un único flujo de datos. Es un modelo teórico con aplicaciones prácticas limitadas, principalmente las arquitecturas de tubería (pipeline).',
                    children: [
                        {
                            title: 'Implementación Principal: Tuberías (Pipelines)',
                            connectorLabel: 'se manifiesta como',
                            definition: 'Un flujo de datos que atraviesa una secuencia lineal de etapas de procesamiento. Cada etapa es un procesador que ejecuta un conjunto diferente de instrucciones sobre el dato antes de pasarlo a la siguiente.',
                            children: [
                                {
                                    title: 'Funcionamiento del Pipeline Sincronizado',
                                    connectorLabel: 'opera en',
                                    definition: 'Etapas discretas y sincronizadas. El dato de salida de una etapa se convierte en la entrada de la siguiente, permitiendo que múltiples datos estén en diferentes etapas del pipeline simultáneamente.',
                                    children: [
                                        {
                                            title: 'Sincronización por Latido (Clock Tick)',
                                            connectorLabel: 'requiere',
                                            definition: 'Una señal de reloj compartida (latido o "heartbeat") que empuja los datos a través de las etapas de la tubería de manera uniforme, asegurando el flujo y la coordinación entre etapas.',
                                            children: [
                                                {
                                                    title: 'Dato como Flujo Continuo',
                                                    connectorLabel: 'considera al',
                                                    definition: 'El "dato único" no tiene por qué ser un valor simple, puede ser un flujo continuo de elementos que son procesados en cadena por las diferentes instrucciones de cada etapa.',
                                                    children: [
                                                        {
                                                            title: 'Ejemplo de Arquitectura MISD',
                                                            definition: 'En bioinformática, un pipeline para análisis de secuencias de ADN: Etapa 1 (Instrucción 1: alinear secuencias), Etapa 2 (Instrucción 2: buscar mutaciones), Etapa 3 (Instrucción 3: anotar genes). El flujo de datos de ADN pasa por todas las etapas.'
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
                    title: 'SIMD (Single Instruction, Multiple Data)',
                    connectorLabel: 'categoriza',
                    definition: 'Un único flujo de instrucciones se difunde y ejecuta de forma síncrona sobre múltiples flujos de datos distintos, cada uno en una unidad de procesamiento diferente.',
                    children: [
                        {
                            title: 'Arquitectura y Componentes Típicos',
                            connectorLabel: 'se compone de',
                            definition: 'Una Unidad de Control (CU) que lee el programa y emite las instrucciones, y un arreglo de Unidades de Procesamiento de Datos (DPUs o PEs), cada una con su propia memoria local.',
                            children: [
                                {
                                    title: 'Paralelismo de Datos (Data Parallelism)',
                                    connectorLabel: 'explota el',
                                    definition: 'La capacidad de aplicar la misma operación (ej. `x = x * 2`) a un gran conjunto de datos (un vector o una matriz) de forma simultánea. Es ideal para problemas con alta regularidad.',
                                    children: [
                                        {
                                            title: 'Manejo de Estructuras de Control Condicional',
                                            connectorLabel: 'implica',
                                            definition: 'Las condiciones (if-then-else) se manejan "enmascarando" procesadores. Todos reciben la instrucción, pero solo aquellos cuya condición local es verdadera la ejecutan; los demás quedan inactivos.',
                                            children: [
                                                {
                                                    title: 'Procesadores Virtuales',
                                                    connectorLabel: 'utiliza',
                                                    definition: 'Un mecanismo de software donde un procesador físico simula ser múltiples procesadores virtuales para manejar conjuntos de datos mucho más grandes que el número de procesadores físicos disponibles.',
                                                    children: [
                                                        {
                                                            title: 'Ejemplo de Máquina SIMD',
                                                            definition: 'Procesamiento de audio: para aplicar un efecto de eco, la misma operación matemática se aplica simultáneamente a cada una de las miles de muestras que componen la señal de audio (los datos múltiples).'
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
                    title: 'MIMD (Multiple Instruction, Multiple Data)',
                    connectorLabel: 'categoriza',
                    definition: 'Múltiples flujos de instrucciones operan de forma independiente y asíncrona sobre múltiples flujos de datos. Es el modelo más flexible, potente y general de computación paralela.',
                    children: [
                        {
                            title: 'Características Fundamentales y Flexibilidad',
                            connectorLabel: 'se distingue por',
                            definition: 'Cada procesador posee su propio contador de programa (PC) y puede ejecutar un programa completamente diferente al de los demás, sobre sus propios datos locales o compartidos.',
                            children: [
                                {
                                    title: 'Asincronía y Coordinación Explícita',
                                    connectorLabel: 'implica',
                                    definition: 'Los procesadores no operan en pasos de reloj fijos. La comunicación (ej. paso de mensajes) y la sincronización (ej. cerrojos, barreras) deben ser manejadas explícitamente por el programador.',
                                    children: [
                                        {
                                            title: 'Implementación sobre Diversas Arquitecturas de Memoria',
                                            connectorLabel: 'puede usar',
                                            definition: 'Este modelo puede implementarse tanto en sistemas de memoria compartida (multiprocesadores multi-core) como en sistemas de memoria distribuida (multicomputadores o clústeres).',
                                            children: [
                                                {
                                                    title: 'Paralelismo de Control y Tareas',
                                                    connectorLabel: 'habilita el',
                                                    definition: 'Permite que diferentes partes funcionalmente distintas de un problema (ej. la base de datos, la IA, la simulación física en un juego) sean manejadas por diferentes programas ejecutándose en paralelo.',
                                                    children: [
                                                        {
                                                            title: 'Ejemplo de Máquina MIMD',
                                                            definition: 'Un clúster de servidores para una aplicación como Netflix. Un conjunto de máquinas (procesadores) se encarga de la autenticación de usuarios (instrucción 1, datos 1), otro de las recomendaciones (instrucción 2, datos 2) y otro del streaming de video (instrucción 3, datos 3).'
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
            title: 'Sincronía vs. Asincronía en Máquinas Paralelas',
            connectorLabel: 'diferencia por',
            definition: 'Se refiere a la necesidad de que los procesadores esperen unos a otros en puntos específicos. Las máquinas se clasifican como síncronas (operan en pasos de reloj fijos) o asíncronas (operan de forma independiente).',
            children: [
                {
                    title: 'Máquinas Síncronas',
                    connectorLabel: 'operan en',
                    definition: 'Ejecutan programas en pasos discretos y globales. Todos los procesadores deben completar su tarea asignada en un paso antes de que cualquiera pueda comenzar el siguiente.',
                    children: [
                        {
                            title: 'Mecanismo de Sincronización de Barrera',
                            connectorLabel: 'utilizan',
                            definition: 'El final de cada paso actúa como una "barrera" de sincronización. Ningún procesador puede cruzarla hasta que todos los demás hayan llegado, garantizando un estado global consistente antes de proceder.',
                            children: [
                                {
                                    title: 'Determinación del Ritmo por el Más Lento',
                                    connectorLabel: 'se rige por',
                                    definition: 'La duración de cada paso global está determinada por el procesador que más tarda en completar su tarea en ese paso. Los demás procesadores permanecen inactivos esperando en la barrera.',
                                    children: [
                                        {
                                            title: 'Modelos inherentemente Síncronos',
                                            connectorLabel: 'incluye',
                                            definition: 'Las arquitecturas SIMD y MISD (tuberías) son síncronas por naturaleza, ya que todas las operaciones están coordinadas rígidamente por una unidad de control central o un latido de reloj común.',
                                            children: [
                                                {
                                                    title: 'Ejemplo Práctico de Sincronización de Barrera',
                                                    definition: 'En una simulación meteorológica SIMD, tras calcular la temperatura de cada celda para el instante T, todos los procesadores deben esperar en una barrera. Solo cuando todos han terminado, pueden proceder a calcular la temperatura para el instante T+1.'
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
                    title: 'Máquinas Asíncronas',
                    connectorLabel: 'operan de forma',
                    definition: 'No dependen de puntos de sincronización globales. Los procesadores trabajan de forma independiente a su propio ritmo y solo se sincronizan localmente cuando es estrictamente necesario.',
                    children: [
                        {
                            title: 'Sincronización Local y Selectiva',
                            connectorLabel: 'emplean',
                            definition: 'La sincronización ocurre solo entre el subconjunto de procesadores que necesitan colaborar o intercambiar datos en un momento dado, sin detener a todo el sistema.',
                            children: [
                                {
                                    title: 'Mayor Flexibilidad y Eficiencia de Recursos',
                                    connectorLabel: 'ofrecen',
                                    definition: 'Permite un mejor aprovechamiento de los recursos computacionales, ya que los procesadores no tienen que esperar innecesariamente a otros con los que no interactúan directamente en esa fase del algoritmo.',
                                    children: [
                                        {
                                            title: 'Modelos inherentemente Asíncronos',
                                            connectorLabel: 'incluye',
                                            definition: 'Las arquitecturas MIMD son asíncronas por naturaleza, lo que les permite ejecutar tareas funcionalmente diferentes (paralelismo de control) a ritmos completamente distintos.',
                                            children: [
                                                {
                                                    title: 'Ejemplo Práctico de Sincronización Local',
                                                    definition: 'En un sistema bancario distribuido (MIMD), una transferencia de la cuenta A a la B solo requiere bloquear (sincronizar) los procesos que manejan A y B, mientras que otros miles de procesos que manejan otras cuentas continúan operando sin interrupción.'
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
            title: 'Granularidad del Paralelismo',
            connectorLabel: 'se refiere al',
            definition: 'El tamaño o la cantidad de cómputo que realiza un procesador entre puntos de comunicación o sincronización. Se divide conceptualmente en grano fino, mediano y grande.',
            children: [
                {
                    title: 'Grano Fino (Fine-Grained)',
                    connectorLabel: 'se caracteriza por',
                    definition: 'Tareas muy pequeñas, a menudo a nivel de una sola instrucción de máquina o un puñado de ellas. Implica una alta frecuencia de comunicación y sincronización.',
                    children: [
                        {
                            title: 'Relación Cómputo/Comunicación',
                            connectorLabel: 'tiene baja',
                            definition: 'El tiempo dedicado a la comunicación y sincronización es alto en comparación con el tiempo dedicado al cómputo útil, lo que puede generar una sobrecarga significativa.',
                            children: [
                                {
                                    title: 'Contexto de Aplicación Típico',
                                    connectorLabel: 'es ideal para',
                                    definition: 'Sistemas con paralelismo masivo de datos y conexiones de muy baja latencia, donde la misma operación simple se aplica a millones de elementos.',
                                    children: [
                                        {
                                            title: 'Ejemplo de Grano Fino',
                                            definition: 'En una máquina SIMD, cada procesador de datos ejecuta una única instrucción (ej. una multiplicación) y debe sincronizarse inmediatamente para recibir la siguiente instrucción. El cómputo es mínimo antes de la comunicación.'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    title: 'Grano Mediano (Medium-Grained)',
                    connectorLabel: 'se caracteriza por',
                    definition: 'Las tareas se componen de un número moderado de instrucciones, como un bucle o una función pequeña. Es un punto intermedio entre los dos extremos.',
                    children: [
                        {
                            title: 'Búsqueda de Equilibrio',
                            connectorLabel: 'intenta lograr un',
                            definition: 'Un balance entre el cómputo realizado y la sobrecarga de la comunicación. La sincronización es menos frecuente que en el grano fino, pero más que en el grano grueso.',
                            children: [
                                {
                                    title: 'Aplicabilidad',
                                    connectorLabel: 'se encuentra en',
                                    definition: 'Algoritmos que pueden ser descompuestos en tareas de tamaño intermedio, como pipelines de procesamiento o algunas tareas en arquitecturas sistólicas.',
                                    children: [
                                        {
                                            title: 'Ejemplo de Grano Mediano',
                                            definition: 'Un programa que paraleliza un bucle `for` grande, asignando un bloque de 100 iteraciones a cada procesador. La sincronización ocurre solo después de que cada procesador completa su bloque de 100 iteraciones.'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    title: 'Grano Grande o Grueso (Coarse-Grained)',
                    connectorLabel: 'se caracteriza por',
                    definition: 'Los procesadores ejecutan programas o subrutinas secuenciales grandes y complejas de forma independiente, con una comunicación o sincronización muy poco frecuente.',
                    children: [
                        {
                            title: 'Relación Cómputo/Comunicación',
                            connectorLabel: 'tiene alta',
                            definition: 'Los procesadores pasan la mayor parte del tiempo realizando cómputo y rara vez se comunican, minimizando la sobrecarga de la sincronización.',
                            children: [
                                {
                                    title: 'Modelo de Procesos Cooperativos',
                                    connectorLabel: 'se implementa con',
                                    definition: 'Cada procesador ejecuta un proceso secuencial completo. La sincronización es explícita y se realiza mediante primitivas como semáforos o paso de mensajes para coordinar tareas en puntos críticos y bien definidos.',
                                    children: [
                                        {
                                            title: 'Ejemplo de Grano Grande',
                                            definition: 'En la renderización de una película de animación, un procesador se encarga de renderizar el fotograma 1, otro el fotograma 2, etc. Cada uno trabaja de forma independiente durante horas y solo se sincronizan al final para ensamblar la película.'
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
            title: 'Estructura de Memoria en Sistemas Paralelos',
            connectorLabel: 'define cómo',
            definition: 'Los procesadores acceden al almacenamiento de datos. Esta estructura es un aspecto crítico del diseño arquitectónico, impactando directamente en la comunicación, el modelo de programación y la escalabilidad del sistema.',
            children: [
                {
                    title: 'Memoria Físicamente Compartida (UMA)',
                    connectorLabel: 'se basa en',
                    definition: 'Un único espacio de memoria centralizado es accesible por todos los procesadores a través de una red de interconexión (generalmente un bus). El tiempo de acceso a cualquier dirección de memoria es uniforme para todos los procesadores.',
                    children: [
                        {
                            title: 'Problema del Cuello de Botella del Bus',
                            connectorLabel: 'presenta el',
                            definition: 'A medida que aumenta el número de procesadores, la contienda por el acceso al bus de memoria compartida se convierte en un cuello de botella que satura el sistema y limita drásticamente el rendimiento y la escalabilidad.',
                            children: [
                                {
                                    title: 'Problema de Coherencia de Caché',
                                    connectorLabel: 'requiere resolver',
                                    definition: 'El uso de cachés locales por cada procesador introduce el problema de mantener la consistencia de los datos. Si un procesador modifica un dato en su caché, las copias en las cachés de otros procesadores deben ser invalidadas o actualizadas (ej. protocolo MESI).',
                                    children: [
                                        {
                                            title: 'Modelo de Programación Simplificado',
                                            connectorLabel: 'ofrece un',
                                            definition: 'La comunicación entre procesos es implícita a través de variables compartidas, lo que simplifica el desarrollo de software en comparación con el paso de mensajes.',
                                            children: [
                                                {
                                                    title: 'Ejemplo de UMA (Uniform Memory Access)',
                                                    definition: 'Un computador de escritorio con una CPU multi-core. Todos los núcleos comparten el acceso a la misma memoria RAM principal a través del bus del sistema. El tiempo para leer la dirección 0x1000 es el mismo para el núcleo 0 que para el núcleo 1.'
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
                    title: 'Memoria Lógicamente Compartida (NUMA)',
                    connectorLabel: 'es una',
                    definition: 'La memoria está físicamente distribuida (cada procesador o grupo de procesadores tiene su propio banco de memoria local), pero el sistema presenta un único espacio de direcciones lógicas a los programas.',
                    children: [
                        {
                            title: 'Acceso No Uniforme a Memoria',
                            connectorLabel: 'se caracteriza por',
                            definition: 'El acceso de un procesador a su memoria local es significativamente más rápido que el acceso a la memoria remota (la de otro procesador), lo que incentiva la optimización de la localidad de los datos.',
                            children: [
                                {
                                    title: 'Mejora de la Escalabilidad',
                                    connectorLabel: 'ofrece una',
                                    definition: 'Alivia el cuello de botella de la memoria centralizada de UMA, ya que la mayoría de los accesos son locales. Permite construir sistemas con un mayor número de procesadores de manera efectiva.',
                                    children: [
                                        {
                                            title: 'Complejidad para el Programador/SO',
                                            connectorLabel: 'introduce',
                                            definition: 'El sistema operativo y el programador deben ser conscientes de la topología NUMA para ubicar los procesos y sus datos en el mismo nodo de memoria local y así maximizar el rendimiento.',
                                            children: [
                                                {
                                                    title: 'Ejemplo de NUMA (Non-Uniform Memory Access)',
                                                    definition: 'Un servidor de base de datos moderno con dos sockets de CPU. Cada CPU tiene sus propios módulos de RAM. Un proceso corriendo en la CPU 1 accederá a la RAM 1 muy rápido, pero su acceso a la RAM 2 será más lento porque debe cruzar el enlace de interconexión entre CPUs.'
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
                    title: 'Memoria Distribuida (NORMA)',
                    connectorLabel: 'consiste en',
                    definition: 'Cada procesador tiene su propia memoria privada y un espacio de direcciones completamente aislado. No hay ninguna forma de acceso directo a la memoria de otro procesador.',
                    children: [
                        {
                            title: 'Comunicación Explícita por Paso de Mensajes',
                            connectorLabel: 'requiere',
                            definition: 'La única forma de compartir datos entre procesadores es enviando y recibiendo mensajes explícitos a través de la red de interconexión, utilizando librerías como MPI (Message Passing Interface).',
                            children: [
                                {
                                    title: 'Máxima Escalabilidad Potencial',
                                    connectorLabel: 'permite la',
                                    definition: 'Este modelo es el más escalable, ya que no hay ningún recurso de memoria compartido que genere contienda, permitiendo construir sistemas masivamente paralelos con miles o millones de procesadores.',
                                    children: [
                                        {
                                            title: 'Modelo de Programación Más Complejo',
                                            connectorLabel: 'implica un',
                                            definition: 'El programador es totalmente responsable de particionar los datos, distribuirlos y gestionar toda la comunicación y sincronización de forma manual.',
                                            children: [
                                                {
                                                    title: 'Ejemplo de NORMA (No Remote Memory Access)',
                                                    definition: 'Un supercomputador como el "Summit" de IBM. Está compuesto por miles de nodos de cómputo, cada uno es una computadora completa con su propia memoria. Para simular un fenómeno complejo, los nodos se envían mensajes con los resultados parciales.'
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
    { term: 'Aceleración (Speedup)', definition: 'Medida del rendimiento ganado al usar un sistema paralelo. Se calcula como (Tiempo de ejecución secuencial) / (Tiempo de ejecución paralelo).' },
    { term: 'Dependencia de Datos', definition: 'Una situación donde una instrucción no puede ejecutarse hasta que otra instrucción anterior haya completado y producido el dato que necesita.' },
    { term: 'Clasificación de Flynn', definition: 'Una taxonomía para arquitecturas paralelas basada en el número de flujos de instrucciones y de datos (SISD, SIMD, MISD, MIMD).' },
    { term: 'SISD (Single Instruction, Single Data)', definition: 'El modelo secuencial tradicional con un solo procesador ejecutando un solo flujo de instrucciones sobre un solo flujo de datos.' },
    { term: 'SIMD (Single Instruction, Multiple Data)', definition: 'Una única instrucción es ejecutada simultáneamente por múltiples procesadores sobre diferentes conjuntos de datos. Ideal para paralelismo de datos.' },
    { term: 'MISD (Multiple Instruction, Single Data)', definition: 'Múltiples instrucciones operan sobre un único flujo de datos, comúnmente implementado como pipelines o tuberías.' },
    { term: 'MIMD (Multiple Instruction, Multiple Data)', definition: 'Múltiples procesadores ejecutan diferentes instrucciones sobre diferentes datos de forma asíncrona. El modelo más flexible y general.' },
    { term: 'Sincronización de Barrera', definition: 'Un punto de sincronización global en programas síncronos donde todos los procesadores deben esperar antes de continuar.' },
    { term: 'Granularidad', definition: 'El tamaño relativo de las tareas computacionales en un programa paralelo. Puede ser fina (pequeña), mediana o grande (gruesa).' },
    { term: 'Procesos Cooperativos', definition: 'Un modelo de grano grande donde procesos secuenciales se ejecutan en diferentes procesadores y se sincronizan explícitamente (ej. con semáforos).' },
    { term: 'UMA (Uniform Memory Access)', definition: 'Arquitectura con una memoria físicamente compartida y centralizada. El tiempo de acceso es igual para todos los procesadores.' },
    { term: 'NUMA (Non-Uniform Memory Access)', definition: 'Arquitectura con memoria físicamente distribuida pero lógicamente compartida. El acceso a la memoria local es más rápido que a la remota.' },
    { term: 'NORMA (No Remote Memory Access)', definition: 'Arquitectura con memoria distribuida donde cada procesador solo accede a su memoria privada. La comunicación es por paso de mensajes.' },
    { term: 'Coherencia de Caché', definition: 'El problema de mantener la consistencia de los datos almacenados en las cachés locales de múltiples procesadores en un sistema de memoria compartida.' }
];

