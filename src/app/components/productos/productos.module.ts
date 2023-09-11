import { NgModule } from "@angular/core";
import { ListadoProductosComponent } from "./listado-productos/listado-productos.component";
import { ProductosRoutingModule } from "./productos-routing.module";
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from "@angular/common";
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatBadgeModule } from '@angular/material/badge';
import { DialogCarritoComponent } from "../carrito/dialog-carrito/dialog-carrito.component";
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatStepperModule } from '@angular/material/stepper';

@NgModule({
    declarations: [
      ListadoProductosComponent,
      DialogCarritoComponent,
    ],
    imports: [
      MatStepperModule,
      DragDropModule,
      MatBadgeModule,
      MatDialogModule,
      MatProgressBarModule,
      CommonModule,
      MatIconModule,
      MatButtonModule,
      MatTableModule,
      MatCheckboxModule,
      ProductosRoutingModule,
    ],
    
  })
  export class ProductosModule {}