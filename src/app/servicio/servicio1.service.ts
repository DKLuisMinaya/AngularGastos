import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Servicio1Service {

  constructor(private http:HttpClient) { }

  getGastos(){
    return this.http.get('http://127.0.0.1:8000/api/gasto/tipo');
  }

  mostrar(){
    return this.http.get('http://127.0.0.1:8000/api/mostrar');
  }
  

  saveTipo(tipo:any, descripcion:any, monto:any, fecha:any){
    return this.http.post('http://localhost:8000/api/gasto',
      {
        descripcion:descripcion,
        monto:monto,
        fecha:fecha,
        tipo_id:tipo
      }
    );
  }
}
