import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';
import { CardComponent } from "../../components/card/card.component";
import { MatDivider } from '@angular/material/divider';
import { Producto } from '../../interface/producto.interface';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    MatDivider
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})


export class HomeComponent {
  producto: Producto[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getProductos()
      .subscribe( producto => this.producto = producto );
  }
}
