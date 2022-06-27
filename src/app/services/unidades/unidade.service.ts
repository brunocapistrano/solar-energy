import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Unidade as Unidade } from 'src/app/interfaces/unidade';


@Injectable({
  providedIn: 'root'
})
export class UnidadesService {

  private url = "http://localhost:3000/unidades"

  constructor(private _httpClient: HttpClient) { }

  public getUnidades(): Observable<Unidade[]> { 
    return this._httpClient.get<Unidade[]>(this.url);
  }

  public getUnidade(id:number): Observable<Unidade> {
    return this._httpClient.get<Unidade>(this.url+'/'+id);
  }

  public postUnidades(unidade:Unidade) {
    return this._httpClient.post(this.url, unidade)
  }

  public putUnidade(id:number,unidade:Unidade) {
    return this._httpClient.put(this.url+'/'+id,unidade)
  }

  public deleteUnidade(unidade:Unidade) {
    return this._httpClient.delete(this.url+'/'+unidade.id)
  }

}
