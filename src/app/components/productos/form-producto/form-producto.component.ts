import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-form-producto',
  templateUrl: './form-producto.component.html',
  styleUrls: ['./form-producto.component.css']
})
export class FormProductoComponent implements OnInit {

  producto: Producto;

  constructor(
    private route: ActivatedRoute,
    private productoService: ProductoService,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.productoService.findById(params.get('id')).subscribe(res => {
        this.producto = res;
        console.log(this.producto);
      })
    });

  }

}
