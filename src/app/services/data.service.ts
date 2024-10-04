import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private items = [
    { id: 1, name: 'Producto 1', tipo: 'producto' },
    { id: 2, name: 'Producto 2', tipo: 'producto' },
    { id: 3, name: 'Servicio 1', tipo: 'servicio' },
    { id: 4, name: 'Servicio 2', tipo: 'servicio' }
  ];

  constructor() { }

  getItems(): any[] {
    return this.items;
  }

  getProductos(): any[] {
    return this.items.filter(item => item.tipo === 'producto');
  }

  getServicios(): any[] {
    return this.items.filter(item => item.tipo === 'servicio');
  }
}
