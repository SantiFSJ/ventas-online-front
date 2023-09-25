import { Injectable } from "@angular/core";
import { GenericModel } from "./generic-model";
import { TarjetaDeCredito } from "./tarjeta-de-credito";
import { Categoria } from "./categoria";
import { Marca } from "./marca";
import { Producto } from "./producto";
import { Cliente } from "./cliente";

@Injectable({
    providedIn: 'root',
  })
export class Venta extends GenericModel{
    fechaYHora: Date;
    cliente: Cliente;
    productoVendidos: Producto[];
    tarjetaDeCredito: TarjetaDeCredito;
    montoTotal: number;

}
