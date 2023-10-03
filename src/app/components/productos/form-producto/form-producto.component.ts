import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatProgressBar } from '@angular/material/progress-bar';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Categoria } from 'src/app/models/categoria';
import { Producto } from 'src/app/models/producto';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-form-producto',
  templateUrl: './form-producto.component.html',
  styleUrls: ['./form-producto.component.css']
})
export class FormProductoComponent implements OnInit {

  @ViewChild('progressBar') progressBar: MatProgressBar;
  @ViewChild('progressBarBottom') progressBarBottom: MatProgressBar;


  producto: Producto;

  categorias: Categoria[] = [];

  categoria: Categoria;

  productForm: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productoService: ProductoService,
    private fb: FormBuilder,
    private categoriaService: CategoriaService,
  ) { }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      nombre: [undefined, [Validators.required, Validators.min(3) ]],
      precio: [undefined, [Validators.required, Validators.min(1)]],
      marca: [undefined, [Validators.required, Validators.min(3)]],
      idCategoria: [undefined, [Validators.required]],
    });

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.productoService.findById(params.get('id')).subscribe(res => {
        this.producto = res;
        console.log(this.producto);
        this.productForm.get('nombre').setValue(this.producto.descripcion);
        this.productForm.get('precio').setValue(this.producto.precio);
        this.productForm.get('marca').setValue(this.producto.marca.nombre);
        this.productForm.get('idCategoria').setValue(this.producto.categoria.id);
        this.categoria = this.producto.categoria;
      })

      this.categoriaService.getCategorias().subscribe(res => {
        this.categorias = res;
      })


      

    });

  }

  saveProduct():void{
    this.progressBarBottom.mode = 'query';
    this.progressBarBottom.color = 'accent';
    this.progressBar.mode = 'indeterminate';
    this.progressBar.color = 'accent';
  }

  redirectToList():void{
    this.router.navigate(['productos']).then();
  }

}
