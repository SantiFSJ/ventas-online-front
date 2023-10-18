import { Component, OnInit, ViewChild } from '@angular/core';
import { MatProgressBar } from '@angular/material/progress-bar';
import { Message } from 'src/app/models/message';
import { Venta } from 'src/app/models/venta';
import { GenericMessageService } from 'src/app/services/generic-message.service';
import { VentaService } from 'src/app/services/venta-service';

@Component({
  selector: 'app-listado-compras',
  templateUrl: './listado-compras.component.html',
  styleUrls: ['./listado-compras.component.css']
})
export class ListadoComprasComponent implements OnInit {
  @ViewChild(MatProgressBar) progressBar: MatProgressBar;

  displayedColumns: string[] = ['select','monto','fecha','cantidad-articulos','actions'];

  ventas: Venta[] = [];

  showNoSalesMessage: boolean;

  constructor(
    private ventaService: VentaService,
    private genericMessageService: GenericMessageService,
  ) { }

  ngOnInit(): void {
    this.ventaService.listarVentasRecientesDeCliente(1).subscribe( 
      (res: Venta[]) => {
        this.ventas = res;
        console.log(res);
        this.showNoSalesMessage = this.ventas.length == 0;
        this.progressBar.mode = "determinate";
      },
      (error: any) => {
          this.genericMessageService.messageEvent.next(new Message('error', 'Mensaje informativo', 'Sucedió un error al recuperar los productos'));
          this.progressBar.mode = "determinate";
      }
    );

  }

  parseDateToString(date: any){
    const dateTemp = new Date(date);
    return dateTemp.toLocaleString('es-ES');
  }

}
