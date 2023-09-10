import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioservicioService {
  
  //private nombreSubject= new BehaviorSubject< string>("");
  //public nombre$=this.nombreSubject.asObservable();
  nombre:any
  setNombre(nombre:string){
    this.nombre=nombre;
  }

 getNombre(){return this.nombre;

 };

  constructor() { }
}
