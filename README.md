# Glenn's Bakery


## Descripcion de componentes
![image](https://github.com/PixelForgeUTP/Glenns-Bakery/assets/93150198/0cc64894-37da-4e15-b6b1-1277e9f3526c)
- Pages:  representará la experiencia visual y las funcionalidades con las que el usuario podrá interactuar.
- Components: seran los elementos modulares que encapsulan partes específicas de la interfaz de usuario y su lógica asociada. 
- Services: clases reutilizables que proporcionan funcionalidades específicas a lo largo de la aplicación (lógica de negocio, el acceso a datos, la interacción con servidores externos ).

### Manejo de rutas
En la clase de rutas(src/app/App.routes.ts) Se instancia la ruta de las [Pages](https://github.com/PixelForgeUTP/Glenns-Bakery/blob/main/src/app/app.routes.ts).

Módulo: se importa RouterLink en los componentes con extension ".ts".
ejemplo: [menu.component.ts](https://github.com/PixelForgeUTP/Glenns-Bakery/blob/main/src/app/components/menu/menu.component.ts).

Atributo: Uso del atributo dentro de la etiqueta [routerLink]="['/home']

![image](https://github.com/PixelForgeUTP/Glenns-Bakery/assets/93150198/337b8236-4cd0-470d-b1c3-18e09295e51d)

# Glenn's Bakery Description
App enfocada en la venta de productos de reposteria de gran variedad via delivery.
## Barra de navegación
### Función:
Proporciona acceso rápido a las secciones principales de la aplicación, como la página de inicio, el carrito de compras, el perfil del usuario y el historial de pedidos.
## Home
### Función: Muestra el contenido principal de la aplicacion.
## Carrito de compras
### Función: Muestra una lista de los productos que el usuario ha agregado, junto con sus cantidades y precios totales.
## Página de pago
### Función: Permite a los usuarios ingresar su información de pago y completar su compra.
## Página de confirmación de compra
### Función: Muestra un mensaje de confirmación que indica que la compra se ha realizado correctamente. 
## Página de perfil del usuario
### Función: Los usuarios podran acceder a su historial de pedidos, direcciones registradas, sus cupones y otros servicios como el de soporte.
## Página de historial de pedidos
### Función: Muestra una lista de los pedidos anteriores del usuario, junto con los detalles de cada pedido, como el número de pedido, la fecha de pedido, el total del pedido y el estado del pedido.
## Página de cupones
### Función: El usuario podra ver los cupones que dispone.
## Soporte
### Función: Esta función permite a los usuarios abrir un ticket para establecer contacto con nuestro equipo de soporte. La comunicación se lleva a cabo a través de correo electrónico utilizando la plataforma Gmail.
