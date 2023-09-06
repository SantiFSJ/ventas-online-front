import { NgModule } from "@angular/core";
import { ListadoProductosComponent } from "./listado-productos/listado-productos.component";
import { ProductosRoutingModule } from "./productos-routing.module";
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
    declarations: [
      ListadoProductosComponent,
    ],
    imports: [
      MatTableModule,
      MatCheckboxModule,
      ProductosRoutingModule,
    ],
    
  })
  export class ProductosModule {}