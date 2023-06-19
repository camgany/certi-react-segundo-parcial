# Aplicación de Gastos Personales

Esta es una aplicacion de gastos personales que permite al usuario agregar gastos y ver el total de gastos por categoria.


## Tecnologías Utilizadas

- [React](https://reactjs.org/): Librería de JavaScript para construir interfaces de usuario.
- [Vite](https://vitejs.dev/): Entorno de desarrollo para aplicaciones web.
- [Material UI](https://material-ui.com/): Framework de componentes de React.
- [PostCSS](https://postcss.org/): Herramienta para transformar CSS con JavaScript.

## Importancia de Vite y Material UI

Vite es un entorno de desarrollo para aplicaciones web que permite desarrollar aplicaciones de React de manera rápida y sencilla. Vite proporciona un servidor de desarrollo con recarga en caliente (hot reload) y un empaquetador (bundler) para generar una versión optimizada de la aplicación para producción.

Material UI es un framework de componentes de React que permite desarrollar aplicaciones con un diseño moderno y atractivo. Material UI proporciona una gran variedad de componentes que pueden ser utilizados para desarrollar aplicaciones de React.

## Funcionalidades Implementadas

## Uso de las funcionalidades en el código

A continuación se muestra cómo puedes utilizar estas funcionalidades en tu código:

- Utiliza el concepto de estado (`useState`) para almacenar los datos del formulario. El estado se actualiza cada vez que cambian los campos del formulario. El estado se utiliza para mostrar los datos del formulario en la página y para guardar los datos en el almacenamiento local (`localStorage`).
useState: El hook useState se utiliza para gestionar el estado en componentes funcionales. En el código, se utiliza para almacenar los datos del formulario en el componente AddClockForm. El estado se actualiza cada vez que cambian los campos del formulario. El estado se utiliza para mostrar los datos del formulario en la página y para guardar los datos en el almacenamiento local (localStorage).

- Utiliza el efecto (`useEffect`) para guardar los datos del formulario en el almacenamiento local (`localStorage`) cada vez que cambian.
useEffect: El hook useEffect se utiliza para ejecutar código después de que el componente se haya renderizado. En el código, se utiliza para guardar los datos del formulario en el almacenamiento local en el componente AddClockForm. El efecto se ejecuta cada vez que cambian los datos del formulario.

- Utiliza el almacenamiento local (`localStorage`) para guardar los datos del formulario de manera persistente. Los datos del formulario se recuperan del almacenamiento local cada vez que se carga la página.

- Utiliza guards evitar que el usuario llegue a ingresar a otra pagina que no tenga acceso sino esta logueado.

- Utiliza el useRef en el componente de ExpenseStats para poder mostrar los graficos de gastos por categoria y por fecha, asi como en el componente de FormNewBill para poder mostrar el formulario de agregar gastos.

- Utiliza el useMemo en el componente de CardBill para poder mostrar el icono de la categoria que se selecciono en el formulario.

- Utiliza el useContext en el componente de ContextProvider para poder loggearse y desloggearse de la aplicacion.

- Utiliza el useReducer en el componente de ContextProvider para poder loggearse y desloggearse de la aplicacion.

- Utiliza `react-router-dom` para implementar la navegación entre páginas. Se crearon las siguientes páginas:

  - `/`: página de inicio de la aplicación.
  - `/add-bill`: página para agregar una nueva factura de gastos.
  - `/expense-stats`: página para ver las estadísticas de gastos.

- Utiliza `react-hook-form` para implementar el login y el registro de usuarios. Se crearon los siguientes componentes:

   - `LoginForm`: componente para mostrar el formulario de login.
   - `RegisterForm`: componente para mostrar el formulario de registro.

- Utiliza Material-UI para diseñar y estilizar la interfaz de usuario de la aplicación.

- Utiliza `memo` para optimizar el rendimiento de los componentes de React. Se crearon los siguientes componentes:

  - `CardBill`: componente para mostrar una factura de gastos.


## Estructura de la Página

La página se compone de los siguientes elementos:

- Un encabezado con el título de la página.
Se creo un Navbar con el titulo de la pagina y otras opciones de navegacion pero sin funcionalidad.

- Componente AddBill: este componente representa un formulario para agregar una nueva factura de gastos. Incluye campos para descripción, cantidad, fecha y categoría. Cuando se envía el formulario, se llama a la función onAddBill con los nuevos detalles de la factura.

- Componente CardBill: este componente muestra una sola factura de gastos en un formato de tarjeta con estilo. Incluye información como la descripción, cantidad, categoría y fecha. La categoría está representada por un icono basado en el tipo de categoría.

- Componente ExpenseStats: este componente muestra estadísticas de gastos en forma de dos gráficos. Un gráfico muestra los gastos agrupados por categoría y el otro gráfico muestra los gastos agrupados por fecha. Utiliza la biblioteca Chart.js para representar los gráficos.

- Componente FormNewBill: este componente representa un formulario para agregar una nueva factura de gastos. Incluye campos para descripción, cantidad, categoría y fecha. El formulario usa componentes MUI como TextField, Select y Button.

- Componente TemporalDrawer: este componente representa un cajón de la barra lateral con enlaces de navegación a diferentes secciones de la aplicación de seguimiento de gastos. Incluye elementos de menú para "Inicio" (Inicio), "Añadir Gasto" (Agregar gastos) y "Gráficas/Estadísticas" (Gráficos/Estadísticas). También muestra el total gastado y el recuento de gastos en formato de tarjeta.


## Requisitos y Validaciones

La página cumple con los siguientes requisitos:

- El estado del formulario se actualiza correctamente cuando los campos cambian.
- Los datos del formulario se almacenan en el almacenamiento local (`localStorage`) cada vez que cambian.
- La lista de características se genera dinámicamente a partir de un array de características.
- Al enviar el formulario, se muestra una alerta en pantalla con los datos del formulario.

Además de los requisitos mencionados, se han implementado las siguientes funcionalidades opcionales:

- Validación de campos en el formulario.
- Diseño responsive utilizando las utilidades de Tailwind CSS.


## Uso

1. Clona el repositorio en tu máquina local.

   ```shell
   git clone https://github.com/camgany/certi-react-segundo-parcial.git
    ```

2. Instala las dependencias ejecutando el siguiente comando en la raíz del proyecto:

   ```shell
   npm install
    ```
3. Ejecuta el siguiente comando para iniciar la aplicación:

   ```shell
   npm run dev
   ```
4. Abre la aplicación en tu navegador web con la url que se muestra en la terminal.

## LINK DEL VIDEO
- https://drive.google.com/drive/folders/1TCQsXZ9DwntetzvGl2XhtH1NDbXqGiu_?usp=drive_link

