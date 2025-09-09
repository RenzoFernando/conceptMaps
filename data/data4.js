var mindMapData = {
    title: 'Arquitectura de Sistemas Computacionales y Paralelismo (Análisis Jerárquico Profundo)',
    definition: 'Un análisis exhaustivo y detallado de los modelos de arquitectura para máquinas paralelas, centrado en la clasificación de Flynn, granularidad, sincronización y estructuras de memoria. Este mapa se basa en el documento de referencia "Sistemas Distribuidos" (Capítulo 13), excluyendo temas específicos de máquinas sistólicas, de flujo de datos y redes de interconexión (13.3.1, 13.3.2, 13.6.1-13.6.4).',
    children: [
        {
            title: 'Fundamentos y Motivaciones del Paralelismo',
            connectorLabel: 'se origina por',
            definition: 'La necesidad fundamental de mejorar el rendimiento computacional más allá de los límites de la ejecución secuencial, impulsada por la aceleración de la resolución de problemas y consideraciones económicas.',
            children: [
                {
                    title: 'Aceleración (Speedup)',
                    connectorLabel: 'busca la',
                    definition: 'La principal motivación para el paralelismo. Se define como la ganancia de velocidad obtenida al utilizar una implementación paralela en comparación con la mejor implementación secuencial.',
                    children: [
                        {
                            title: 'Medición del Rendimiento',
                            connectorLabel: 'implica la',
                            definition: 'Cuantificar la mejora obtenida mediante métricas clave que evalúan la ganancia y la eficiencia del uso de recursos adicionales.',
                            children: [
                                {
                                    title: 'Cálculo de la Aceleración',
                                    connectorLabel: 'se mide por',
                                    definition: 'Fórmula: Aceleración = (Tiempo de ejecución secuencial) / (Tiempo de ejecución paralelo). Un valor > 1 indica una ganancia de rendimiento.',
                                    children: [
                                        {
                                            title: 'Aceleración Lineal vs. Superlineal',
                                            connectorLabel: 'puede ser',
                                            definition: 'La aceleración ideal es lineal (N procesadores = N veces más rápido). A veces, puede ser superlineal debido a efectos de caché.',
                                            children: [
                                                {
                                                    title: 'Ejemplo de Aceleración Superlineal',
                                                    definition: 'Al dividir un problema grande entre 4 procesadores, cada subproblema ahora cabe completamente en la caché rápida de cada procesador, eliminando accesos lentos a RAM. El rendimiento total es más de 4 veces superior.'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    title: 'Eficiencia Paralela',
                                    connectorLabel: 'se relaciona con la',
                                    definition: 'Mide qué tan bien se utilizan los procesadores adicionales. Fórmula: Eficiencia = Aceleración / (Número de procesadores). El ideal es 1 (o 100%).',
                                    children: [
                                        {
                                            title: 'Factores que Limitan la Eficiencia',
                                            connectorLabel: 'se ve limitada por',
                                            definition: 'Razones por las que la eficiencia raramente es del 100%, representando la "sobrecarga" (overhead) del paralelismo.',
                                            children: [
                                                {
                                                    title: 'Sobrecarga de Comunicación',
                                                    definition: 'El tiempo que los procesadores gastan comunicándose y sincronizándose en lugar de computar. Aumenta con más procesadores.'
                                                },
                                                {
                                                    title: 'Partes Secuenciales (Ley de Amdahl)',
                                                    definition: 'Establece que la aceleración máxima de un programa está limitada por su fracción secuencial. Si el 10% de un programa es secuencial, la aceleración nunca podrá ser mayor a 10x, sin importar cuántos procesadores se usen.'
                                                },
                                                {
                                                    title: 'Desbalance de Carga',
                                                    definition: 'Ocurre cuando algunas tareas paralelas toman más tiempo que otras, dejando a algunos procesadores ociosos mientras esperan al más lento.'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Ejemplo Práctico de Aceleración',
                            connectorLabel: 'como en el',
                            definition: 'En el problema de entregar paquetes a dos ciudades: la solución secuencial tarda 11.6 horas. La solución paralela con dos autos tarda 7.2 horas. Aceleración = 11.6 / 7.2 ≈ 1.61. La tarea es 1.61 veces más rápida.',
                            children: [
                                {
                                    title: 'Análisis de Eficiencia del Ejemplo',
                                    connectorLabel: 'con una',
                                    definition: 'Eficiencia = Aceleración / (Número de autos) = 1.61 / 2 ≈ 80.5%. El 19.5% restante se pierde en "sobrecarga" (coordinación y desbalance de carga, ya que una ruta es más larga que la otra).',
                                    children: [
                                        {
                                            title: 'Identificación de la Sobrecarga',
                                            connectorLabel: 'donde la sobrecarga es',
                                            definition: 'El tiempo de coordinación inicial y el tiempo que el conductor de la ruta corta (5.6h) debe esperar ocioso después de terminar, mientras el otro completa su ruta (7.2h).',
                                            children: [
                                                {
                                                    title: 'Ejemplo Análogo en Computación',
                                                    definition: 'Un procesador termina de procesar su bloque de datos y debe esperar inactivo a que otro procesador, con un bloque de datos más complejo, termine su cómputo antes de poder combinar los resultados.'
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
                    title: 'Factores Económicos y Límites Tecnológicos',
                    connectorLabel: 'se justifica por',
                    definition: 'La relación costo/rendimiento no es lineal. A medida que nos acercamos a los límites de la tecnología, el costo de aumentar la velocidad de un solo procesador crece exponencialmente.',
                    children: [
                        {
                            title: 'Curva Costo/Rendimiento',
                            connectorLabel: 'sigue una',
                            definition: 'Inicialmente lineal, pero se vuelve exponencial cerca del límite tecnológico. Esto hace que sea más rentable combinar muchos procesadores "baratos" que construir un único procesador super-rápido y extremadamente caro.',
                            children: [
                                {
                                    title: 'Concepto de Máquinas Masivamente Paralelas (MPP)',
                                    connectorLabel: 'da lugar al',
                                    definition: 'Sistemas construidos con miles de procesadores comerciales de bajo costo para alcanzar un rendimiento agregado superior al de un supercomputador monolítico, pero a una fracción del costo.',
                                    children: [
                                        {
                                            title: 'Uso de Componentes COTS',
                                            connectorLabel: 'basado en el',
                                            definition: 'La estrategia se basa en usar componentes "Commodity Off-The-Shelf" (disponibles en el mercado), como procesadores de PC o servidores, para reducir drásticamente los costos de fabricación.',
                                            children: [
                                                {
                                                    title: 'Ejemplo de Componente COTS',
                                                    definition: 'Google construyó sus primeros clústeres masivos utilizando miles de PCs de escritorio estándar, logrando una potencia de cálculo sin precedentes para su motor de búsqueda a un costo muy bajo en comparación con los supercomputadores de la época.'
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
                    title: 'Dependencia de Datos',
                    connectorLabel: 'está limitado por la',
                    definition: 'Una limitación fundamental del paralelismo. Ocurre cuando una operación necesita el resultado de una operación anterior para poder comenzar. Esto impone un orden secuencial.',
                    children: [
                        {
                            title: 'Consecuencias de la Dependencia',
                            connectorLabel: 'resulta en',
                            definition: 'La dependencia de datos obliga a una serialización forzada de las operaciones, limitando el grado de paralelismo que se puede explotar y complicando el diseño del algoritmo.',
                            children: [
                                {
                                    title: 'Problemas "Vergonzosamente Paralelos"',
                                    connectorLabel: 'contrasta con',
                                    definition: 'Problemas con muy pocas o ninguna dependencia de datos entre las tareas, que pueden ser divididos y ejecutados en paralelo con un esfuerzo mínimo de coordinación.',
                                    children: [
                                        {
                                            title: 'Análisis de Dependencia en Multiplicación de Matrices',
                                            connectorLabel: 'como en el',
                                            definition: 'El cálculo de cada elemento C[i,j] es independiente de los demás, por lo que es un problema vergonzosamente paralelo.',
                                            children: [
                                                {
                                                    title: 'Ejemplo de Multiplicación de Matrices',
                                                    definition: 'Para calcular C[0,0] y C[1,1], no se necesita ningún resultado intermedio del otro. Se pueden asignar a dos procesadores que trabajan sin necesidad de comunicarse hasta el final.'
                                                }
                                            ]
                                        },
                                        {
                                            title: 'Análisis de Dependencia en Ordenación',
                                            connectorLabel: 'mientras que en la',
                                            definition: 'En un algoritmo de burbuja, la comparación de a[i] con a[i+1] depende del valor que a[i] haya adquirido tras la comparación anterior con a[i-1]. Esto crea una cadena de dependencias.',
                                            children: [
                                                {
                                                    title: 'Ejemplo de Dependencia en Ordenación',
                                                    definition: 'Para ordenar [3, 1, 2], primero se compara 3 y 1, resultando en [1, 3, 2]. El siguiente paso, comparar 3 y 2, depende directamente del resultado del paso anterior. No se puede hacer en paralelo.'
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
            title: 'Clasificación de Flynn (Flujos de Instrucción/Datos)',
            connectorLabel: 'se basa en',
            definition: 'Esquema de clasificación fundamental propuesto por Michael Flynn en 1966, basado en el número de flujos de instrucciones (programas) y flujos de datos que una máquina puede procesar simultáneamente.',
            children: [
                {
                    title: 'SISD (Single Instruction, Single Data)',
                    connectorLabel: 'categoriza',
                    definition: 'Un único flujo de instrucciones opera sobre un único flujo de datos. Corresponde al modelo computacional secuencial tradicional.',
                    children: [
                        {
                            title: 'Arquitectura Von Neumann',
                            connectorLabel: 'se basa en la',
                            definition: 'Unidad central de procesamiento (CPU), memoria principal, y un bus que conecta ambos, creando el "cuello de botella de Von Neumann".',
                            children: [
                                {
                                    title: 'Componentes Clave',
                                    connectorLabel: 'consta de',
                                    definition: 'Una Unidad de Control (CU), una Unidad Aritmético-Lógica (ALU), y una memoria que almacena instrucciones y datos.',
                                    children: [
                                        {
                                            title: 'Ciclo de Ejecución Fetch-Decode-Execute',
                                            connectorLabel: 'sigue el',
                                            definition: 'La instrucción es traída de memoria (Fetch), decodificada por la CU (Decode) y ejecutada por la ALU (Execute).',
                                            children: [
                                                {
                                                    title: 'Ejemplo de Ciclo de Ejecución',
                                                    definition: 'La CPU (1) trae la instrucción `ADD R1, R2` de la RAM, (2) la decodifica para entender que es una suma, y (3) la ALU realiza la operación sumando los valores de los registros R1 y R2.'
                                                }
                                            ]
                                        },
                                        {
                                            title: 'Cuello de Botella de Von Neumann',
                                            connectorLabel: 'sufre del',
                                            definition: 'El bus compartido entre CPU y memoria para datos e instrucciones se convierte en un punto de congestión, limitando el rendimiento.',
                                            children: [
                                                {
                                                    title: 'Ejemplo de Cuello de Botella',
                                                    definition: 'Mientras la CPU espera traer una instrucción de la RAM, no puede estar trayendo datos para la instrucción anterior, y viceversa. Ambas operaciones compiten por el mismo bus.'
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
                    definition: 'Múltiples flujos de instrucciones operan sobre un único flujo de datos. Modelo teórico con aplicación principal en arquitecturas de tubería (pipeline).',
                    children: [
                        {
                            title: 'Implementación: Tuberías (Pipelines)',
                            connectorLabel: 'se manifiesta como',
                            definition: 'Un flujo de datos atraviesa una secuencia lineal de etapas de procesamiento. Cada etapa ejecuta una instrucción diferente sobre el dato.',
                            children: [
                                {
                                    title: 'Características del Pipeline',
                                    connectorLabel: 'posee',
                                    definition: 'Propiedades que definen su funcionamiento y rendimiento.',
                                    children: [
                                        {
                                            title: 'Funcionamiento Sincronizado',
                                            connectorLabel: 'con un',
                                            definition: 'Las etapas son discretas y sincronizadas. La salida de una etapa es la entrada de la siguiente, usualmente al ritmo de un reloj.',
                                            children: [
                                                {
                                                    title: 'Ejemplo de Sincronización en Pipeline',
                                                    definition: 'En un pipeline de ensamblaje de autos, cada estación (chasis, motor, pintura) tiene un tiempo fijo. Al sonar una campana (pulso de reloj), todos los autos avanzan simultáneamente a la siguiente estación.'
                                                }
                                            ]
                                        },
                                        {
                                            title: 'Aumento del Throughput vs. Latencia',
                                            connectorLabel: 'resulta en un',
                                            definition: 'No reduce la latencia de una operación individual, pero aumenta el número de operaciones completadas por unidad de tiempo (rendimiento global).',
                                            children: [
                                                {
                                                    title: 'Ejemplo de Throughput vs. Latencia',
                                                    definition: 'Si un pipeline de 5 etapas tarda 5 minutos en procesar un dato (latencia), procesará 12 datos por hora. En cambio, un sistema secuencial que tarda 5 minutos por dato, solo procesa 12 datos en 60 minutos. El pipeline tiene mayor throughput.'
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
                            title: 'Arquitectura Típica',
                            connectorLabel: 'se compone de',
                            definition: 'Una Unidad de Control y un arreglo de Unidades de Procesamiento (PEs).',
                            children: [
                                {
                                    title: 'Procesador de Control',
                                    connectorLabel: 'un',
                                    definition: 'Lee el programa y emite (broadcast) las instrucciones a todos los PEs. Gestiona el flujo del programa.',
                                    children: [
                                        {
                                            title: 'Ejemplo de Procesador de Control',
                                            definition: 'En una GPU, el procesador de control lee la instrucción "aumentar brillo" y la envía a miles de PEs, en lugar de que cada PE tenga que leer la instrucción por sí mismo.'
                                        }
                                    ]
                                },
                                {
                                    title: 'Procesadores de Datos (PEs)',
                                    connectorLabel: 'y múltiples',
                                    definition: 'Unidades simples que ejecutan la instrucción recibida sobre su dato local. Cada PE tiene su propia memoria local.',
                                    children: [
                                        {
                                            title: 'Ejemplo de Procesador de Datos (PE)',
                                            definition: 'Cada PE de una GPU está asignado a un píxel o un grupo de píxeles. Recibe la instrucción "aumentar brillo" y la aplica al valor de color de su píxel asignado.'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Paralelismo de Datos (Data Parallelism)',
                            connectorLabel: 'explota el',
                            definition: 'La capacidad de aplicar la misma operación a un gran conjunto de datos (vector, matriz) de forma simultánea. Ideal para problemas con alta regularidad.',
                            children: [
                                {
                                    title: 'Técnicas de Programación SIMD',
                                    connectorLabel: 'utiliza',
                                    definition: 'Estrategias para manejar el flujo de control en un entorno SIMD donde no todos los datos deben ser procesados igual.',
                                    children: [
                                        {
                                            title: 'Enmascaramiento de PEs',
                                            connectorLabel: 'como el',
                                            definition: 'Para condicionales (if/else), todos los PEs reciben las instrucciones de ambas ramas, pero solo se activan ("desenmascaran") los que cumplen la condición para cada rama.',
                                            children: [
                                                {
                                                    title: 'Ejemplo de Enmascaramiento',
                                                    definition: 'Instrucción: "Si el píxel es azul, ponerlo en rojo". Todos los PEs reciben la instrucción "poner en rojo", pero solo aquellos PEs cuyo píxel es azul la ejecutan; los demás la ignoran.'
                                                }
                                            ]
                                        },
                                        {
                                            title: 'Procesadores Virtuales',
                                            connectorLabel: 'o los',
                                            definition: 'Un PE físico simula ser múltiples PEs virtuales para manejar conjuntos de datos más grandes que el número de PEs físicos.',
                                            children: [
                                                {
                                                    title: 'Ejemplo de Procesador Virtual',
                                                    definition: 'Una GPU con 1024 PEs físicos necesita procesar una imagen de 4096 píxeles. Cada PE físico procesa 4 píxeles de forma secuencial, actuando como 4 PEs virtuales.'
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
                    definition: 'Múltiples flujos de instrucciones operan de forma independiente y asíncrona sobre múltiples flujos de datos. El modelo más flexible y general.',
                    children: [
                        {
                            title: 'Características Fundamentales',
                            connectorLabel: 'se distingue por',
                            definition: 'Cada procesador es autónomo, con su propio contador de programa (PC) y puede ejecutar un programa distinto, requiriendo coordinación explícita.',
                            children: [
                                {
                                    title: 'Paralelismo de Tareas/Control',
                                    connectorLabel: 'su',
                                    definition: 'Permite ejecutar tareas funcionalmente diferentes en paralelo (ej. un procesador maneja la física de un juego, otro la IA, otro el audio).',
                                    children: [
                                        {
                                            title: 'Ejemplo de Paralelismo de Tareas',
                                            definition: 'En un servidor web, el Procesador 1 maneja la encriptación SSL de una nueva conexión, mientras el Procesador 2 consulta la base de datos para otra petición, y el Procesador 3 comprime una respuesta para un tercer cliente.'
                                        }
                                    ]
                                },
                                {
                                    title: 'Asincronía y Coordinación Explícita',
                                    connectorLabel: 'y su',
                                    definition: 'Los procesadores no operan en pasos de reloj fijos. La sincronización debe ser manejada explícitamente por el programador (ej. locks, mensajes).',
                                    children: [
                                        {
                                            title: 'Ejemplo de Coordinación Explícita',
                                            definition: 'En una transferencia bancaria, el Proceso A debe adquirir un "lock" (un semáforo) sobre la cuenta de origen antes de debitar, para evitar que otro proceso (Proceso B) lea el saldo incorrecto al mismo tiempo.'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Estilos de Programación MIMD',
                            connectorLabel: 'incluye',
                            definition: 'Formas comunes de estructurar programas para sistemas MIMD, siendo SPMD la más habitual.',
                            children: [
                                {
                                    title: 'SPMD (Single Program, Multiple Data)',
                                    connectorLabel: 'a menudo usa el modelo',
                                    definition: 'Un subconjunto común donde todos los procesadores ejecutan el mismo código, pero operan de forma asíncrona y sobre diferentes datos, tomando caminos distintos en el código basados en su ID.',
                                    children: [
                                        {
                                            title: 'Diferencia con SIMD',
                                            connectorLabel: 'cuya',
                                            definition: 'En SIMD la ejecución es síncrona (lock-step). En SPMD es asíncrona; cada procesador avanza a su propio ritmo a través del mismo programa.',
                                            children: [
                                                {
                                                    title: 'Ejemplo de SPMD',
                                                    definition: 'En un clúster de renderizado, todas las máquinas ejecutan el mismo programa (Blender). La máquina 1, con ID 1, renderiza el frame 1. La máquina 2 renderiza el frame 2. Si el frame 1 es más simple, la máquina 1 terminará antes y podrá empezar el frame 3, sin esperar a la 2.'
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
            title: 'Sincronía vs. Asincronía',
            connectorLabel: 'diferencia por',
            definition: 'Se refiere a si los procesadores operan en pasos de reloj globales (síncronos) o de forma independiente (asíncronos), sincronizándose solo cuando es necesario.',
            children: [
                {
                    title: 'Máquinas Síncronas',
                    connectorLabel: 'operan en',
                    definition: 'Ejecutan programas en pasos discretos y globales. Todos los procesadores deben completar su tarea asignada en un paso antes de que cualquiera pueda comenzar el siguiente.',
                    children: [
                        {
                            title: 'Mecanismo de Sincronización de Barrera',
                            connectorLabel: 'utilizan',
                            definition: 'El final de cada paso actúa como una "barrera". Ningún procesador puede cruzarla hasta que todos los demás hayan llegado.',
                            children: [
                                {
                                    title: 'Ventajas de la Sincronía',
                                    connectorLabel: 'sus ventajas son',
                                    definition: 'La simplicidad del modelo de programación y la predictibilidad del estado del sistema, lo que facilita la depuración.',
                                    children: [
                                        {
                                            title: 'Facilidad de Razonamiento',
                                            connectorLabel: 'por su',
                                            definition: 'El programador sabe que al inicio del paso N, todos los resultados del paso N-1 están disponibles en todos los procesadores.',
                                            children: [
                                                {
                                                    title: 'Ejemplo de Simplicidad',
                                                    definition: 'En una simulación celular, el estado de la célula (i,j) en el tiempo t+1 depende de sus vecinos en el tiempo t. Con una barrera, es seguro que todos los estados del tiempo t han sido calculados antes de empezar t+1.'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    title: 'Desventajas de la Sincronía',
                                    connectorLabel: 'y sus desventajas son',
                                    definition: 'La ineficiencia causada por tener que esperar al procesador más lento en cada paso, dejando a los demás ociosos.',
                                    children: [
                                        {
                                            title: 'Impacto del Desbalance de Carga',
                                            connectorLabel: 'por el',
                                            definition: 'Si una tarea es más compleja que las otras, su procesador se convierte en el cuello de botella de todo el sistema.',
                                            children: [
                                                {
                                                    title: 'Ejemplo de Ineficiencia',
                                                    definition: 'En un sistema SIMD, 4 procesadores (P0, P1, P2, P3) ejecutan un paso. P0, P1, P3 tardan 1ms, pero P2 tarda 10ms. Todo el sistema debe esperar 10ms por cada paso, desperdiciando el 90% del tiempo en P0, P1 y P3.'
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
                    definition: 'No dependen de puntos de sincronización globales. Los procesadores trabajan de forma independiente y solo se sincronizan localmente cuando es necesario.',
                    children: [
                        {
                            title: 'Sincronización Local y Selectiva',
                            connectorLabel: 'emplean',
                            definition: 'La sincronización ocurre solo entre el subconjunto de procesadores que necesitan colaborar, usando mecanismos como locks, semáforos o mensajes, sin detener a todo el sistema.',
                            children: [
                                {
                                    title: 'Ventajas de la Asincronía',
                                    connectorLabel: 'sus ventajas son',
                                    definition: 'Mayor eficiencia y flexibilidad, ya que los procesadores no se bloquean innecesariamente, permitiendo un mejor aprovechamiento de los recursos.',
                                    children: [
                                        {
                                            title: 'Tolerancia al Desbalance de Carga',
                                            connectorLabel: 'por su',
                                            definition: 'Un procesador más lento solo retrasa a aquellos que dependen directamente de su resultado, no a todo el sistema.',
                                            children: [
                                                {
                                                    title: 'Ejemplo de Eficiencia',
                                                    definition: 'En un clúster web, si la petición del usuario A tarda 100ms y la del usuario B tarda 10ms, el servidor que atiende a B puede terminar y quedar libre para un usuario C, sin esperar al que atiende a A.'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    title: 'Desventajas de la Asincronía',
                                    connectorLabel: 'y sus desventajas son',
                                    definition: 'La alta complejidad de programación para manejar correctamente la sincronización y evitar problemas de concurrencia.',
                                    children: [
                                        {
                                            title: 'Problemas Comunes',
                                            connectorLabel: 'como los',
                                            definition: 'Condiciones de carrera (el resultado depende del orden impredecible de llegada) y puntos muertos (procesos bloqueados esperándose mutuamente).',
                                            children: [
                                                {
                                                    title: 'Ejemplo de Condición de Carrera',
                                                    definition: 'Dos procesos intentan incrementar un contador (valor inicial 0) al mismo tiempo. Ambos leen 0, ambos calculan 1 y ambos escriben 1. El resultado final es 1, en lugar de 2. Se necesita un lock para evitarlo.'
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
            definition: 'El tamaño o la cantidad de cómputo que realiza una tarea antes de necesitar comunicarse o sincronizarse. Se divide en grano fino, mediano y grande.',
            children: [
                {
                    title: 'Grano Fino (Fine-Grained)',
                    connectorLabel: 'se caracteriza por',
                    definition: 'Tareas muy pequeñas (a nivel de instrucción o pocas instrucciones). Alta frecuencia de comunicación.',
                    children: [
                        {
                            title: 'Propiedades',
                            connectorLabel: 'tiene las siguientes',
                            definition: 'Características que definen este nivel de granularidad, como una baja relación cómputo/comunicación y una alta sobrecarga.',
                            children: [
                                {
                                    title: 'Relación Cómputo/Comunicación Baja',
                                    connectorLabel: 'una',
                                    definition: 'Se dedica una cantidad de tiempo similar o mayor a comunicar/sincronizar que a realizar trabajo útil.',
                                    children: [
                                        {
                                            title: 'Ejemplo de Baja Relación',
                                            definition: 'Un procesador suma dos números (1 nanosegundo) pero tarda 10 nanosegundos en obtener los números de otro procesador y enviar el resultado.'
                                        }
                                    ]
                                },
                                {
                                    title: 'Arquitectura Típica',
                                    connectorLabel: 'y su',
                                    definition: 'SIMD, procesadores vectoriales, donde el paralelismo se explota a nivel de hardware muy bajo.',
                                    children: [
                                        {
                                            title: 'Ejemplo de Grano Fino',
                                            definition: 'Una GPU aplica una operación a 4 números a la vez usando una instrucción AVX (Advanced Vector Extensions). El "grano" es una sola instrucción de máquina.'
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
                    definition: 'Tareas de tamaño moderado (un bucle, una función). Busca un equilibrio entre cómputo y comunicación.',
                    children: [
                        {
                            title: 'Propiedades',
                            connectorLabel: 'tiene las siguientes',
                            definition: 'Características que definen este nivel de granularidad, como una relación cómputo/comunicación balanceada.',
                            children: [
                                {
                                    title: 'Paralelismo a Nivel de Tarea Ligera',
                                    connectorLabel: 'un',
                                    definition: 'A menudo implementado con hilos (threads) dentro de un mismo proceso, compartiendo memoria.',
                                    children: [
                                        {
                                            title: 'Ejemplo de Grano Mediano',
                                            definition: 'Al procesar una imagen, se divide en 4 cuadrantes. 4 hilos (uno por núcleo de CPU) aplican un filtro a su cuadrante asignado. Se sincronizan solo cuando todos han terminado.'
                                        }
                                    ]
                                },
                                {
                                    title: 'Contexto de Aplicación',
                                    connectorLabel: 'y un',
                                    definition: 'Paralelización de bucles, donde cada procesador maneja un trozo de las iteraciones. Es común en computación científica.',
                                    children: [
                                        {
                                            title: 'Ejemplo de Paralelización de Bucle',
                                            definition: 'Un bucle que itera un millón de veces se divide entre 8 hilos. Cada hilo ejecuta 125,000 iteraciones. La sincronización es mínima (al inicio y al final del bucle).'
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
                    definition: 'Tareas grandes y complejas (programas enteros o procesos independientes). Comunicación infrecuente.',
                    children: [
                        {
                            title: 'Propiedades',
                            connectorLabel: 'tiene las siguientes',
                            definition: 'Características que definen este nivel de granularidad, como una alta relación cómputo/comunicación y baja sobrecarga.',
                            children: [
                                {
                                    title: 'Relación Cómputo/Comunicación Alta',
                                    connectorLabel: 'una',
                                    definition: 'Se computa mucho más de lo que se comunica. Las tareas pueden ejecutarse durante minutos u horas antes de necesitar sincronización.',
                                    children: [
                                        {
                                            title: 'Ejemplo de Alta Relación',
                                            definition: 'Un servidor renderiza un fotograma de una película (8 horas de cómputo) y luego envía una pequeña notificación de "terminado" (milisegundos).'
                                        }
                                    ]
                                },
                                {
                                    title: 'Arquitectura Típica',
                                    connectorLabel: 'y su',
                                    definition: 'MIMD, sistemas distribuidos, clústeres, donde la comunicación es costosa (a través de red).',
                                    children: [
                                        {
                                            title: 'Ejemplo de Grano Grande',
                                            definition: 'En el proyecto SETI@home, miles de computadoras personales analizan de forma independiente grandes bloques de datos de radiotelescopios (días de cómputo) y solo envían un pequeño resultado al final.'
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
            definition: 'Los procesadores acceden al almacenamiento de datos. Es un aspecto crítico que impacta la comunicación, programación y escalabilidad.',
            children: [
                {
                    title: 'Memoria Físicamente Compartida (UMA)',
                    connectorLabel: 'se basa en',
                    definition: 'Un único espacio de memoria centralizado accesible por todos los procesadores. El tiempo de acceso es uniforme (Uniform Memory Access).',
                    children: [
                        {
                            title: 'Modelo de Programación',
                            connectorLabel: 'con un',
                            definition: 'Simple, basado en variables compartidas en un espacio de direcciones global. La comunicación es implícita al leer/escribir en memoria.',
                            children: [
                                {
                                    title: 'Sincronización mediante Memoria',
                                    connectorLabel: 'y',
                                    definition: 'Se usan variables especiales en memoria (locks, semáforos) para coordinar el acceso a datos compartidos.',
                                    children: [
                                        {
                                            title: 'Ejemplo de Programación UMA',
                                            definition: 'Dos hilos incrementan un contador global. Ambos pueden leer y escribir en la misma dirección de memoria que contiene el contador, usando un lock para evitar condiciones de carrera.'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Desafíos Clave',
                            connectorLabel: 'presenta',
                            definition: 'Limitaciones inherentes al modelo que afectan el rendimiento y la escalabilidad.',
                            children: [
                                {
                                    title: 'Cuello de Botella del Bus de Memoria',
                                    connectorLabel: 'el',
                                    definition: 'La contienda por el acceso al bus de memoria limita la escalabilidad a unas pocas decenas de procesadores.',
                                    children: [
                                        {
                                            title: 'Ejemplo de Cuello de Botella de Bus',
                                            definition: 'Si 16 procesadores intentan acceder a la RAM al mismo tiempo a través de un único bus, 15 de ellos tendrán que esperar, creando un atasco que anula la ventaja del paralelismo.'
                                        }
                                    ]
                                },
                                {
                                    title: 'Problema de Coherencia de Caché',
                                    connectorLabel: 'y el',
                                    definition: 'Las cachés locales de cada procesador deben mantenerse consistentes. Si un procesador modifica un dato, las copias en otras cachés deben ser invalidadas o actualizadas.',
                                    children: [
                                        {
                                            title: 'Ejemplo de Coherencia de Caché',
                                            definition: 'El Procesador 1 lee la variable X (valor 5) en su caché. El Procesador 2 lee X y también la tiene en su caché. Si P1 cambia X a 10, el sistema debe asegurar que la copia de P2 se invalide, para que no trabaje con el valor obsoleto 5.'
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
                    definition: 'La memoria está físicamente distribuida (cada procesador tiene su memoria local), pero se presenta como un único espacio de direcciones lógicas (Non-Uniform Memory Access).',
                    children: [
                        {
                            title: 'Característica Principal',
                            connectorLabel: 'cuya',
                            definition: 'El acceso a memoria local es significativamente más rápido que el acceso a memoria remota (la de otro procesador).',
                            children: [
                                {
                                    title: 'Implicaciones de Rendimiento',
                                    connectorLabel: 'con',
                                    definition: 'El rendimiento depende críticamente de la "localidad de los datos": asegurar que un proceso acceda mayormente a su memoria local.',
                                    children: [
                                        {
                                            title: 'Ejemplo de Acceso NUMA',
                                            definition: 'Un proceso en CPU 0 accede a su RAM local en 50ns (nanosegundos). Si necesita un dato en la RAM de la CPU 1, el acceso puede tardar 150ns porque tiene que cruzar la interconexión entre CPUs.'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Ventajas y Complejidad',
                            connectorLabel: 'presenta',
                            definition: 'Ventajas de escalabilidad sobre UMA, pero con mayor complejidad para el software (sistema operativo y programador).',
                            children: [
                                {
                                    title: 'Mejora de la Escalabilidad',
                                    connectorLabel: 'una',
                                    definition: 'Alivia el cuello de botella de UMA al reducir la contención en la interconexión, permitiendo sistemas con cientos de procesadores.',
                                    children: [
                                        {
                                            title: 'Ejemplo de Escalabilidad NUMA',
                                            definition: 'En un sistema de 8 CPUs, la mayoría de los accesos a memoria se resuelven localmente en cada CPU, por lo que la interconexión central no se satura tanto como un bus UMA único.'
                                        }
                                    ]
                                },
                                {
                                    title: 'Optimización del Sistema Operativo',
                                    connectorLabel: 'y requiere',
                                    definition: 'El planificador (scheduler) del SO debe intentar mantener un proceso y sus datos en el mismo nodo NUMA para maximizar el rendimiento.',
                                    children: [
                                        {
                                            title: 'Ejemplo de Optimización de SO',
                                            definition: 'Cuando un programa se inicia en la CPU 2, el sistema operativo intentará asignarle memoria del banco de RAM conectado a la CPU 2 para asegurar accesos rápidos.'
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
                    definition: 'Cada procesador tiene su propia memoria privada y espacio de direcciones aislado (No Remote Memory Access). No hay acceso directo a memoria remota.',
                    children: [
                        {
                            title: 'Modelo de Programación por Paso de Mensajes',
                            connectorLabel: 'usa un',
                            definition: 'Complejo, basado en comunicación explícita. Los procesos deben empaquetar datos en mensajes y enviarlos a través de una red.',
                            children: [
                                {
                                    title: 'Primitivas de Comunicación',
                                    connectorLabel: 'con',
                                    definition: 'Los programas deben usar explícitamente operaciones como `send()` y `receive()`, usando librerías como MPI (Message Passing Interface).',
                                    children: [
                                        {
                                            title: 'Ejemplo de Paso de Mensajes',
                                            definition: 'El Proceso 1 necesita un dato del Proceso 2. P1 envía un mensaje "dame el dato X". P2 recibe el mensaje, busca X en su memoria local, y envía otro mensaje de vuelta con el valor. P1 debe esperar (bloquearse) hasta recibir la respuesta.'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Ventajas y Desventajas',
                            connectorLabel: 'presenta',
                            definition: 'El balance definitivo entre escalabilidad y complejidad de programación.',
                            children: [
                                {
                                    title: 'Máxima Escalabilidad',
                                    connectorLabel: 'la',
                                    definition: 'Permite construir sistemas masivamente paralelos con miles de procesadores al no haber recursos compartidos que generen contención.',
                                    children: [
                                        {
                                            title: 'Ejemplo de Máxima Escalabilidad',
                                            definition: 'Un supercomputador como Fugaku tiene más de 150,000 nodos (computadoras completas). Esta escala es imposible con memoria compartida, pero viable con paso de mensajes.'
                                        }
                                    ]
                                },
                                {
                                    title: 'Mayor Complejidad para el Programador',
                                    connectorLabel: 'y la',
                                    definition: 'El programador es responsable de particionar y distribuir los datos manualmente, y de gestionar toda la comunicación y sincronización.',
                                    children: [
                                        {
                                            title: 'Ejemplo de Complejidad',
                                            definition: 'Para sumar un vector de 1000 elementos con 10 procesadores, el programador debe escribir código para: (1) dividir el vector en 10 trozos, (2) enviar cada trozo a un procesador, (3) que cada uno sume su parte, y (4) que envíen sus subtotales a un procesador maestro para la suma final.'
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
            title: 'Análisis y Preguntas Clave',
            connectorLabel: 'responde a',
            definition: 'Análisis de conceptos y comparativas basadas en los principios de la arquitectura de sistemas computacionales.',
            children: [
                {
                    title: 'Relación: Paralelo, Concurrente, Distribuido y Arquitectura',
                    connectorLabel: 'sobre la',
                    definition: 'Estos conceptos están intrínsecamente ligados por la Arquitectura de Sistemas, que es la que habilita y define sus interacciones.',
                    children: [
                        {
                            title: 'Concurrencia (Concepto de Software)',
                            connectorLabel: 'la',
                            definition: 'Gestión de múltiples tareas que progresan en el tiempo. Puede ser en un solo núcleo (intercalado, `time-sharing`) o en varios.',
                            children: [
                                {
                                    title: 'Nivel de Abstracción',
                                    connectorLabel: 'es un',
                                    definition: 'Se enfoca en la estructura lógica del programa para manejar múltiples flujos de control de forma segura y eficiente.',
                                    children: [
                                        {
                                            title: 'Ejemplo de Concurrencia',
                                            definition: 'Un navegador web usa un hilo para la interfaz de usuario, otro para descargar una imagen y un tercero para ejecutar JavaScript. Están lógicamente activos "al mismo tiempo".'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Paralelismo (Concepto de Hardware)',
                            connectorLabel: 'el',
                            definition: 'Ejecución simultánea y real de múltiples tareas. Requiere una arquitectura con múltiples unidades de cómputo (cores, procesadores).',
                            children: [
                                {
                                    title: 'Requisito Físico',
                                    connectorLabel: 'es un',
                                    definition: 'Es la capacidad del hardware para ejecutar código concurrente de forma verdaderamente simultánea.',
                                    children: [
                                        {
                                            title: 'Ejemplo de Paralelismo',
                                            definition: 'En una CPU de 4 núcleos, los 3 hilos del navegador pueden ejecutarse realmente al mismo tiempo, cada uno en un núcleo diferente, acelerando el proceso.'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Distribución (Concepto de Sistema)',
                            connectorLabel: 'y la',
                            definition: 'Sistema de múltiples computadores autónomos (nodos) conectados por red. Es una forma de paralelismo a gran escala con memoria no compartida.',
                            children: [
                                {
                                    title: 'Modelo de Fallo',
                                    connectorLabel: 'con un',
                                    definition: 'Introduce la posibilidad de fallos parciales (un nodo se cae pero el resto del sistema sigue funcionando), algo que no ocurre en sistemas paralelos no distribuidos.',
                                    children: [
                                        {
                                            title: 'Ejemplo de Distribución',
                                            definition: 'Netflix se ejecuta en miles de servidores en AWS. Si un servidor falla, otros toman su carga. Es un sistema paralelo (muchos procesadores) y distribuido (múltiples máquinas).'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Relación Jerárquica',
                            connectorLabel: 'tienen una',
                            definition: 'La Arquitectura (el hardware) habilita el Paralelismo, que es usado por el Software para lograr Concurrencia. La Distribución es una arquitectura para paralelismo a gran escala.',
                            children: [
                                {
                                    title: 'Síntesis de la Relación',
                                    connectorLabel: 'en',
                                    definition: 'Se escribe código Concurrente que puede ejecutarse en Paralelo gracias a una Arquitectura multi-core. Si esa arquitectura se extiende a múltiples máquinas, se tiene un sistema Distribuido.',
                                    children: [
                                        {
                                            title: 'Ejemplo de la Relación Completa',
                                            definition: 'Un desarrollador usa hilos (concurrencia) para que su app procese datos más rápido. La app se ejecuta en un servidor con 16 núcleos (paralelismo). Para escalar, se despliegan 10 copias de la app en 10 servidores diferentes (distribución).'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    title: 'Adecuación: Automóviles, CRAY vs. Dell',
                    connectorLabel: 'sobre la',
                    definition: 'El ejemplo ilustra cómo la arquitectura (número de procesadores) y su capacidad (rendimiento) impactan la resolución de una tarea.',
                    children: [
                        {
                            title: 'Adecuación del Ejemplo',
                            connectorLabel: 'y su',
                            definition: 'Auto rápido = Supercomputador (CRAY). Auto lento = Servidor (Dell). Tarea (entregar paquetes) = Problema computacional. La decisión es: ¿una máquina muy potente o varias más baratas en paralelo?',
                            children: [
                                {
                                    title: 'Limitaciones de la Analogía',
                                    connectorLabel: 'con',
                                    definition: 'La analogía no captura la sobrecarga de comunicación (los autos no necesitan "sincronizarse") ni la dependencia de datos.',
                                    children: [
                                        {
                                            title: 'Ejemplo de Limitación de Analogía',
                                            definition: 'Si para entregar el paquete en C, primero se necesitara una firma del paquete B, la solución de dos autos ya no sería tan eficiente, pues el auto 2 tendría que esperar al auto 1.'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Comparativa (Valores de Referencia)',
                            connectorLabel: 'con una',
                            definition: 'Los costos y rendimientos sirven para ilustrar la escala y la curva de costo/rendimiento exponencial.',
                            children: [
                                {
                                    title: 'Supercomputador (HPE CRAY EX)',
                                    connectorLabel: 'un',
                                    definition: 'Costo: Millones a decenas de millones de $. Desempeño: PetaFLOPS (10^15) a ExaFLOPS (10^18). Son sistemas masivamente paralelos (MIMD/NORMA).',
                                    children: [
                                        {
                                            title: 'Ejemplo de Uso de CRAY',
                                            definition: 'Simulaciones nucleares, predicción climática a escala global, descubrimiento de fármacos. Problemas que requieren la máxima potencia de cálculo posible.'
                                        }
                                    ]
                                },
                                {
                                    title: 'Servidor de Alto Rendimiento (Dell PowerEdge)',
                                    connectorLabel: 'y un',
                                    definition: 'Costo: Decenas de miles de $. Desempeño: TeraFLOPS (10^12). Son sistemas MIMD/UMA o NUMA a menor escala.',
                                    children: [
                                        {
                                            title: 'Ejemplo de Uso de Dell Server',
                                            definition: 'Bases de datos corporativas, servidores web de alto tráfico, virtualización. Tareas intensivas pero a una escala mucho menor que un supercomputador.'
                                        }
                                    ]
                                },
                                {
                                    title: 'Conclusión de la Comparativa',
                                    connectorLabel: 'cuya',
                                    definition: 'Un CRAY puede costar 1000s de veces más, pero ofrecer millones de veces más rendimiento. La economía de escala favorece al supercomputador para problemas extremadamente grandes y paralelizables.',
                                    children: [
                                        {
                                            title: 'Ejemplo de Decisión Económica',
                                            definition: 'Para una universidad, es más rentable comprar un clúster de 100 servidores Dell para las tareas de muchos investigadores, que un solo CRAY que solo podría ser usado por un grupo a la vez.'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    title: 'Análisis de Costo y Desempeño de Configuraciones',
                    connectorLabel: 'y el',
                    definition: 'Análisis conceptual sobre qué configuración ofrece el mejor balance entre costo y desempeño, dependiendo de la naturaleza del problema (secuencial o paralelizable).',
                    children: [
                        {
                            title: '(i) Un Computador Grande y Muy Rápido',
                            connectorLabel: 'para',
                            definition: 'Desempeño: El más alto para tareas fuertemente secuenciales (limitadas por Ley de Amdahl). Costo: El más alto debido a la curva exponencial.',
                            children: [
                                {
                                    title: 'Escenario Ideal para (i)',
                                    connectorLabel: 'en un',
                                    definition: 'Una base de datos que procesa una transacción a la vez, donde la velocidad de un solo hilo es lo más importante.',
                                    children: [
                                        {
                                            title: 'Ejemplo de Uso de Computador Rápido',
                                            definition: 'Un sistema de trading de alta frecuencia que necesita ejecutar un algoritmo complejo en el menor tiempo posible (latencia mínima) en un solo hilo de ejecución.'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            title: '(ii) Dos Computadores Pequeños',
                            connectorLabel: 'para',
                            definition: 'Desempeño: Potencialmente mayor que (i) si la tarea es paralelizable. Costo: Generalmente el más bajo. Mejor costo/desempeño para tareas "vergonzosamente paralelas".',
                            children: [
                                {
                                    title: 'Escenario Ideal para (ii)',
                                    connectorLabel: 'en un',
                                    definition: 'Renderizar dos fotogramas de una película. Cada computador se encarga de uno, y el rendimiento total es la suma de ambos.',
                                    children: [
                                        {
                                            title: 'Ejemplo de Uso de Dos Computadores',
                                            definition: 'Un pequeño estudio de animación compra dos PCs potentes. Uno se dedica a modelar mientras el otro renderiza en segundo plano, duplicando la productividad.'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            title: '(iii) Dos VMs en el Computador Grande (i)',
                            connectorLabel: 'para',
                            definition: 'Desempeño: Menor que (i) por la sobrecarga de virtualización (hypervisor). Costo: El mismo alto costo que (i). Mal costo/desempeño.',
                            children: [
                                {
                                    title: 'Escenario de Uso para (iii)',
                                    connectorLabel: 'en un',
                                    definition: 'Principalmente para aislamiento y gestión, no para rendimiento. Por ejemplo, una VM para producción y otra para pruebas en el mismo hardware.',
                                    children: [
                                        {
                                            title: 'Ejemplo de Uso de VMs en Computador Grande',
                                            definition: 'Una empresa tiene un servidor muy potente. Una VM corre el servidor web y otra la base de datos. Se aíslan para seguridad, pero el rendimiento total es inferior al de la máquina nativa.'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            title: '(iv) Dos VMs en un PC de doble capacidad que uno de (ii)',
                            connectorLabel: 'y para',
                            definition: 'Desempeño: Similar a (ii), ligeramente menor por sobrecarga, pero con más flexibilidad. Costo: Probablemente más bajo que (ii) (un solo hardware). Buen balance y flexibilidad.',
                            children: [
                                {
                                    title: 'Escenario de Uso para (iv)',
                                    connectorLabel: 'en un',
                                    definition: 'Un entorno de desarrollo moderno. Una VM corre el backend, otra el frontend. Ofrece aislamiento y portabilidad a un costo razonable.',
                                    children: [
                                        {
                                            title: 'Ejemplo de Uso de VMs en PC Potente',
                                            definition: 'Un desarrollador usa una máquina con muchos núcleos y RAM. Con virtualización, puede simular un clúster de varias máquinas (ej. un nodo master y dos workers) todo en su PC local.'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Conclusión Final del Análisis',
                            connectorLabel: 'con una',
                            definition: 'No hay una respuesta única. Para rendimiento secuencial bruto: (i). Para mejor costo/desempeño en tareas paralelizables: (ii). Para flexibilidad y consolidación a buen costo: (iv). La opción (iii) es para gestión, no para optimizar rendimiento.',
                            children: [
                                {
                                    title: 'El Factor Decisivo: La Carga de Trabajo',
                                    connectorLabel: 'siendo',
                                    definition: 'La naturaleza del problema (paralelizable vs. secuencial) es el factor más importante para elegir la arquitectura correcta.',
                                    children: [
                                        {
                                            title: 'Ejemplo de Decisión Final',
                                            definition: 'Una startup de IA necesita entrenar modelos (paralelizable), por lo que elige la opción (ii) o (iv) usando GPUs. Un banco necesita procesar transacciones (secuencial), por lo que elige la (i) con la CPU más rápida posible.'
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
    { term: 'Eficiencia Paralela', definition: 'Mide la fracción de tiempo que los procesadores se usan de forma útil. Se calcula como Aceleración / (Número de procesadores).' },
    { term: 'Ley de Amdahl', definition: 'Principio que establece que la máxima aceleración de un programa está limitada por su porción de código secuencial.'},
    { term: 'Dependencia de Datos', definition: 'Una situación donde una instrucción no puede ejecutarse hasta que otra instrucción anterior haya completado y producido el dato que necesita.' },
    { term: 'Clasificación de Flynn', definition: 'Una taxonomía para arquitecturas paralelas basada en el número de flujos de instrucciones y de datos (SISD, SIMD, MISD, MIMD).' },
    { term: 'SISD (Single Instruction, Single Data)', definition: 'El modelo secuencial tradicional con un solo procesador ejecutando un solo flujo de instrucciones sobre un solo flujo de datos.' },
    { term: 'SIMD (Single Instruction, Multiple Data)', definition: 'Una única instrucción es ejecutada simultáneamente por múltiples procesadores sobre diferentes conjuntos de datos. Ideal para paralelismo de datos.' },
    { term: 'MISD (Multiple Instruction, Single Data)', definition: 'Múltiples instrucciones operan sobre un único flujo de datos, comúnmente implementado como pipelines o tuberías.' },
    { term: 'MIMD (Multiple Instruction, Multiple Data)', definition: 'Múltiples procesadores ejecutan diferentes instrucciones sobre diferentes datos de forma asíncrona. El modelo más flexible y general.' },
    { term: 'SPMD (Single Program, Multiple Data)', definition: 'Un estilo de programación MIMD donde cada procesador ejecuta el mismo programa, pero de forma asíncrona y tomando diferentes caminos lógicos.' },
    { term: 'Sincronización de Barrera', definition: 'Un punto de sincronización global en programas síncronos donde todos los procesadores deben esperar antes de continuar.' },
    { term: 'Granularidad', definition: 'El tamaño relativo de las tareas computacionales en un programa paralelo. Puede ser fina (pequeña), mediana o grande (gruesa).' },
    { term: 'Procesos Cooperativos', definition: 'Un modelo de grano grande donde procesos secuenciales se ejecutan en diferentes procesadores y se sincronizan explícitamente (ej. con semáforos).' },
    { term: 'UMA (Uniform Memory Access)', definition: 'Arquitectura con una memoria físicamente compartida y centralizada. El tiempo de acceso es igual para todos los procesadores.' },
    { term: 'NUMA (Non-Uniform Memory Access)', definition: 'Arquitectura con memoria físicamente distribuida pero lógicamente compartida. El acceso a la memoria local es más rápido que a la remota.' },
    { term: 'NORMA (No Remote Memory Access)', definition: 'Arquitectura con memoria distribuida donde cada procesador solo accede a su memoria privada. La comunicación es por paso de mensajes.' },
    { term: 'Coherencia de Caché', definition: 'El problema de mantener la consistencia de los datos almacenados en las cachés locales de múltiples procesadores en un sistema de memoria compartida.' }
];
