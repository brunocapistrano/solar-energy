import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Unidade } from 'src/app/interfaces/unidade';
import { UnidadesService } from 'src/app/services/unidades/unidade.service';

@Component({
  selector: 'app-page-editar-unidade',
  templateUrl: './page-editar-unidade.component.html',
  styleUrls: ['./page-editar-unidade.component.scss']
})
export class PageEditarUnidadeComponent implements OnInit {

  private idUnidade:number = 0;

  public unidade: Unidade | undefined;
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

  private routeSub: Subscription | undefined;

  constructor(private _unidadeService: UnidadesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // this.routeSub = this.route.params.subscribe(params => {
    //   this.idUnidade = params['id'];
    //   this._unidadeService.getUnidade(this.idUnidade).subscribe(
    //     unidade => {
    //       this.unidade = new Unidade(unidade)
    //       this.nome = this.unidade.nome
    //       this.ativa = this.unidade.ativa
    //       this.local = this.unidade.local
    //       this.marca = this.unidade.marca
    //       this.modelo = this.unidade.modelo
    //     }
    //   )
    // })
  }

  atualizarUnidade() {
    this._unidadeService.putUnidade(
      this.idUnidade, {
        ativa:this.ativa,
        local:this.local,
        marca:this.marca,
        modelo:this.modelo,
        nome:this.nome,
        id:this.idUnidade
      }
    ).subscribe(()=>{
      this.router.navigate(['/unidades'])
    })
  }

}

