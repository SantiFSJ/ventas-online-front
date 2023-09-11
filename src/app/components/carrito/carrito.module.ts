import { NgModule } from "@angular/core";
import { ToastModule } from 'primeng/toast';
import { DialogCarritoComponent } from "./dialog-carrito/dialog-carrito.component";
import { MatDialogModule } from '@angular/material/dialog';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from "@angular/common";
import { BrowserModule } from '@angular/platform-browser';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';

@NgModule({
    declarations: [
      
    ],
    imports: [
      MatCheckboxModule,
      MatTableModule,
      MatButtonModule,
      MatIconModule,
      MatBadgeModule,
      BrowserModule,
      CommonModule,
      DragDropModule,
      MatDialogModule,
      ToastModule,
    ],    
  })
  export class CarritoModule {}