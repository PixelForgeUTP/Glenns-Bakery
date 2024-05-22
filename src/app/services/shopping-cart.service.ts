import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Firestore, doc, addDoc, deleteDoc, collectionData, collection, query, where, getDocs } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private cartItems = new BehaviorSubject<any[]>([]);

  constructor(private fireStore: Firestore) { }
  
  addCart(productId: any) {
    const userUID = localStorage.getItem('userUID');
    if (userUID) {
      const addProductToCart = collection(this.fireStore, 'shoppin_cart');
      addDoc(addProductToCart, { id_cliente: userUID, id_producto: productId }).then(() => {
        this.loadCartItems();  // Reload cart items after adding a new product
      });
    } else {
      console.error('User UID is not available in localStorage');
    }
  }

  getAllCartItems(){
    const userUID = localStorage.getItem('userUID');
    if (userUID) {
      const cartReference = collection(this.fireStore, 'shoppin_cart');
      const userCartQuery = query(cartReference, where('id_cliente', '==', userUID));
      return collectionData(userCartQuery, { idField: 'id' });
    } else {
      console.error('User UID is not available in localStorage');
      return new BehaviorSubject<any[]>([]).asObservable();
    }
  }

  getCart(){
    return this.cartItems.asObservable();
  }

  private loadCartItems() {
    this.getAllCartItems().subscribe(cartItems => {
      const productIds = cartItems.map(item => item['id_producto']);
      this.cartItems.next(productIds);
    });
  }

  // Método para eliminar un producto del carrito
  async removeItemFromCart(productId: any) {
    const userUID = localStorage.getItem('userUID');
    if (userUID) {
      const cartReference = collection(this.fireStore, 'shoppin_cart');
      const userCartQuery = query(cartReference, where('id_cliente', '==', userUID), where('id_producto', '==', productId));
      
      const querySnapshot = await getDocs(userCartQuery);
      querySnapshot.forEach((doc) => {
        deleteDoc(doc.ref).then(() => {
          this.loadCartItems();  // Reload cart items after removing the product
        }).catch(error => {
          console.error('Error removing document: ', error);
        });
      });
    } else {
      console.error('User UID is not available in localStorage');
    }
  }
}
