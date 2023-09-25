import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VentasOnlineComponent } from './components/ventas-online/ventas-online/ventas-online.component';

const routes: Routes = [{
  path: '', component: VentasOnlineComponent,
  children:[
    {
      path: '',
      redirectTo: 'productos',
      pathMatch: 'full', 
    },
    {
      path: 'productos',
      loadChildren: () => import('./components/productos/productos.module').then((m) => m.ProductosModule),
    },]}
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
