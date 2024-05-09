import { Component, OnInit } from '@angular/core';
import { IonCard, IonCardTitle, IonCardSubtitle, IonCardContent, IonCardHeader } from "@ionic/angular/standalone";
import { CommonModule } from '@angular/common';

import { FirestoreService } from '../../services/firestore.service';

@Component({
  selector: 'app-item-explorer',
  templateUrl: './item-explorer.component.html',
  styleUrls: ['./item-explorer.component.scss'],
  standalone: true,
  imports: [
    IonCardContent, 
    IonCard, 
    IonCardTitle, 
    IonCardSubtitle, 
    IonCardHeader, 
    CommonModule]
})
export class ItemExplorerComponent  implements OnInit {

  constructor(private fireStore: FirestoreService) { }

  products$: any;

  ngOnInit() {
    this.products$ = this.fireStore.getProducts();
  }

}
