# Prompt: Instrucciones para la Creación de un Mapa Mental en Formato data.js

Hola, necesito que crees un archivo `data.js` para un mapa mental basado en el documento que te proporcionaré (Usar la herramienta de `LectorcitoPro` para generar el reporte de todo el programa). Sigue estas reglas de manera estricta:

### 1. Tono y Estilo de Escritura
- **Tono Personal y Directo:** Quiero que escribas con un tono conversacional, como si estuvieras explicándome las cosas directamente a mí. Usa un lenguaje normal y cercano, evita sonar como una inteligencia artificial o demasiado formal. Habla en primera persona cuando tenga sentido, manteniendo un estilo relajado pero informativo.
- **Fidelidad al Contenido:** Las definiciones y explicaciones deben ser fieles al documento original. Si el documento está en inglés, traduce el contenido al español, pero adapta la redacción para que suene natural y fluida, no como una traducción literal y robótica.

### 2. Extracción de Contenido del Documento Fuente
- **Todo es Importante:** Debes extraer toda la información relevante del documento que te envíe (PDF, texto, etc.), desde la primera hasta la última página. Esto incluye:
    - Título, autores, fecha de publicación.
    - Información del índice o tabla de contenidos.
    - El contenido principal, desglosado de forma completa.
- **Mapa Sustancioso:** El objetivo es crear un mapa muy completo y bien explicado. No dejes por fuera detalles que puedan enriquecer el contenido.

### 3. Lógica Estricta de Ramificación de Nodos
Esta es la regla más importante. La estructura del mapa debe seguir esta jerarquía de nodos sin excepción:

- **Nodo 1 (Nivel 0):** Es el **título central** del mapa.
- **Nodo 2 (Nivel 1):** Son los **subtemas principales** que salen directamente del título.
- **Nodos 3, 4 y 5 (Niveles 2, 3 y 4):** Estos tres niveles son para el **desarrollo de la información**. Aquí es donde se desglosan los conceptos.
- **Nodo 6 (Nivel 5):** Es el **último nivel permitido** y su uso es **exclusivo para dar un ejemplo breve y concreto** de la información de esa rama.
- **¡REGLA DE ORO! Todas las Ramas deben llegar hasta el Nodo 6:** Es fundamental que cada una de las ramas, sin importar cuán corta o larga sea, termine en un Nodo 6 con su respectivo ejemplo. No puede haber ninguna rama que termine en el Nodo 4 o 5.
- **Dinamismo en la Ramificación:** La cantidad de hijos que tiene cada nodo debe depender del contenido. Por ejemplo:
    - Un Nodo 2 puede tener dos Nodos 3, mientras que otro puede tener cinco.
    - Un Nodo 3 puede tener un solo Nodo 4, y otro puede tener tres.
    - Un Nodo 4 puede tener uno o varios Nodos 5.
      La estructura no debe ser simétrica, sino que debe reflejar la riqueza de la información.

### 4. Glosario Adicional
Además del `mindMapData`, debes generar una variable `glossaryData`. En ella, incluye una lista de términos técnicos, palabras clave o conceptos "desconocidos" que encuentres en el documento, junto con su definición clara y concisa.

