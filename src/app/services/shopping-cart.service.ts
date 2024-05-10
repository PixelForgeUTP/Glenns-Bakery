import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private cartItems = new BehaviorSubject<any[]>([]);

  constructor() { }

  addCart(productId: any) {
    const currentItems = this.cartItems.value;
    if (!currentItems.includes(productId)) {
      this.cartItems.next([...currentItems, productId]);
    }
  }

  getCart(){
    return this.cartItems;
  }

  removeFromCart(productId: any) {
    const updatedItems = this.cartItems.value.filter(id => id !== productId);
    this.cartItems.next(updatedItems);
  }
}

