import { Injectable } from "@angular/core";
import { GenericModel } from "./generic-model";

@Injectable({
    providedIn: 'root',
  })
export class Marca extends GenericModel{
    nombre: string;

}
