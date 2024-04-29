import { Component, Input, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule} from '@angular/forms';
import { IonInput, IonItem, IonLabel } from "@ionic/angular/standalone";

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
  standalone: true,
  imports: [
    IonInput, 
    IonItem, 
    IonLabel,
    ReactiveFormsModule,
  ]
})
export class CustomInputComponent  implements OnInit {
  @Input() control!: FormControl; 
  @Input() label: string = '';
  @Input() type: string = 'text';
  @Input() autocomplete : string = 'off';
  text: any; 

  constructor() { }

  ngOnInit() {
  }
}


