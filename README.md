# Welcome to our ***Glenn's Bakery***
![image](https://github.com/PixelForgeUTP/Glenns-Bakery/blob/main/src/assets/icon/bd21b236-78cc-4cbd-9687-75c38a582c5f.png?raw=true)
## Tabla de contenidos
- [Descripcion e introduccion](#descripcion-e-introduccion-al-proyecto-glenns-bakery)
- [Notas tecnicas](#algunas-notas-tecnicas-de-lo-que-hemos-aprendido)
- [Extensiones](#extensiones)
- [Componentes](#uso-de-componentes)
	- [Autenticacion](#autenticación-con-google-y-facebook)
	- [Explorador de items](#exploración-de-productos)
	- [Menu](#menu-barra-lateral)
	- [Historial de productos](#historial-de-compras)
- [Paginas](#nuestras-paginas-en-el-sitio)
	- [Starting page](#pagina-de-inicio)
	- [Login page](#inicio-de-sesion)
	- [Register page](#registro-de-cuenta)
	- [Home page](#home-pagina-de-productos)
	- [Shopping cart page](#shopping-cart)
	- [Profile page](#profile)
		- [Pagina de pedidos](#tus-pedidos)
		- [Pagina de direcciones](#direcciones)
		- [Boton finalizar sesion](#cerrar-sesion)
## Descripcion e introduccion al proyecto Glenn's Bakery
- El sitio o aplicacion web esta dedicada a la venta de productos de una reposteria en linea.
> El proposito de Glenn's Bakery fue crear una tienda en línea que ofrezca una variedad de productos de repostería. Nuestro objetivo es proporcionar una experiencia de compra fácil y agradable, permitiendo a los clientes explorar y comprar productos desde la comodidad de su hogar.
- Presentamos este como nuestro proyecto para aplicar practicas en tecnologias mostradas en clase, como lo son Ionic con Angular, o el uso de git y github. 
## Algunas notas tecnicas de lo que hemos aprendido...
A lo largo de nuestro desarrollo del proyecto hemos aplicado el uso de algunas buenas practicas para la creacion del sitio web, aqui mencionamos algunas de ellas:
![image](https://th.bing.com/th/id/OIG2.UCi7GNaOzbsuy2HPeBVs?w=1792&h=1024&rs=1&pid=**ImgDetMain**)
###### Ionic como sdk enfocado en el desarrollo de sitios web para mobiles, es una herramienta o toolkit bastante intuitivo para desarrolladores web.
- Como opinion personal, creemos que es un poco tedioso trabajar con Ionic y angular, pero una vez dominada esta herramienta puede ser de gran utilidad y puede ahorrar tiempo a la hora de desarrollar.
- Tuvimos la oportunidad de practicar habilidades adquiridas para la elaboracion de sitios web, como trabajar con componentes, esta es una buena forma de optimizar el desarrollo web en general.
![image](https://github.com/PixelForgeUTP/Glenns-Bakery/assets/93150198/0cc64894-37da-4e15-b6b1-1277e9f3526c)
#### Uso de componentes
Los componentes son piezas reutilizables de codigo que manejan ciertas funcionalidades. Son como bloques de construccion que puedes usar en varias paginas del sitio.
Algunos componentes (destacados) seran mencionados a lo largo de esta documentacion.
#### Manejo de rutas
![image](https://github.com/PixelForgeUTP/Glenns-Bakery/assets/93150198/337b8236-4cd0-470d-b1c3-18e09295e51d)

En la clase de rutas (*src/app/App.routes.ts*) se instancia la ruta de las [Pages](https://github.com/PixelForgeUTP/Glenns-Bakery/blob/main/src/app/app.routes.ts).
Los modulos se importan en un RouterLink en los componentes (se identifica por su extension .ts). Como ejemplo de esto, puedes ver [menu.component.ts](https://github.com/PixelForgeUTP/Glenns-Bakery/blob/main/src/app/components/menu/menu.component.ts).
### Extensiones
Listado de recursos externos que se utilizaron para facilitar el desarrollo del proyecto.

| Extension     | Descripcion                                                                                         | URL                                                            |
| ------------- | --------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| Figma         | Se utilizo para diseñar las pantallas o paginas del proyecto antes de pasar directamente al codigo. | [Figma]()                                                      |
| Firebase      | Se utilizo como base de datos.                                                                      | [Firebase]()                                                   |
| VS Code       | Nuestro editor de codigo de confianza.                                                              | [VS Code](https://code.visualstudio.com/)                      |
| Github - Fork | Lo utilizamos para observar y gestionar la subida del codigo al repositorio en grupo                | [Github](firebase.google.com)<br>[Fork](https://git-fork.com/) |

## Nuestras paginas en el sitio
Al entrar en nuestro sitio web, lo primero que veremos sera lo siguiente...
### Pagina de inicio
Una buena forma de introducir la aplicacion web de Glenn's Bakery a nuestros usuarios es la pagina de inicio, aqui unicamente vemos el logo de la aplicacion y un boton (Continuar) para comenzar a utilizarla.
### Inicio de sesion
Al presionar el boton "Continuar" de la pagina de inicio, vemos las formas mas habituales para iniciar una sesion con cuenta propia, ya sea con una propietaria de Google o con una de Facebook; En caso de no contar con alguna de estas, el usuario puede registrarse e iniciar su sesion creando una cuenta.
#### Autenticación con Google y Facebook
En la pagina de inicio de sesion se encuentra el componente `ButtonProvidersComponent` gestiona la autenticación de usuarios mediante Google y Facebook.

```
import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-button-providers',
  templateUrl: './button-providers.component.html',
  styleUrls: ['./button-providers.component.scss'],
})
export class ButtonProvidersComponent {
  constructor(private authService: AuthService) {}

  providerAction(provider: 'google' | 'facebook') {
    if (provider === 'google') {
      this.authService.signInWithGoogleProvider();
    } else {
      this.authService.signInWithFacebookProvider();
    }
  }
}
```

### Registro de cuenta
Como mencionamos en el punto anterior, tambien contamos con una pagina de registro en caso de que el usuario no tenga una cuenta registrada. Aqui, con la ayuda del componente  `ButtonProvidersComponent` , el usuario podra asignar un correo y una contraseña a su sesion en el sitio.
En caso de que el usuario simplemente no quiera iniciar una sesion, implementamos un acceso en la esquina superior derecha con el texto "ahora no", de esta forma el usuario puede ingresar al sitio unicamente para ver los productos.
### Home (Pagina de productos)
Una vez ingresado, el usuario podra visualizar los productos disponibles en la tienda de Glenn's Bakery, estos mismos ordenados por su tipo o frecuencia en ventas. En caso de que haya iniciado su sesion, el usuario podra añadir productos a su carrito de compra.
#### Exploración de Productos
El componente `ItemExplorerComponent` utilizado en el home permite visualizar los productos disponibles.
```
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-item-explorer',
  templateUrl: './item-explorer.component.html',
  styleUrls: ['./item-explorer.component.scss'],
})
export class ItemExplorerComponent implements OnInit {
  products$ = this.productService.getProducts();

  constructor(private productService: ProductService) {}

  ngOnInit() {}

  addToCart(product: Product) {
    this.productService.addToCart(product);
  }
}
```
#### Menu (Barra lateral)
A partir del propio home o pagina de productos se puede ver el acceso rapido a la barra de menu, tambien se puede acceder a ella deslizando la pantalla del lateral izquierdo hacia la derecha. En este apartado el usuario podra encontrar un facil y rapido acceso a otras paginas del sitio, como el carrito con los productos añadidos.
```
	<!-- List of menu items -->
      <ion-list>
        <ion-item>
          <a routerLink="/home">Home</a>
        </ion-item>
        <ion-item>
          <a routerLink="/profile">Profile</a>
        </ion-item>
        <ion-item>
          <a [routerLink]="['/shoppin-cart']">Shopping Cart</a>
        </ion-item>
      </ion-list>
	<!-- List of menu items -->
```
### Shopping Cart
En esta pagina se muestra una lista con los productos que se hayan añadido, unicamente si se ha iniciado una sesion. Asi como se añaden productos desde la pagina home, en caso de que el usuario lo quiera, aqui puede quitar un producto de su carrito dandole al boton "Remove Item!".
### Profile
Desde la barra lateral de menu tambien se puede encontrar un acceso rapido a la pagina del perfil del usuario, este tambien estara disponible siempre y cuando el usuario haya iniciado una sesion. Aqui se muestran los datos del usuario junto a otras opciones.
#### Tus pedidos
Ingresando en la opcion "tus pedidos" se encontrara un historial con las compras que haya hecho el usuario.
#### Historial de Compras
El componente `CardHistoryComponent` utilizado en "tus pedidos" dentro del perfil, muestra el historial de compras del usuario.
```
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-history',
  templateUrl: './card-history.component.html',
  styleUrls: ['./card-history.component.scss'],
})
export class CardHistoryComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
```
#### Cupones
*Disponible en proximas actualizaciones*
#### Direcciones
En este apartado, accediendo desde las opciones en la pagina de perfil, el usuario podra añadir la direccion a donde quiera que sea entregado su pedido. Basta con darle al boton "+" para añadir una nueva direccion para la entrega.
#### Gestión de Direcciones
El componente `CardButtonAddressComponent` utilizado en la pagina de direcciones dentro del perfil, permite a los usuarios añadir y gestionar sus direcciones de entrega.
```
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-button-address',
  templateUrl: './card-button-address.component.html',
  styleUrls: ['./card-button-address.component.scss'],
})
export class CardButtonAddressComponent {
  constructor(private router: Router) {}

  addAddress() {
    this.router.navigate(['/address-add']);
  }

  public actionSheetButtons = [
    { text: 'Delete', role: 'destructive' },
    { text: 'Share' },
    { text: 'Cancel', role: 'cancel' },
  ];
}

```
### Soporte
*Disponible en proximas actualizaciones*
### Cerrar Sesion
Como ultima de las opciones adicionales en la pagina de perfil esta el boton para cerrar sesion, lo que hace es culminar la sesion que el usuario haya iniciado, ya sea para iniciar una sesion con otra cuenta o para dejar de utilizar el sitio web.
