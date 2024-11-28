export interface SearchResponse {
  productos: Producto[];
}

export interface Producto {
  id:          number;
  nombre:      string;
  descripcion: string;
  tipo_animal: string;
}
