import { Injectable } from '@angular/core';
import { Producto } from '../interface/producto.interface';
import { HttpClient } from '@angular/common/http';
import { environments } from '../../environments/environments.prod';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  private baseUrl: string = environments.baseUrl;


  constructor(private http: HttpClient) { }


  getProductos():Observable<Producto[]> {
    return this.http.get<Producto[]>(`${ this.baseUrl }/productos`);
  }

}

