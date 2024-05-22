import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  query,
  where,
  collectionData,
  doc,
  setDoc,
  addDoc,
  updateDoc,
} from '@angular/fire/firestore';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private fireStore: Firestore) {}

  // Método para añadir un usuario
  addUserProfile(
    email: string,
    nombre: string,
    apellido: string,
    telefono: string
  ) {
    const userUID = localStorage.getItem('userUID');
    if (userUID) {
      const userProfileRef = collection(this.fireStore, 'users');
      addDoc(userProfileRef, {
        UID: userUID,
        correo: email,
        nombre: nombre,
        apellido: apellido,
        telefono: telefono,
      }).then(() => {
        console.log('User profile added successfully');
      });
      //const userProfileData = {UID: userUID, correo: email,};
      //await setDoc(userProfileRef, userProfileData);
    } else {
      console.error('User UID is not available in localStorage');
    }
  }

  // Método para obtener los datos del perfil del usuario
  getUserProfile(): Observable<any> {
    const userUID = localStorage.getItem('userUID');
    if (userUID) {
      const usersReference = collection(this.fireStore, 'users');
      const userQuery = query(
        usersReference, 
        where('UID', '==', userUID)
      );
      return collectionData(userQuery, { idField: 'id' });
    } else {
      console.error('User UID is not available in localStorage');
      return new BehaviorSubject<any[]>([]).asObservable();
    }
  }

  // Método para actualizar los datos del perfil del usuario
  async updateUserProfile(updatedData: any) {
    const userUID = localStorage.getItem('userUID');
    if (userUID) {
      const userProfileRef = doc(this.fireStore, `users/${userUID}`);
      await updateDoc(userProfileRef, updatedData);
    } else {
      console.error('User UID is not available in localStorage');
    }
  }
}
