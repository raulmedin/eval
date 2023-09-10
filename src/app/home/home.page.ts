import { Component, OnInit } from '@angular/core';
import { UsuarioservicioService } from '../servicio/usuarioservicio.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage  implements OnInit{
  nombre:string="";

  constructor(private Service:UsuarioservicioService) {
    
  }

ngOnInit(){

 this.nombre=this.Service.getNombre()

}





}
