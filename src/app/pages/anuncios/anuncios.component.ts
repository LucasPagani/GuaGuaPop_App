// anuncios.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Anuncio } from '../../interfaces/anuncio.interfaces';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../components/card/card.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-anuncios',
  templateUrl: './anuncios.component.html',
  styleUrls: ['./anuncios.component.css'],
  standalone:true,
  imports: [
    CommonModule,
    CardComponent,
    MatCardModule,
    MatDividerModule,
    RouterModule,
  ],

  providers: [DataService],
})
export class AnunciosComponent implements OnInit {
  public anuncios: Anuncio[] = [];
  public categoria!: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.categoria = params['categoria'];
      this.getAnuncios();
    });
  }

  getAnuncios() {
    if (this.categoria === 'producto') {
      this.dataService.getAnunciosByCategoria('Producto').subscribe(anuncios => {
        this.anuncios = anuncios;
      });
    } else if (this.categoria === 'servicio') {
      this.dataService.getAnunciosByCategoria('Servicio').subscribe(anuncios => {
        this.anuncios = anuncios;
      });
    } else {
      this.dataService.getAnunciosByCategoria(this.categoria).subscribe(anuncios => {
        this.anuncios = anuncios;
      });
    }
  }
}
