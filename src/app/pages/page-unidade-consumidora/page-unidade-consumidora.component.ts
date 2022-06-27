import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Unidade } from 'src/app/interfaces/unidade';
import { UnidadesService } from 'src/app/services/unidades/unidade.service';

@Component({
  selector: 'app-page-unidade-consumidora',
  templateUrl: './page-unidade-consumidora.component.html',
  styleUrls: ['./page-unidade-consumidora.component.scss']
})
export class PageUnidadeConsumidoraComponent implements OnInit {

  @Input() unidades!: Unidade[]

  @Input()
  public id:number = 0;
  @Input()
  public ativa!:boolean;
  @Input()
  public nome:string = '';
  @Input()
  public local:string = '';
  @Input()
  public marca:string = '';
  @Input()
  public modelo:string = '';
  
  public unidadesExistentes: Unidade[] = [];

  constructor(private _unidadesService: UnidadesService, private router: Router) { }

  ngOnInit(): void {

    this._unidadesService.getUnidades().subscribe(
      retorno => {
        this.unidadesExistentes = retorno
      }
    )

  }

  deletarUnidade(unidade: Unidade) {
    this._unidadesService.deleteUnidade(unidade).subscribe(()=> {
      this.router.navigate(['/unidades'])
    })
    
  }

}
