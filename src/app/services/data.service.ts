import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environments } from '../../environments/environments.prod';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private baseUrl: string = environments.baseUrl;  // Usa la URL del entorno

  constructor(private http: HttpClient) { }

  // Obtén todos los elementos desde el archivo JSON
  getItems(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/items.json`);  // Cambia la URL si es necesario
  }

  // Obtén solo productos
  getProductos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/items.json`).pipe(
      map(items => items.filter(item => item.tipo === 'producto'))
    );
  }

  // Obtén solo servicios
  getServicios(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/items.json`).pipe(
      map(items => items.filter(item => item.tipo === 'servicio'))
    );
  }
}
