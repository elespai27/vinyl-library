import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-vinyl-form',
  templateUrl: './vinyl-form.page.html',
  styleUrls: ['./vinyl-form.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class VinylFormPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
