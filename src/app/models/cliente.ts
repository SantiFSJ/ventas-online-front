import { Injectable } from "@angular/core";
import { GenericModel } from "./generic-model";
import { TarjetaDeCredito } from "./tarjeta-de-credito";

@Injectable({
    providedIn: 'root',
  })
export class Cliente extends GenericModel{
    nombre: string;
    apellido: string;
    dni: string;
    email: string;
    tarjetasDeCredito: TarjetaDeCredito[];

}
