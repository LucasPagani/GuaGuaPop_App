import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [DataService],
})


export class HomeComponent {
  items: any[] = [];

  constructor(private dataService: DataService) {
    this.items = this.dataService.getItems();  // Obtener todos los items (productos y servicios)
  }
}
