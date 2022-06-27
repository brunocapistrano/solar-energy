import { Component, Input, OnInit } from '@angular/core';
import { Unidade } from 'src/app/interfaces/unidade';
import { UnidadesService } from 'src/app/services/unidades/unidade.service';

@Component({
  selector: 'app-page-nova-unidade',
  templateUrl: './page-nova-unidade.component.html',
  styleUrls: ['./page-nova-unidade.component.scss']
})
export class PageNovaUnidadeComponent implements OnInit {

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

  constructor(private _unidadeService: UnidadesService) { }

  ngOnInit(): void {
  }

  salvarGeracao() {
    let unidadeOj: Unidade = {
      ativa:this.ativa,
      local:this.local,
      marca:this.marca,
      modelo:this.modelo,
      nome:this.nome

    }
    this._unidadeService.postUnidades(unidadeOj).subscribe()
  }

}
