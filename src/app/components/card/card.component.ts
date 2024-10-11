import { Component, Input, OnInit } from '@angular/core';
<<<<<<< HEAD
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { Producto } from '../../interface/producto.interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
=======
import { Anuncio } from '../../interfaces/anuncio.interfaces';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'productos-prod-card',
  templateUrl: './card.component.html',
  standalone: true,
  imports: [MatCardModule,
    MatIconModule,
    RouterModule,
    CommonModule
  ],
  styles: [
  ]
>>>>>>> mi-nueva-rama
})
export class CardComponent implements OnInit {

  @Input()
<<<<<<< HEAD
  public productos!: Producto;
  hero: any;


  ngOnInit(): void {
    if ( !this.hero ) throw Error('Hero property is required');
=======
  public prod!: Anuncio;


  ngOnInit(): void {
    if (!this.prod) {
      console.warn('Producto no proporcionado al componente');
    }
>>>>>>> mi-nueva-rama
  }

}
