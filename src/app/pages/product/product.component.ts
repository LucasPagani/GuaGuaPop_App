import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  productos: any[] = [];

  constructor(private dataService: DataService) {
    this.productos = this.dataService.getProductos();  // Obtener solo productos
  }
}
