import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioservicioService } from '../servicio/usuarioservicio.service';


@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.page.html',
  styleUrls: ['./ingreso.page.scss'],
})


export class IngresoPage implements OnInit{
  nombre:string;
 

  constructor(private router: Router, private usuarioservice:UsuarioservicioService) { 
    this.nombre="";
  }

  

  login(){
    if (this.nombre.trim()!==""){
    this.usuarioservice.setNombre(this.nombre);
    this.router.navigate(['/home']);
  }
}

  ngOnInit() {
  
    
  }

}
