import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-vinyl-detail',
  templateUrl: './vinyl-detail.page.html',
  styleUrls: ['./vinyl-detail.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class VinylDetailPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
