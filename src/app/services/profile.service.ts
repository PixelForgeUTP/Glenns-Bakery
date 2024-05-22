import { Injectable } from '@angular/core';
import { Firestore, collection, query, where, collectionData, doc, setDoc, addDoc, updateDoc, getDocs } from '@angular/fire/firestore';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private fireStore: Firestore) {}

  addUserProfile(nombre: string, apellido: string, telefono: string) {
    const userUID = localStorage.getItem('userUID');
    const userCorreo = localStorage.getItem('Correo');
    if (userUID) {
      const userProfileRef = collection(this.fireStore, 'users');
      addDoc(userProfileRef, {
        UID: userUID,
        correo: userCorreo,
        nombre: nombre,
        apellido: apellido,
        telefono: telefono,
      }).then(() => {
        console.log('User profile added successfully');
      });
    } else {
      console.error('User UID is not available in localStorage');
    }
  }

  getUserProfile(): Observable<any[]> {
    const userUID = localStorage.getItem('userUID');
    if (userUID) {
      const usersReference = collection(this.fireStore, 'users');
      const userQuery = query(usersReference, where('UID', '==', userUID));
      return collectionData(userQuery, { idField: 'id' }) as Observable<any[]>;
    } else {
      console.error('User UID is not available in localStorage');
      return new BehaviorSubject<any[]>([]).asObservable();
    }
  }

  async updateUserProfile(updatedData: any) {
    const userUID = localStorage.getItem('userUID');
    if (userUID) {
      const usersReference = collection(this.fireStore, 'users');
      const userQuery = query(usersReference, where('UID', '==', userUID));
      const querySnapshot = await getDocs(userQuery);

      if (!querySnapshot.empty) {
        const userDocRef = querySnapshot.docs[0].ref;
        await updateDoc(userDocRef, updatedData);
      } else {
        console.error('No document to update for UID:', userUID);
      }
    } else {
      console.error('User UID is not available in localStorage');
    }
  }
}
