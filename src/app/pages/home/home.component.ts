import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']  // Corregir a `styleUrls` con "s"
})
export class HomeComponent implements OnInit {
  items: any[] = [];

  constructor(private dataService: DataService) { }

  // Implementar OnInit para cargar los datos cuando el componente se inicialice
  ngOnInit(): void {
    // Suscribirse al observable para obtener los datos
    this.dataService.getItems().subscribe({
      next: (data) => {
        this.items = data;  // Asignar los datos recibidos a la variable items
      },
      error: (error) => {
        console.error('Error al cargar los items', error);  // Manejo básico de errores
      }
    });
  }
}
