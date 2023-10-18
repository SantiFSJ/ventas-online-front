import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ventas-online-front';
  openSidenav = false;

  constructor(   
     private router: Router,
    ){};

  changeSidenav(){
    this.openSidenav = !this.openSidenav;
  }

  redirectToComprasList():void{
    this.router.navigate(['compras/listar']).then();
  }

}
