import { Injectable } from '@angular/core';
import { Firestore, doc, addDoc, deleteDoc, updateDoc, query, where, collectionData, collection, docData } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private fireStore: Firestore) { }

  addProduct(product: any) {
    const productsReference = collection(this.fireStore, 'products')
    return addDoc(productsReference, product);
  }

  getProducts(){
    const productsReference = collection(this.fireStore, 'products')
    return collectionData(productsReference, {idField: 'id'});
  }

  getProductById(id: string){
    const productReference = doc(this.fireStore, `products/${id}`);
    return docData(productReference);
  }

  getProductsByType(type: string){
    const productsReference = collection(this.fireStore, 'products');
    const productsQuery = query(productsReference, where('type', '==', type));
    return collectionData(productsQuery, { idField: 'id' });
  }

  updateProduct(id: string, product: any){
    const productReference = doc(this.fireStore, `products/${id}`);
    return updateDoc(productReference, product);
  }

  deleteProduct(id: string){
    const productReference = doc(this.fireStore, `products/${id}`);
    return deleteDoc(productReference);
  }
}
