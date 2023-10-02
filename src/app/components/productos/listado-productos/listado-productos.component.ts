import { Component, ViewChild , OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import { Producto } from 'src/app/models/producto';
import { GenericMessageService } from 'src/app/services/generic-message.service';
import { Message } from 'src/app/models/message';
import { MatProgressBar } from '@angular/material/progress-bar';
import { MatDialog } from '@angular/material/dialog';
import { DialogCarritoComponent } from '../../carrito/dialog-carrito/dialog-carrito.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.css']
})
export class ListadoProductosComponent implements OnInit {

  @ViewChild(MatProgressBar) progressBar: MatProgressBar;

  displayedColumns: string[] = ['select','precio','descripcion','marca','categoria','actions'];

  productos: Producto[] = [];
  showNoProductsMessage: boolean = false;

  productosSeleccionados: Producto[] = [];

  constructor(
    private router: Router,
    private productoService: ProductoService,
    private genericMessageService: GenericMessageService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.productoService.getProductos().subscribe(
      (res: Producto[]) => {
        this.productos = res;
        this.showNoProductsMessage = this.productos.length === 0;
        this.progressBar.mode = "determinate";
      },
      (error: any) => {
          this.genericMessageService.messageEvent.next(new Message('error', 'Mensaje informativo', 'Sucedió un error al recuperar los productos'));
          this.progressBar.mode = "determinate";
      }
    );
   
  }

  public redirectToForm(producto: Producto): void{
    this.router.navigate(['productos/editar/',producto.id]).then();

  }


  public addToShoppingKart(producto: Producto): void{
    this.productosSeleccionados.push(producto);
  }

  public removeFromShoppingKart(producto: Producto): void{
    this.productosSeleccionados = this.productosSeleccionados.filter(productoTemp => productoTemp !== producto);
  }

  public showDeleteButton(producto:Producto): boolean{
    return this.productosSeleccionados.includes(producto);
  }

  public enableShoppingKartButton(): boolean{
    return this.productosSeleccionados.length < 1;
  }

  public getProductCount(producto: Producto): number{
    let counter = 0;
    this.productosSeleccionados.forEach(productoTemp => {
      if(productoTemp == producto){
        counter++;
      }
    })
    return counter;
  }
  

  openShoppingCartDialog(): void{
    let productos = this.productosSeleccionados
    this.dialog.open(DialogCarritoComponent,{
        data: {
          productos,
        },
      }
    );
  }

  showProductsBadge(): boolean{
    return this.productosSeleccionados.length > 0;
  }

  getProductsSize(): number{
    return this.productosSeleccionados.length;
  }


}
