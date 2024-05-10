import { Component, OnInit } from '@angular/core';
import { IonCard, IonCardTitle, IonCardSubtitle, IonCardContent, IonCardHeader, IonButton } from "@ionic/angular/standalone";
import { CommonModule } from '@angular/common';

import { MenuComponent } from '../menu/menu.component';

import { FirestoreService } from '../../services/firestore.service';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-item-explorer',
  templateUrl: './item-explorer.component.html',
  styleUrls: ['./item-explorer.component.scss'],
  standalone: true,
  imports: [
    IonButton, 
    IonCardContent, 
    IonCard, 
    IonCardTitle, 
    IonCardSubtitle, 
    IonCardHeader, 
    CommonModule,
    MenuComponent
  ]
})
export class ItemExplorerComponent  implements OnInit {

  constructor(
    private fireStore: FirestoreService,
    private cartService: ShoppingCartService
  ) { }

  products$: any;

  ngOnInit() {
    this.products$ = this.fireStore.getProducts();
  }

  addToCart(product: any){
    this.cartService.addCart(product.id);
    this.cartService.getCart().subscribe(cart => console.log("Cart content: "+cart));
  }

}
