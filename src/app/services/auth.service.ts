import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
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
  
  private _router = inject(Router);

  register(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        // Almacena el UID y el correo electrónico en el localStorage
        const uid = userCredential.user?.uid;
        const userEmail = userCredential.user?.email;
        if (uid) {
          localStorage.setItem('userUID', uid);
        }
        if (userEmail) {
          localStorage.setItem('Correo', userEmail);
        }
        this._router.navigate(['/home']);
        return userCredential; // Devuelve el userCredential para su uso posterior
      })
      .catch((error) => {
        console.error('Error during login:', error);
        throw error; // Lanza el error para que pueda ser capturado en el componente
      });
  }

  logOut(): Promise<void> {
    return this.auth.signOut(); // returns a promise
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

  async callPopUp(provider: AuthProvider): Promise<UserCredential> {
    try {
      const result = await signInWithPopup(this.auth, provider);
      // Almacena el UID y el correo electrónico en el localStorage
      const uid = result.user?.uid;
      const userEmail = result.user?.email;
      if (uid) {
        localStorage.setItem('userUID', uid);
      }
      if (userEmail) {
        localStorage.setItem('correo', userEmail);
      }
      return result;
    } catch (error: any) {
      return error;
    }
  }
}
