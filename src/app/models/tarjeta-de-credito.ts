import { Injectable } from "@angular/core";
import { GenericModel } from "./generic-model";

@Injectable({
    providedIn: 'root',
  })
export class TarjetaDeCredito extends GenericModel{
    nombre: string;
    numero: string;
    

}
