import { Component, OnInit, Input } from '@angular/core';
import { Geracao } from 'src/app/interfaces/geracao';
import { Unidade } from 'src/app/interfaces/unidade';
import { GeracaoService } from 'src/app/services/geracoes/geracao.service';
import { UnidadesService } from 'src/app/services/unidades/unidade.service';

@Component({
  selector: 'app-page-cadastro-de-energia-gerada',
  templateUrl: './page-cadastro-de-energia-gerada.component.html',
  styleUrls: ['./page-cadastro-de-energia-gerada.component.scss']
})
export class PageCadastroDeEnergiaGeradaComponent implements OnInit {

  
  public unidades:Unidade[] = [];
  
  @Input()
  public unidade!:Unidade;
  @Input()
  public data:string = '';
  @Input()
  public kw:number = 0;


  constructor(private _unidadeServices: UnidadesService, private _geracaoServices: GeracaoService) { }

  ngOnInit(): void {

    this._unidadeServices.getUnidades().subscribe(
      (unidades:Unidade[]) => {
        this.unidades = unidades
      }
    ) 
  }

  adicionarGeracao() {
    let geracaoOj: Geracao = {
      data:this.data,
      idUnidade:this.unidade.id || 0,
      kw:this.kw
    }
    this._geracaoServices.postGeracoes(geracaoOj).subscribe()
  }

}
