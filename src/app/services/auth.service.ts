import { Injectable } from '@angular/core';
import { 
  Auth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  GoogleAuthProvider,
  FacebookAuthProvider, 
  AuthProvider,
  UserCredential,
  signInWithPopup,
} from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth) { }

  register(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  loginWithGoogle() {
    return
  }

  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password); // returns a promise
  }

  logout() {
    return signOut(this.auth); // returns a promise
  }

  //providers

  signInWithGoogleProvider(): Promise<UserCredential> {
    const provider = new GoogleAuthProvider();

    return this.callPopUp(provider);
  }

  signInWithFacebookProvider(): Promise<UserCredential> {
    const provider = new FacebookAuthProvider();

    return this.callPopUp(provider);
  }

  async callPopUp (provider: AuthProvider): Promise<UserCredential> {
    try{
      const result = await signInWithPopup(this.auth, provider)

      return this.callPopUp(provider)
    } catch (error: any){
      return error;
    }
  }

}



