import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { Anuncio } from '../../interfaces/anuncio.interfaces';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  // items: Producto[] = [];

  // constructor(private dataService: DataService) { }

  // // Implementar OnInit para cargar los datos cuando el componente se inicialice
  // ngOnInit(): void {
  //   // Suscribirse al observable para obtener los datos
  //   this.dataService.getProductos().subscribe({
  //     next: (data) => {
  //       this.items = data;  // Asignar los datos recibidos a la variable items
  //     },
  //     error: (error) => {
  //       console.error('Error al cargar los items', error);  // Manejo básico de errores
  //     }
  //   });
  // }
}
