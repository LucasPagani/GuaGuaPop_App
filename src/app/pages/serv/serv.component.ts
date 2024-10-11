import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-serv',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './serv.component.html',
  styleUrl: './serv.component.css'
})
export class ServComponent {
  // servicios: any[] = [];

  // constructor(private dataService: DataService) {
  //   this.servicios = this.dataService.getServicios();  // Obtener solo servicios
  // }
}
