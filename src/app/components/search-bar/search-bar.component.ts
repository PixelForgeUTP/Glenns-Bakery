import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { IonInput, IonItem, IonLabel } from "@ionic/angular/standalone";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  standalone: true,
  imports: [
    IonInput, 
    IonItem, 
    IonLabel,
    ReactiveFormsModule,
  ]
})
export class SearchBarComponent implements OnInit {
  @Input() control!: FormControl; 
  @Input() label: string = '';
  @Input() type: string = 'text';
  @Input() autocomplete: string = 'off';
  @Output() searchQuery = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.control.valueChanges.subscribe(value => {
      this.searchQuery.emit(value);
    });
  }
}
