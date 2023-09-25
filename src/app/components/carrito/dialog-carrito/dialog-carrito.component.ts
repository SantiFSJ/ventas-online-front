import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import {
  CdkDragDrop,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { Producto } from 'src/app/models/producto';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente } from 'src/app/models/cliente';
import { TarjetaDeCredito } from 'src/app/models/tarjeta-de-credito';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GenericMessageService } from 'src/app/services/generic-message.service';
import { Message } from 'src/app/models/message';
import { Venta } from 'src/app/models/venta';
import { VentaService } from 'src/app/services/venta-service';
import { MatProgressBar } from '@angular/material/progress-bar';
import { DescuentoService } from 'src/app/services/descuento.service';
import { Descuento } from 'src/app/models/descuento';

@Component({
  selector: 'app-dialog-carrito',
  templateUrl: './dialog-carrito.component.html',
  styleUrls: ['./dialog-carrito.component.css'],
})
export class DialogCarritoComponent implements OnInit {

  displayedColumns: string[] = ['descripcion','precio','total'];

  @ViewChild(MatProgressBar) progressBar: MatProgressBar;


  ventaForm: FormGroup;

  showProgressBar: boolean = false;

  movie: string = "";

  productos: Producto[] = [];

  totalAmount: number = 0;

  totalAmountWithDiscounts: any = "";

  tarjetasDeCredito: TarjetaDeCredito[] = [];

  tarjetaSeleccionada: TarjetaDeCredito;

  descuentos: Descuento[] = [];
  

  constructor(public dialog: MatDialogRef<DialogCarritoComponent>,@Inject(MAT_DIALOG_DATA) public data: any,
    private clienteService: ClienteService,
    private fb: FormBuilder,
    private genericMessageService: GenericMessageService,
    private venta: Venta,
    private ventaService: VentaService,
    private descuentoService: DescuentoService,
    ) { }

  ngOnInit(): void {
    this.ventaForm= this.fb.group({
      idTarjeta: [undefined, [ Validators.required]],
    });

    this.productos = this.data.productos;
    this.clienteService.getTarjetasDeCredito().subscribe(res => {
      this.tarjetasDeCredito = res;
    });

    this.descuentoService.getDescuentos().subscribe(res => {
      this.descuentos = res;
    });

  }

  formatNumber(nroTarjeta: string): string{
    return "****-****-" + nroTarjeta.slice(0,4);
  }

  addSelectedTarjeta(tarjeta: TarjetaDeCredito): void{
    this.tarjetaSeleccionada = tarjeta;
    this.setVenta();
    this.ventaService.calcularMonto(this.venta).subscribe(res=>{
      this.totalAmountWithDiscounts = res;
    })
  }

  getFilteredProducts(): Producto[]{
    let productosFiltrados: Producto[] = [];

    this.productos.forEach(productoTemp =>{
      if (!productosFiltrados.includes(productoTemp)) {
        productosFiltrados.push(productoTemp); // Agregamos el elemento al conjunto si no existe.
      }
    })

    return productosFiltrados;

  }

  public getProductCount(producto: Producto): number{
    let counter = 0;
    this.productos.forEach(productoTemp => {
      if(productoTemp == producto){
        counter++;
      }
    })
    return counter;
  }

  private setVenta(): void{
    let cliente: Cliente = new Cliente();
    cliente.id = '1';
    cliente.dni = "43217767";
    cliente.email = "santi@gmail.com";
    cliente.nombre = "santi";
    cliente.apellido = "fernandez"
    cliente.tarjetasDeCredito = this.tarjetasDeCredito;
    this.venta.cliente = cliente;
    this.venta.productoVendidos = this.productos;
    this.venta.tarjetaDeCredito = this.tarjetaSeleccionada;
  }

  realizarCompra():void{
    if(this.tarjetaSeleccionada != undefined){
      this.showProgressBar = true;
      this.setVenta()
      
      this.ventaService.createVenta(this.venta).subscribe(
        (res: any) => { 
          this.genericMessageService.messageEvent.next(new Message('success', 'Mensaje informativo', "La venta se realizo con exito!"));
          this.progressBar.mode = "determinate";
          this.dialog.close();
        },
        (error: any) => {
          this.genericMessageService.messageEvent.next(new Message('error', 'Mensaje informativo', error.error.message));
          this.progressBar.mode = "determinate";
          this.progressBar.color = "warn";
        }
      )
    }else{
      this.genericMessageService.messageEvent.next(new Message('info','Mensaje informativo','Seleccione un metodo de pago'))
    }
  }

  getProductsCount(): number{
    return this.productos.length;
  }

  getTotalAmount(): number{
    let totalAmount: number = 0;
    this.productos.forEach(producto => {
      totalAmount = totalAmount + producto.precio;
    })
    return totalAmount;
  }

  

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.productos, event.previousIndex, event.currentIndex);
  }

}
