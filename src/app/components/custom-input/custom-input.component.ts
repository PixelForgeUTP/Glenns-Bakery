import { Component, Input, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonInput, IonItem, IonLabel, IonButton, IonIcon } from "@ionic/angular/standalone";


@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, 
    IonInput, 
    IonItem, 
    IonLabel,
    ReactiveFormsModule, 
    CommonModule
  ]
})
export class CustomInputComponent  implements OnInit {
  @Input() control!: FormControl; 
  @Input() label: string = '';
  @Input() type: string = 'text';
  @Input() autocomplete : string = 'off';
  @Input() togglePassword: boolean = false;
  text: any; 

  showPassword: boolean = false;

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
    this.type = this.showPassword ? 'text' : 'password';
  }

  constructor() { }

  ngOnInit() {
  }
}


