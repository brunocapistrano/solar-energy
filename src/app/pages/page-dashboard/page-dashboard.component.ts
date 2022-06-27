import { Component, Input, OnInit } from '@angular/core';
import { Geracao } from 'src/app/interfaces/geracao';
import { Unidade } from 'src/app/interfaces/unidade';
import { GeracaoService } from 'src/app/services/geracoes/geracao.service';
import { UnidadesService } from 'src/app/services/unidades/unidade.service';

@Component({
  selector: 'app-page-dashboard',
  templateUrl: './page-dashboard.component.html',
  styleUrls: ['./page-dashboard.component.scss']
})
export class PageDashboardComponent implements OnInit {

  @Input() unidades!: Unidade[]
  public numeroUnidade!:number;

  public unidadeAtiva!:number;
  public filtroUnidade!:Unidade[];

  public unidadeInativa!:number;


  @Input() geracao!: Geracao[]
  public mediaEnergia!:number;
  public filtroGeracao!:Geracao[];
  public somaEnergia!:number;


  constructor(private _unidadesService: UnidadesService, private _geracaoService: GeracaoService) { }



  ngOnInit(): void {

    this._unidadesService.getUnidades().subscribe(
      (unidades:Unidade[]) => {
        this.numeroUnidade = unidades.length
      }
    )

    this._unidadesService.getUnidades().subscribe(
      (unidade: Unidade[]) => {
        this.filtroUnidade = unidade.filter(unidade => unidade.ativa === true)
        this.unidadeAtiva = this.filtroUnidade.length
      }
    )

    this._unidadesService.getUnidades().subscribe(
      (unidade: Unidade[]) => {
        this.filtroUnidade = unidade.filter(unidade => unidade.ativa === false)
        this.unidadeInativa = this.filtroUnidade.length
        
      }
    )

    this._geracaoService.getGeracoes().subscribe(
      (geracoes: Geracao[]) => {
        this.somaEnergia = geracoes.reduce((acumulador, geracao) => {
          return acumulador + Number(geracao.kw)
        },0)
      }
    )

  }

}
