import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoProductosComponent } from './listado-productos/listado-productos.component';
import { FormProductoComponent } from './form-producto/form-producto.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listar',
    pathMatch: 'full', 
  },
  {
    path: 'listar',
    component: ListadoProductosComponent,
    pathMatch: 'full', 
  },
  {
    path: 'editar/:id',
    component: FormProductoComponent,
    pathMatch: 'full', 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductosRoutingModule {}