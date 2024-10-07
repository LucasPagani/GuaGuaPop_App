import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { Producto } from '../../interface/producto.interface';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  productos: Producto[] = [];



  producto: Producto[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getProductos()
      .subscribe( producto => this.producto = producto );
  }
}
