import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth:Auth) { }

  login(email: string, password: string){
    return signInWithEmailAndPassword(this.auth, email, password) // returns a promise
  }

  logout(){
    return signOut(this.auth) // returns a promise
  }
}
