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
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatExpansionModule } from '@angular/material/expansion';
import { ReactiveFormsModule } from "@angular/forms";
import { FormProductoComponent } from './form-producto/form-producto.component';

@NgModule({
    declarations: [
      ListadoProductosComponent,
      DialogCarritoComponent,
      FormProductoComponent,
    ],
    imports: [
      ReactiveFormsModule,
      MatExpansionModule,
      MatRadioModule,
      MatSelectModule,
      MatInputModule,
      MatFormFieldModule,
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