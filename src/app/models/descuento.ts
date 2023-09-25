import { Injectable } from "@angular/core";
import { GenericModel } from "./generic-model";

@Injectable({
    providedIn: 'root',
  })
export class Descuento extends GenericModel{
    tipo: string;
    fechaInicio: Date;
    fechaFin: Date;
    porcentaje: number;
    marca: string;

}
