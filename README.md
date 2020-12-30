Proyecto realizado con (https://github.com/pppeedrito).

# El Covid19 en el mundo

Vamos a utlizar una API para obtener datos sobre la situación del Covid19 en el mundo. Vamos a usar uno de los __endpoint__ que nos ofrecen en esta [Web](https://corona.lmao.ninja/docs/#/COVID-19%3A%20Worldometers)

Un objetivo añadido es usar un componente para crear [tablas](https://bootstrap-table.com/) de **Bootstrap** para poder volcar los datos en una tabla, sin tener que nosotros codificar casi nada.

El verdadero reto de esta práctica es entender la documentación de una herramienta que puede hacernos ahorrar mucho trabajo si aprendemos a utilizarla.

[DEMO](https://bootstrap-table.vercel.app/)

## Requisitos

- Explora los diferentes __endpoints__ que nos ofrecen en esta Web. Busca aquel que nos permite recuperar información sobre la pandemia para un conjunto de países. Úsala en el mismo navegador para asegurarte que sabes como invocarla.

<details>
 <summary>Pista</summary>
    Este endpoing parece adecuado. Los paises sobre los que quieres obtener los datos se añaden al final de la URL, separados por comas (https://corona.lmao.ninja/docs/#/COVID-19%3A%20Worldometers/get_v3_covid_19_countries)
</details>
<br/>
- Crea la cabecera adecuada para la tabla. Concretamente queremos mapear: 
  - Nombre país
  - Población
  - Casos activos por millón de habitantes
  - Últimza actualización de los datos

<details>
 <summary>Pista</summary>
    Crea un **thead** con la información necesaria para cada una de las columnas: (https://www.w3schools.com/tags/tag_thead.asp)
</details>
<br/>

- Establece el atributo adecuado en el tag **table** para que la biblioteca haga una llamada al endpoint y recupere información para un conjunto de paises. Por ejemplo, para los mismos que se muestran en la demo (Span, Italy, etc.)
<details>

 <summary>Pista</summary>
    Fíjate en el atributo **data-url** y en los atributos **data-field**: (https://examples.bootstrap-table.com/#welcomes/from-url.html#view-source)
</details>
<br/>

- Haz posible que, al hacer clic en la columna de "casos activos por millón de habitantes"; esta pueda ser ordenada creciente o decrecientemente. Tan solo tienes que añadir un atributo en el tag adecuado.

<details>
 <summary>Pista</summary>
    Mira como usar el atributo **data-sortable**: (https://examples.bootstrap-table.com/index.html#column-options/sortable.html)
</details>
<br/>

- En la parte superior derecha de la Demo, aparece un botón gris que permite exportar todos los datos a diferentes formatos. La mayoría de componentes que podemos encontrar por Internet, como esta tabla de Bootstrap, permite expandir sus funcionalidades mediante la inclusión de **plugins**. Busca uno de ellos que te permita hacer esto. Pre-pista: busca "export" en la documentación de Bootstrap table.

<details>
 <summary>Pista</summary>
    Mira como usar este plugin: https://examples.bootstrap-table.com/index.html#issues/188.html#view-source
</details>
<br/>

- Seguramente la fecha de actualización de tu table aparece en formato [timestamp](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_gettime). Podrías recorrer todas las celdas y cambiar el formato usando JavaScript. PERO para este proyecto, te animo a usar las herramientas que Boostrap Table ofrece. Busca como "maquetar" los datos que recuperas de la llamada AJAX para la columna de fecha de actualización.

<details>
<summary>Pista</summary>
    El atributo data-formatter: https://examples.bootstrap-table.com/#column-options/formatter.html
</details>
<br/>

- Queremos llamar la atención del usuario de manera que, si los casos activos por millón de habitantes superan los **10000**; muestra la celda de color amarillo. Puedes utilizar un atributo de Bootstrap Table para cambiar el estilo de la celda en función del valor de la misma.

<details>
 <summary>Pista</summary>
    Usa cellStyle: https://examples.bootstrap-table.com/index.html?bootstrap5#column-options/cell-style.html
</details>
<br/>

- Finalmente, permite que el usuario pueda añadir nuevos paises a la búsqueda mediante, por ejemplo, un cuadro de texto. Fíjate como funciona en la demo.

<details>
 <summary>Pista</summary>
    1. Guarda la URL de la llamada AJAX en una variable
    2. Añade un tag input (por ejemplo) para que el usuario pueda introducir el nombre de un país en inglés
    3. Añade un evento de manera que, al hacer clic en el botón de añadir, se actualice la variable **url** y ejecute un método de actualización de la tabla Bootstrap
    4. https://examples.bootstrap-table.com/index.html?bootstrap5#issues/409.html
</details>
