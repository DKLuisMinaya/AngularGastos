import { Component, OnInit } from '@angular/core';
import { Servicio1Service } from '../servicio/servicio1.service';

@Component({
  selector: 'app-gastos',
  standalone: true,
  imports: [],
  templateUrl: './gastos.component.html',
  styleUrl: './gastos.component.css'
})
export class GastosComponent {
  gasto:any;
  mostrar:any;
  constructor( private Service1:Servicio1Service){}
  ngOnInit(): void {
    this.mostrarDatos();
  }

  mostrarDatos(){
    this.Service1.mostrar().subscribe({
      next:(data:any)=>{
        this.mostrar=data.tipos
      },
      error:(e)=>{
        debugger
      }
    })
  }

  registerGasto(tipo:any, descripcion:any, monto:any, fecha:any){
    debugger
    this.Service1.saveTipo(tipo.value, descripcion.value, monto.value, fecha.value).subscribe({
      next:(data:any)=>{
        this.gasto=data.message
      },
      error:(e)=>{
        debugger
      }
    })
  }
}
