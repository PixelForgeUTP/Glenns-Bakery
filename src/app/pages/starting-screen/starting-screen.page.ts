import { Component, OnInit } from '@angular/core';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
  IonButton 
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-starting-screen',
  templateUrl: './starting-screen.page.html',
  styleUrls: ['./starting-screen.page.scss'],
  standalone: true,
  imports: [
    IonButton, 
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar,
  ]
})
export class StartingScreenPage implements OnInit {

  constructor(private router: Router) { }

  continue() {
    this.router.navigate(['/auth-options'])
  }

  ngOnInit() {
  }

}
