import { Component, ViewChild , OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel} from '@angular/cdk/collections';
import { ProductoService } from 'src/app/services/producto.service';
import { Producto } from 'src/app/models/producto';
import { GenericMessageService } from 'src/app/services/generic-message.service';
import { Message } from 'src/app/models/message';
import { MatProgressBar } from '@angular/material/progress-bar';
import { MatDialog } from '@angular/material/dialog';
import { DialogCarritoComponent } from '../../carrito/dialog-carrito/dialog-carrito.component';



export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.css']
})
export class ListadoProductosComponent implements OnInit {

  @ViewChild(MatProgressBar) progressBar: MatProgressBar;

  displayedColumns: string[] = ['select','position', 'name'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  productos: Producto[] = [];
  showNoProductsMessage: boolean = false;

  productosSeleccionados: Producto[] = [];

  constructor(
    private productoService: ProductoService,
    private genericMessageService: GenericMessageService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.productoService.getProductos().subscribe(
      (res) => {
        this.productos = res;
        this.productos.length > 0 ? this.showNoProductsMessage = false : this.showNoProductsMessage = true;
        this.progressBar.mode = "determinate";
      },
      (error) => {
        this.genericMessageService.messageEvent.next(new Message('error','Mensaje informativo','Sucedió un error al recuperar los productos'));
        this.progressBar.mode = "determinate";
      }
    );
   
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  openShoppingCartDialog(): void{
    this.dialog.open(DialogCarritoComponent);
  }

  showProductsBadge(): boolean{
    return this.productosSeleccionados.length > 0;
  }

  getProductsSize(): number{
    return this.productosSeleccionados.length;
  }


}
