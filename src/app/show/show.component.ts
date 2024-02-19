import { Servicio1Service } from './../servicio/servicio1.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show',
  standalone: true,
  imports: [],
  templateUrl: './show.component.html',
  styleUrl: './show.component.css'
})
export class ShowComponent implements OnInit {
  mostrar:any;
  constructor( private Service1:Servicio1Service){}
  ngOnInit(){
    this.cargarDatos()
  }

  cargarDatos(){
    this.Service1.getGastos().subscribe({
      next:(datos:any)=>{
        this.mostrar=datos.Lista;
      },
      error:(e)=>{
        debugger
        console.log('Error al obtener los generos')
      }

      })
  }
}
