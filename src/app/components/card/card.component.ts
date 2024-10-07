import { Component, Input, OnInit } from '@angular/core';
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
})
export class CardComponent implements OnInit {

  @Input()
  public productos!: Producto;
  hero: any;


  ngOnInit(): void {
    if ( !this.hero ) throw Error('Hero property is required');
  }

}
