import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonButton } from '@ionic/angular/standalone';
import { map, switchMap } from 'rxjs/operators';

import { MenuComponent } from 'src/app/components/menu/menu.component';

import { FirestoreService } from '../../services/firestore.service';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-shoppin-cart',
  templateUrl: './shoppin-cart.page.html',
  styleUrls: ['./shoppin-cart.page.scss'],
  standalone: true,
  imports: [IonButton, IonCardContent, IonCardTitle, IonCardSubtitle, IonCardHeader, IonCard, 
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    CommonModule, 
    FormsModule,
    MenuComponent
  ]
})
export class ShoppinCartPage implements OnInit {

  cartProducts$: any;

  constructor(
    private fireStore: FirestoreService,
    private cartService: ShoppingCartService
  ) { }

  ngOnInit() {
    // Combine products and cart items into one observable to fetch matched products
    this.cartProducts$ = this.cartService.getCart().pipe(
      switchMap(cartIds => {
        return this.fireStore.getProducts().pipe(
          map(products => products.filter(product => cartIds.includes(product.id)))
        );
      })
    );
  }
}
