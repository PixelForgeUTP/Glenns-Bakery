import { Injectable } from '@angular/core';
import { Firestore, doc, addDoc, deleteDoc, updateDoc, collectionData, collection, docData } from '@angular/fire/firestore';

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
    return collectionData(productsReference);
  }

  getProductById(id: string){
    const productReference = doc(this.fireStore, `products/${id}`);
    return docData(productReference);
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
