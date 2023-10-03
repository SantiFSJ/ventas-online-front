import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatProgressBar } from '@angular/material/progress-bar';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Categoria } from 'src/app/models/categoria';
import { Marca } from 'src/app/models/marca';
import { Message } from 'src/app/models/message';
import { Producto } from 'src/app/models/producto';
import { CategoriaService } from 'src/app/services/categoria.service';
import { GenericMessageService } from 'src/app/services/generic-message.service';
import { MarcaService } from 'src/app/services/marca.service';
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
  marcas: Marca[] = [];

  categoria: Categoria;

  marca: Marca;

  productForm: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productoService: ProductoService,
    private fb: FormBuilder,
    private categoriaService: CategoriaService,
    private messageService: GenericMessageService,
    private marcaService: MarcaService,
  ) { }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      nombre: [undefined, [Validators.required, Validators.min(3) ]],
      precio: [undefined, [Validators.required, Validators.min(1)]],
      idMarca: [undefined, [Validators.required]],
      idCategoria: [undefined, [Validators.required]],
    });

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.productoService.findById(params.get('id')).subscribe(res => {
        this.producto = res;
        this.productForm.get('nombre').setValue(this.producto.descripcion);
        this.productForm.get('precio').setValue(this.producto.precio);
        this.productForm.get('idMarca').setValue(this.producto.marca.id);
        this.productForm.get('idCategoria').setValue(this.producto.categoria.id);
        this.categoria = this.producto.categoria;
        this.marca = this.producto.marca;
      })

      this.categoriaService.getCategorias().subscribe(res => {
        this.categorias = res;
      })

      this.marcaService.getMarcas().subscribe(res => {
        this.marcas = res
      })


      

    });

  }

  saveProduct():void{
    this.progressBarBottom.mode = 'query';
    this.progressBarBottom.color = 'accent';
    this.progressBar.mode = 'indeterminate';
    this.progressBar.color = 'accent';

    this.producto.categoria = this.categoria;
    this.producto.descripcion = this.productForm.get('nombre').value;
    this.producto.precio = this.productForm.get('precio').value;
    this.producto.marca = this.marca;

    this.productoService.update(this.producto).subscribe(
      (res: any) => { 
        this.messageService.messageEvent.next(new Message('success', 'Mensaje informativo', 'Los cambios se guardarón exitosamente!'));
        this.progressBarBottom.mode = 'determinate';
        this.progressBar.mode = 'determinate';
      },
      (error: any) => {
        this.messageService.messageEvent.next(new Message('error', 'Mensaje informativo', error.error.message)); 
        this.progressBarBottom.mode = 'determinate';
        this.progressBar.mode = 'determinate';
        this.progressBar.color = 'warn';
        this.progressBarBottom.color = 'warn';

      }
    );

  }

  redirectToList():void{
    this.router.navigate(['productos']).then();
  }

}
