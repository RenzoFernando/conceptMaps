var mindMapData = {
    title: 'Códigos de Ética en Ingeniería',
    definition: 'Los principios éticos que rigen la profesión, comparando el código global de la IEEE con la adaptación específica de la Facultad de Ingeniería de la Universidad Icesi, y una perspectiva análoga sobre la responsabilidad arquitectónica.',
    children: [
        {
            title: 'Código de Ética IEEE',
            connectorLabel: 'fuente global',
            definition: 'Estándar ético del Instituto de Ingenieros Eléctricos y Electrónicos (Institute of Electrical and Electronics Engineers), la mayor organización profesional técnica del mundo.',
            children: [
                {
                    title: 'Preámbulo y Compromiso General',
                    connectorLabel: 'inicia con un',
                    definition: '"Nosotros, los miembros de la IEEE... nos comprometemos a la más alta conducta ética y profesional". Reconocimiento del impacto de la tecnología y aceptación de una obligación personal.',
                    children: [
                        {
                            title: 'I. Integridad y Conducta Profesional', connectorLabel: 'dividido en', definition: 'El compromiso central con los más altos estándares de integridad, comportamiento responsable y conducta ética en todas las actividades profesionales.',
                            children: [
                                { title: '1. Bienestar Público', connectorLabel: 'cubre', definition: 'Sostener como primordial la seguridad, salud y bienestar del público, esforzarse por cumplir con el diseño ético y prácticas de desarrollo sostenible, proteger la privacidad y revelar prontamente factores de riesgo.',
                                    children: [
                                        {
                                            title: 'Desarrollo Sostenible', connectorLabel: 'incluyendo', definition: 'Prácticas que satisfacen las necesidades del presente sin comprometer la capacidad de las generaciones futuras.',
                                            children: [
                                                {
                                                    title: 'Diseño de Baterías',
                                                    definition: 'Un ingeniero de IEEE, al diseñar una nueva batería para smartphones, elige materiales que son menos tóxicos y más fáciles de reciclar, aunque aumente el costo de producción en un 2%, cumpliendo con el principio de sostenibilidad.'
                                                }
                                            ]
                                        },
                                        {
                                            title: 'Privacidad de Otros', connectorLabel: 'incluyendo', definition: 'La obligación de diseñar sistemas que respeten y protejan la información personal de los usuarios.',
                                            children: [
                                                {
                                                    title: 'App de Red Social',
                                                    definition: 'Un equipo de ingenieros se niega a implementar una función que recopilaría datos de localización de los usuarios sin su consentimiento explícito, protegiendo así su privacidad como dicta el código.'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                { title: '2. Comprensión de la Tecnología', connectorLabel: 'cubre', definition: 'Mejorar la comprensión por parte de los individuos y la sociedad de las capacidades y las implicaciones sociales de las tecnologías convencionales y emergentes, incluidos los sistemas inteligentes.',
                                    children: [
                                        {
                                            title: 'Divulgación Tecnológica', connectorLabel: 'mediante la', definition: 'Responsabilidad de educar al público sobre cómo funcionan las tecnologías y cuáles son sus verdaderos alcances y riesgos.',
                                            children: [
                                                {
                                                    title: 'Charla sobre IA Generativa',
                                                    definition: 'Una ingeniera experta en IA ofrece charlas gratuitas en colegios para explicar cómo funcionan modelos como GPT, desmitificando la "magia" y advirtiendo sobre los riesgos de plagio y desinformación.'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                { title: '3. Conflictos de Interés', connectorLabel: 'cubre', definition: 'Evitar conflictos de interés reales o percibidos siempre que sea posible, y revelarlos a las partes afectadas cuando existan.',
                                    children: [
                                        {
                                            title: 'Alcance del Principio', connectorLabel: 'cuyo', definition: 'Cubre tanto los conflictos "reales" (un beneficio financiero directo) como los "percibidos" (situaciones que podrían llevar a otros a cuestionar la objetividad).',
                                            children: [
                                                {
                                                    title: 'Recomendación de Proveedor',
                                                    definition: 'Un ingeniero consultor es contratado para recomendar un proveedor de software. Su cuñado es el dueño de una de las empresas candidatas. Éticamente, debe revelar esta relación a su cliente antes de hacer cualquier recomendación, incluso si cree que puede ser objetivo.'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                { title: '4. Conducta Lícita y Soborno', connectorLabel: 'cubre', definition: 'Evitar la conducta ilegal en actividades profesionales y rechazar el soborno en todas sus formas.',
                                    children: [
                                        {
                                            title: 'Tolerancia Cero', connectorLabel: 'con', definition: 'El soborno y la ilegalidad son inaceptables sin excepción, ya que corrompen la toma de decisiones técnicas.',
                                            children: [
                                                {
                                                    title: 'Aprobación de Permisos',
                                                    definition: 'Un funcionario público le insinúa a un ingeniero que "acelerará" la aprobación de un permiso de construcción a cambio de un "regalo". El ingeniero debe rechazarlo y reportar el intento de soborno.'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                { title: '5. Crítica Honesta y Errores', connectorLabel: 'cubre', definition: 'Buscar, aceptar y ofrecer críticas honestas del trabajo técnico, reconocer y corregir errores, ser honesto y realista en las afirmaciones o estimaciones basadas en los datos disponibles, y acreditar adecuadamente las contribuciones de otros.',
                                    children: [
                                        {
                                            title: 'Revisión de Código (Code Review)', connectorLabel: 'a través de la', definition: 'Práctica de someter el código de un autor a la revisión de otros para encontrar errores y mejorar la calidad.',
                                            children: [
                                                {
                                                    title: 'Detección de Bug Crítico',
                                                    definition: 'Durante una revisión de código, un ingeniero senior detecta una vulnerabilidad de seguridad en el código de un colega junior. En lugar de culparlo, le ofrece una crítica constructiva, le explica el error y trabajan juntos para corregirlo antes de que llegue a producción.'
                                                }
                                            ]
                                        },
                                        {
                                            title: 'Acreditación de Contribuciones', connectorLabel: 'a través de la', definition: 'La obligación de dar crédito a quien lo merece, evitando el plagio o la apropiación de ideas ajenas.',
                                            children: [
                                                {
                                                    title: 'Publicación de un Paper',
                                                    definition: 'Un investigador principal, al publicar un artículo, se asegura de que todos los estudiantes y asistentes de laboratorio que contribuyeron, por pequeña que sea su aportación, aparezcan como coautores.'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                { title: '6. Competencia Técnica', connectorLabel: 'cubre', definition: 'Mantener y mejorar nuestra competencia técnica y emprender tareas tecnológicas para otros solo si se está calificado por formación o experiencia, o después de la divulgación completa de las limitaciones pertinentes.',
                                    children: [
                                        {
                                            title: 'Aprendizaje Continuo', connectorLabel: 'fomentando el', definition: 'La tecnología avanza rápidamente; la competencia de hoy es la obsolescencia de mañana. Es un deber mantenerse actualizado.',
                                            children: [
                                                {
                                                    title: 'Certificación en la Nube',
                                                    definition: 'Una ingeniera de sistemas con 10 años de experiencia en servidores locales decide tomar y pagar una certificación en AWS para mantenerse relevante y competente en las nuevas arquitecturas cloud.'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'II. Respeto y Trato Justo', connectorLabel: 'dividido en', definition: 'El compromiso de tratar a todas las personas de manera justa y con respeto, fomentando un entorno libre de discriminación, acoso y daño.',
                            children: [
                                { title: '7. No Discriminación', connectorLabel: 'cubre', definition: 'Tratar a todas las personas de manera justa y con respeto, y no incurrir en discriminación basada en características como raza, religión, género, discapacidad, edad, origen nacional, orientación sexual, identidad de género o expresión de género.',
                                    children: [
                                        {
                                            title: 'Inclusión Activa', connectorLabel: 'promoviendo la', definition: 'No es solo evitar la discriminación, sino fomentar activamente la diversidad y la inclusión en los equipos de trabajo y en el diseño de tecnologías.',
                                            children: [
                                                {
                                                    title: 'Proceso de Contratación',
                                                    definition: 'Un gerente de ingeniería de una multinacional se asegura de que su proceso de selección de personal utilice entrevistas estructuradas y paneles de entrevistadores diversos para mitigar sesgos inconscientes y contratar al mejor talento sin importar su origen.'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                { title: '8. No al Acoso', connectorLabel: 'cubre', definition: 'No participar en ningún tipo de acoso, incluido el acoso sexual o el comportamiento de intimidación (bullying).',
                                    children: [
                                        {
                                            title: 'Cultura de Trabajo Segura', connectorLabel: 'creando una', definition: 'Responsabilidad activa de los líderes y miembros del equipo para detener y reportar cualquier comportamiento intimidatorio o inapropiado.',
                                            children: [
                                                {
                                                    title: 'Intervención en Reunión',
                                                    definition: 'Un líder de equipo nota que un miembro del equipo interrumpe constantemente y menosprecia las ideas de una colega. Después de la reunión, habla en privado con el individuo sobre su comportamiento inaceptable y lo reporta a RRHH según las políticas de la empresa.'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                { title: '9. Evitar Daños a Terceros', connectorLabel: 'cubre', definition: 'Evitar dañar a otros, su propiedad, reputación o empleo mediante acciones falsas o maliciosas, rumores o cualquier otro abuso verbal o físico.',
                                    children: [
                                        {
                                            title: 'Competencia Profesional Leal', connectorLabel: 'practicando una', definition: 'La competencia en el ámbito profesional debe basarse en el mérito técnico y no en la difamación del trabajo de otros.',
                                            children: [
                                                {
                                                    title: 'Proceso de Licitación',
                                                    definition: 'Una empresa de ingeniería compite por un contrato. En lugar de difundir rumores falsos sobre la incompetencia de su competidor, se enfoca en presentar una propuesta técnica superior y más innovadora.'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'III. Responsabilidad Colectiva', connectorLabel: 'dividido en', definition: 'El compromiso de no solo adherirse personalmente al código, sino también de fomentar su cumplimiento entre colegas y en el entorno laboral.',
                            children: [
                                { title: '10. Apoyo a Colegas', connectorLabel: 'cubre', definition: 'Apoyar a los colegas y compañeros de trabajo en el seguimiento de este código de ética, esforzarse por garantizar que se respete el código y no tomar represalias contra las personas que denuncien una violación.',
                                    children: [
                                        {
                                            title: 'Protección al Denunciante', connectorLabel: 'con énfasis en la', definition: 'Crea un ambiente seguro donde los individuos pueden reportar violaciones éticas sin temor a ser despedidos o castigados (whistleblower protection).',
                                            children: [
                                                {
                                                    title: 'Reporte de Falsificación de Datos',
                                                    definition: 'Un ingeniero junior nota que su superior está alterando los resultados de las pruebas de emisiones de un motor. Lo reporta a través del canal ético anónimo de la empresa. El código protege al junior de ser despedido por su superior como represalia.'
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
            title: 'Código de Ética U. Icesi',
            connectorLabel: 'adaptación local',
            definition: 'Una versión del código de la IEEE adaptada y contextualizada para los futuros ingenieros de la Universidad Icesi, con un enfoque en la responsabilidad personal y el desarrollo profesional.',
            children: [
                {
                    title: 'Preámbulo y Compromiso Icesi',
                    connectorLabel: 'inicia con un',
                    definition: '' +
                        '"Nosotros, futuros ingenieros egresados de la Universidad Icesi... nos comprometemos a ejercer nuestra profesión con ética y conducta profesional intachable".',
                    children: [
                        {
                            title: 'Principios Adaptados', connectorLabel: 'conteniendo', definition: 'Los 10 puntos del código de Icesi, que reflejan los principios de la IEEE pero con un lenguaje y enfoque particular.',
                            children: [
                                { title: '1. Responsabilidad en Decisiones', connectorLabel: 'como el', definition: 'Aceptar nuestra responsabilidad en la toma de decisiones de ingeniería, que sean congruentes con la seguridad, la salud y el bienestar de la comunidad y revelar con prontitud factores que puedan poner en peligro a la comunidad o al medio ambiente.',
                                    children: [
                                        {
                                            title: 'Énfasis en la Congruencia', connectorLabel: 'con', definition: 'La palabra "congruente" implica una alineación activa y consciente entre la decisión técnica y el bienestar social.',
                                            children: [
                                                {
                                                    title: 'Diseño de App de Entregas',
                                                    definition: 'Un ingeniero de Icesi, al diseñar el algoritmo de rutas para una app, se asegura de que no envíe sistemáticamente a los repartidores por zonas peligrosas para ahorrar tiempo, manteniendo la congruencia con su seguridad.'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                { title: '2. Conflictos de Interés', connectorLabel: 'como el', definition: 'Evitar conflictos de interés reales o percibidos, siempre que sea posible y a darlos a conocer a las partes afectadas cuando existan.',
                                    children: [
                                        {
                                            title: 'Aplicación Directa', connectorLabel: 'para su', definition: 'La formación en Icesi enfatiza la importancia de la integridad en el contexto colombiano, donde la transparencia es crucial para la confianza pública.',
                                            children: [
                                                {
                                                    title: 'Licitación Pública',
                                                    definition: 'Un ingeniero de Icesi que trabaja para el gobierno forma parte del comité que evalúa una licitación para una obra pública. Se da cuenta de que una de las empresas licitantes es de un amigo cercano. Inmediatamente, se declara impedido y se retira del comité evaluador.'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                { title: '3. Honestidad y Realismo', connectorLabel: 'como el', definition: 'Ser honestos y realistas al hacer afirmaciones o estimaciones con base en los datos disponibles.',
                                    children: [
                                        {
                                            title: 'Estimación de Proyectos', connectorLabel: 'aplicado a la', definition: 'Evitar la práctica de dar estimaciones de tiempo demasiado optimistas para ganar un proyecto, sabiendo que son irreales.',
                                            children: [
                                                {
                                                    title: 'Presentación a Cliente',
                                                    definition: 'Un equipo de ingenieros de Icesi estima que un proyecto tomará 6 meses. A pesar de la presión del cliente por tenerlo en 4, presentan la estimación realista de 6 meses, explicando los riesgos de acelerar el proceso, como la baja calidad y la deuda técnica.'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                { title: '4. Rechazo al Soborno', connectorLabel: 'como el', definition: 'Rechazar el soborno en todas sus formas.',
                                    children: [
                                        {
                                            title: 'Postura Inflexible', connectorLabel: 'con una', definition: 'Este principio es absoluto y no admite matices, siendo un pilar fundamental de la integridad profesional.',
                                            children: [
                                                {
                                                    title: 'Inspección de Obra',
                                                    definition: 'Un contratista le ofrece a un ingeniero de Icesi, supervisor de una obra, "una bonificación" para que apruebe el uso de materiales de menor calidad. El ingeniero rechaza la oferta y documenta el intento de soborno en su informe oficial.'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                { title: '5. Comprensión de la Tecnología', connectorLabel: 'como el', definition: 'Mejorar la comprensión de la tecnología y métodos que utilizamos, su aplicación adecuada y sus posibles consecuencias.',
                                    children: [
                                        {
                                            title: 'Dominio y Consecuencias', connectorLabel: 'implica', definition: 'No basta con saber usar una herramienta, hay que entender sus implicaciones. Es la diferencia entre un técnico y un ingeniero.',
                                            children: [
                                                {
                                                    title: 'Algoritmo de Machine Learning',
                                                    definition: 'Un ingeniero de Icesi no solo implementa un algoritmo de ML para aprobación de créditos, sino que también estudia y documenta sus posibles sesgos, y explica al banco las consecuencias éticas de automatizar decisiones que afectan la vida de las personas.'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                { title: '6. Competencia Técnica', connectorLabel: 'como el', definition: 'Mantener y mejorar nuestra competencia técnica y aceptar trabajos en nombre de otros sólo si estamos calificados para realizarlo, bien sea por adiestramiento o experiencia, o después de exponer completamente las limitaciones pertinentes.',
                                    children: [
                                        {
                                            title: 'Transparencia sobre Habilidades', connectorLabel: 'requiriendo', definition: 'La honestidad sobre lo que uno no sabe es tan importante como la competencia en lo que sí sabe.',
                                            children: [
                                                {
                                                    title: 'Proyecto de Blockchain',
                                                    definition: 'A un ingeniero de Icesi le ofrecen un proyecto lucrativo sobre blockchain, una tecnología en la que no tiene experiencia. Éticamente, informa al cliente de su limitación y le propone dos opciones: rechazar el proyecto o aceptar con un plan de capacitación intensiva y la supervisión de un experto externo.'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                { title: '7. Crítica Honesta', connectorLabel: 'como el', definition: 'Buscar, aceptar y ofrecer críticas honestas sobre el trabajo en nuestra disciplina, aceptar y corregir los errores y reconocer adecuadamente las contribuciones de otros.',
                                    children: [
                                        {
                                            title: 'Cultura de Mejora Continua', connectorLabel: 'fomentando una', definition: 'La crítica no se ve como un ataque personal, sino como una herramienta esencial para el crecimiento profesional y la calidad del trabajo.',
                                            children: [
                                                {
                                                    title: 'Revisión de Diseño entre Pares',
                                                    definition: 'Antes de finalizar el diseño de una estructura, un ingeniero de Icesi pide a sus colegas que lo revisen críticamente. Agradece que le señalen un punto débil en su diseño, lo corrige y reconoce su contribución en la documentación final.'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                { title: '8. Trato Equitativo', connectorLabel: 'como el', definition: 'Tratar equitativamente a todas las personas independientemente de su raza, religión, género, capacidades, edad, nación u orientación sexual.',
                                    children: [
                                        {
                                            title: 'Adaptación de Términos', connectorLabel: 'con una', definition: 'Utiliza el término "capacidades" en lugar de "discapacidad", alineándose con un lenguaje más inclusivo.',
                                            children: [
                                                {
                                                    title: 'Diseño de Interfaz de Usuario',
                                                    definition: 'Un equipo de desarrollo de software en Icesi incluye desde el inicio a personas con diferentes capacidades (visuales, motoras) en las pruebas de usabilidad de su nueva aplicación, asegurando que sea accesible para todos.'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                { title: '9. Evitar Daños a Terceros', connectorLabel: 'como el', definition: 'Evitar dañar a otros, sus propiedades, su reputación o puesto de trabajo mediante acciones falsas o maliciosas.',
                                    children: [
                                        {
                                            title: 'Responsabilidad sobre la Palabra', connectorLabel: 'con', definition: 'Este principio va más allá de las acciones físicas, incluyendo la responsabilidad sobre lo que se dice o escribe sobre otros.',
                                            children: [
                                                {
                                                    title: 'Evaluación de Desempeño',
                                                    definition: 'Un gerente de ingeniería, al evaluar a un empleado con el que tuvo un desacuerdo personal, se enfoca estrictamente en métricas objetivas y verificables, evitando que su opinión personal dañe injustamente la reputación y carrera de su colega.'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                { title: '10. Desarrollo Profesional y Mentoría', connectorLabel: 'como el', definition: 'Ayudar a nuestros colegas y compañeros de trabajo en su desarrollo profesional, motivarlos para que cumplan con este código de ética.',
                                    children: [
                                        {
                                            title: 'Rol de Mentor', connectorLabel: 'asumiendo un', definition: 'A diferencia del código IEEE que se enfoca en "apoyar", el de Icesi promueve activamente la "ayuda" y "motivación", un rol más cercano a la mentoría.',
                                            children: [
                                                {
                                                    title: 'Apoyo a un Pasante',
                                                    definition: 'Una ingeniera egresada de Icesi dedica una hora a la semana para revisar el progreso de un pasante en su equipo, no solo en sus tareas, sino también aconsejándolo sobre cursos y certificaciones para avanzar en su carrera.'
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
            title: 'Síntesis y Puntos Clave',
            connectorLabel: 'convergiendo en una',
            definition: 'Análisis de las similitudes, diferencias y la relación sinérgica entre el estándar global de la IEEE y su adaptación local por la Universidad Icesi.',
            children: [
                {
                    title: 'Diferencias Notables',
                    connectorLabel: 'existen',
                    definition: 'Aunque basados en los mismos principios, los matices en el lenguaje revelan diferentes énfasis culturales y formativos.',
                    children: [
                        {
                            title: 'Énfasis en IEEE', connectorLabel: 'en', definition: 'Tiende a usar un lenguaje más formal y legalista, enfocado en la protección, la revelación de información y la prohibición de conductas.',
                            children: [
                                { title: 'Punto 10: Protección al Denunciante', connectorLabel: 'reflejado en', definition: 'El código se enfoca en la protección contra represalias, un concepto legal para crear un ambiente seguro para reportar faltas.',
                                    children: [
                                        {
                                            title: 'Enfoque Reactivo y Protector', connectorLabel: 'siendo un', definition: 'La prioridad es proteger a quien reporta una falta ya cometida.',
                                            children: [
                                                {
                                                    title: 'Canal de Denuncias Anónimo',
                                                    definition: 'Una gran corporación implementa un sistema de denuncias anónimas gestionado por un tercero, un mecanismo que cumple directamente con el espíritu protector del código IEEE.'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Énfasis en Icesi', connectorLabel: 'un', definition: 'Utiliza en lenguaje más proactivo y formativo, centrado en la responsabilidad personal, la ayuda mutua y la motivación.',
                            children: [
                                { title: 'Punto 10: Mentoría y Desarrollo', connectorLabel: 'reflejado en', definition: 'El código habla de "ayudar en el desarrollo profesional" y "motivar", lo cual implica una relación de mentoría y crecimiento conjunto.',
                                    children: [
                                        {
                                            title: 'Enfoque Proactivo y Formativo', connectorLabel: 'siendo un', definition: 'La prioridad es construir una cultura ética a través de la formación y el apoyo mutuo para prevenir faltas.',
                                            children: [
                                                {
                                                    title: 'Programa de Mentores',
                                                    definition: 'Una empresa con muchos egresados de Icesi crea un programa donde los ingenieros senior son mentores de los junior, no solo en lo técnico, sino discutiendo dilemas éticos que surgen en los proyectos.'
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
                    title: 'Principios Universales Compartidos',
                    connectorLabel: 'existen',
                    definition: 'El núcleo ético es idéntico en ambos códigos, demostrando la universalidad de ciertos valores en la ingeniería.',
                    children: [
                        {
                            title: 'Rechazo al Soborno', connectorLabel: 'como el', definition: 'Ambos códigos (IEEE #4, Icesi #4) tienen una postura de tolerancia cero hacia el soborno en todas sus formas, reconociéndolo como un acto fundamentalmente corruptor.',
                            children: [
                                { title: 'Integridad Innegociable', connectorLabel: 'siendo una', definition: 'Este es un pilar no negociable de la profesión, ya que el soborno socava la confianza pública y la toma de decisiones basada en méritos técnicos.',
                                    children: [
                                        {
                                            title: 'Decisión de Compra de Equipos', connectorLabel: 'en la', definition: 'Un proveedor ofrece a un ingeniero (sea de IEEE o Icesi) unas vacaciones pagadas si elige sus equipos, que son más caros y de menor calidad. El ingeniero debe rechazar la oferta y reportar al proveedor, basando su decisión únicamente en las especificaciones técnicas y el costo-beneficio para su empresa.'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Honestidad y Realismo', connectorLabel: 'como la', definition: 'Ambos códigos (IEEE #5, Icesi #3) exigen ser honestos y realistas en afirmaciones y estimaciones, combatiendo las promesas exageradas.',
                            children: [
                                { title: 'Confianza Profesional', connectorLabel: 'construyendo', definition: 'La confianza con clientes y la sociedad se basa en la certeza de que las afirmaciones de un ingeniero están respaldadas por datos y un análisis riguroso.',
                                    children: [
                                        {
                                            title: 'Lanzamiento de un Producto', connectorLabel: 'durante el', definition: 'El equipo de marketing quiere anunciar que una nueva batería dura "hasta 3 días". Las pruebas del ingeniero muestran que la duración promedio es de 30 horas. El ingeniero insiste en que la publicidad debe reflejar los datos realistas para no engañar a los consumidores.'
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
            title: 'Arquitectura Minimalista y Responsabilidad',
            connectorLabel: 'perspectiva análoga',
            definition: 'Un enfoque extraído de la arquitectura civil y de software que argumenta que la responsabilidad ética fundamental recae en el arquitecto, quien debe tener la autoridad para ser considerado responsable de los fallos del sistema.',
            children: [
                {
                    title: 'Principio de Rendición de Cuentas (Accountability)',
                    connectorLabel: 'basado en el',
                    definition: 'El arquitecto debe ser considerado responsable del éxito o fracaso de un diseño, tal como ocurre con los puentes o edificios. Esta responsabilidad no puede ser eludida.',
                    children: [
                        {
                            title: 'Fallas Emblemáticas como Lección',
                            connectorLabel: 'ilustrado por',
                            definition: 'Casos como el colapso del puente Tacoma Narrows, donde los arquitectos fueron identificados, en contraste con fallos de software donde a menudo no se nombra al arquitecto jefe.',
                            children: [
                                {
                                    title: 'Diferencia de Consecuencias',
                                    connectorLabel: 'implica una',
                                    definition: 'Contraste entre la alta visibilidad de responsables en fallos de ingeniería civil y el anonimato frecuente en fallos de software.',
                                    children: [
                                        {
                                            title: 'Impacto en la Profesión',
                                            connectorLabel: 'debilita el',
                                            definition: 'La falta de rendición de cuentas visible debilita la percepción de la ingeniería de software y la obligación ética en comparación con la ingeniería civil.',
                                            children: [
                                                {
                                                    title: 'Fallo del IRS vs. Tacoma Narrows',
                                                    definition: 'Mientras los ingenieros del puente Tacoma fueron identificados, el arquitecto jefe del fallo de $4 mil millones del IRS permaneció anónimo, mostrando una disparidad en la responsabilidad profesional.'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Responsabilidad en Diseño de Producto',
                            connectorLabel: 'abarca también',
                            definition: 'La rendición de cuentas no se limita a fallos catastróficos, sino también a decisiones de diseño que afectan la usabilidad y la experiencia del usuario final.',
                            children: [
                                {
                                    title: 'Trade-offs de Usabilidad vs. Features',
                                    connectorLabel: 'gestionando los',
                                    definition: 'El arquitecto es responsable de balancear la adición de nuevas características con el impacto que estas puedan tener en la facilidad de uso del producto.',
                                    children: [
                                        {
                                            title: 'Complejidad Innecesaria',
                                            connectorLabel: 'evitando la',
                                            definition: 'La "fatiga de características" (feature fatigue) ocurre cuando un producto tiene tantas opciones que se vuelve confuso y difícil de usar, una falla de diseño arquitectónico.',
                                            children: [
                                                {
                                                    title: 'BMW iDrive y Valet Parking',
                                                    definition: 'El sistema iDrive de BMW era tan complejo que requería un manual de instrucciones especial para que los aparcacoches pudieran simplemente estacionar el vehículo, un claro ejemplo de falla de usabilidad.'
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
                    title: 'Autoridad antes que Responsabilidad',
                    connectorLabel: 'requiere',
                    definition: 'Para que un arquitecto sea verdaderamente responsable, primero debe tener autoridad real sobre las decisiones de diseño. No se puede responsabilizar a alguien que solo actúa como consultor.',
                    children: [
                        {
                            title: 'La Falsa Separación de Roles',
                            connectorLabel: 'criticando',
                            definition: 'La práctica de separar la definición de requisitos (analistas de negocio) de la arquitectura es ineficiente y diluye la responsabilidad.',
                            children: [
                                {
                                    title: 'El Arquitecto como Puente',
                                    connectorLabel: 'debe ser',
                                    definition: 'La persona que mejor entiende la interacción entre lo que es posible técnicamente, su costo, y lo que el negocio realmente necesita.',
                                    children: [
                                        {
                                            title: 'Conocimiento de "Costos Ocultos"',
                                            connectorLabel: 'posee el',
                                            definition: 'Un analista de negocio no tiene por qué saber que un requisito aparentemente simple puede multiplicar por diez el costo de desarrollo; el arquitecto sí.',
                                            children: [
                                                {
                                                    title: 'Requisito de "Tiempo Real"',
                                                    definition: 'Un cliente pide una actualización "en tiempo real". El arquitecto debe explicar que eso implica una arquitectura de streaming costosa, y negociar si una actualización cada 5 segundos (mucho más barata) es suficiente.'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'El Arquitecto como Líder de Definición',
                            connectorLabel: 'actuando como',
                            definition: 'En lugar de recibir una lista de requisitos, el arquitecto debe liderar la definición del producto, negociando activamente los intercambios (trade-offs).',
                            children: [
                                {
                                    title: 'Gestión de Trade-offs',
                                    connectorLabel: 'para la',
                                    definition: 'La arquitectura guía las decisiones al entender dónde los costos se disparan, las funcionalidades entran en conflicto o los atributos de calidad se ven comprometidos.',
                                    children: [
                                        {
                                            title: 'Balance de Prioridades',
                                            connectorLabel: 'manteniendo un',
                                            definition: 'El arquitecto negocia entre las necesidades del usuario (usabilidad), del negocio (costo) y del desarrollo (complejidad) para encontrar una solución óptima.',
                                            children: [
                                                {
                                                    title: 'Decisión de Costo vs. Usabilidad',
                                                    definition: 'Un analista de negocio pide una función compleja. El arquitecto explica que esa función aumentará el costo en un 50% y propone una alternativa más simple que cumple el 80% del objetivo a una fracción del costo.'
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
                    title: 'El Arquitecto como "Autoridad de Diseño Final"',
                    connectorLabel: 'redefiniendo el rol',
                    definition: 'Este término no debe significar ser un "gurú" al que se le pide consejo, sino tener la autoridad ejecutiva para tomar y hacer cumplir las decisiones de diseño cruciales.',
                    children: [
                        {
                            title: 'Claridad en la Responsabilidad',
                            connectorLabel: 'para lograr',
                            definition: 'Cuando el arquitecto tiene autoridad clara, también queda claro cuándo NO es responsable, por ejemplo, si sus decisiones son anuladas por una autoridad superior.',
                            children: [
                                {
                                    title: 'Paralelismo con la Ética',
                                    connectorLabel: 'con un',
                                    definition: 'Asumir la autoridad y la consiguiente responsabilidad es un acto de integridad profesional, alineado con los principios éticos de proteger el bienestar público.',
                                    children: [
                                        {
                                            title: 'Responsabilidad Profesional Explícita',
                                            connectorLabel: 'con una',
                                            definition: 'Al tener autoridad, el arquitecto asume una responsabilidad clara, pero también se delimita su culpa cuando sus decisiones son anuladas o comprometidas por factores externos.',
                                            children: [
                                                {
                                                    title: 'Anulación de Decisión Arquitectónica',
                                                    definition: 'Un arquitecto recomienda una base de datos escalable, pero la gerencia, para reducir costos, impone una opción más barata. Si el sistema falla por falta de escalabilidad, la responsabilidad documentada del arquitecto es limitada.'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Límites de la Responsabilidad',
                            connectorLabel: 'estableciendo',
                            definition: 'La autoridad define los límites. El arquitecto no es responsable si su diseño es modificado sin su consentimiento o si un componente de terceros no cumple lo prometido.',
                            children: [
                                {
                                    title: 'El Caso del Puente Tacoma Narrows',
                                    connectorLabel: 'como en',
                                    definition: 'El diseñador original, Clark Eldridge, solo asumió parte de la responsabilidad porque su diseño fue modificado por otro ingeniero para reducir costos, decisión que él no controló.',
                                    children: [
                                        {
                                            title: 'Documentación de Decisiones',
                                            connectorLabel: 'requiere la',
                                            definition: 'Es crucial para un arquitecto documentar sus recomendaciones y las decisiones finales tomadas por la gerencia, especialmente cuando estas contradicen su criterio técnico.',
                                            children: [
                                                {
                                                    title: 'Correo de Advertencia de Riesgos',
                                                    definition: 'El arquitecto envía un correo formal a la gerencia: "Confirmo la decisión de usar la base de datos X por razones de presupuesto, pero reitero que presenta un riesgo de escalabilidad a largo plazo como se discutió".'
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
    { term: 'IEEE', definition: 'Siglas de "Institute of Electrical and Electronics Engineers" (Instituto de Ingenieros Eléctricos y Electrónicos). Es la mayor asociación profesional técnica del mundo, dedicada al avance de la tecnología para el beneficio de la humanidad.' },
    { term: 'Conflicto de Interés Percibido', definition: 'Una situación en la que una persona razonable podría pensar que el juicio profesional de un individuo podría estar comprometido, incluso si no existe un conflicto real o un acto indebido.' },
    { term: 'Represalias (Retaliate)', definition: 'Tomar una acción dañina (como despedir, degradar o acosar) contra una persona porque ha denunciado una irregularidad o una violación ética.' },
];