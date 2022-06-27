import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Geracao } from 'src/app/interfaces/geracao';

@Injectable({
  providedIn: 'root'
})
export class GeracaoService {

  private url = "http://localhost:3000/geracoes"

  constructor(private _httpClient: HttpClient) { }

  public getGeracoes(): Observable<Geracao[]> {
    return this._httpClient.get<Geracao[]>(this.url);
  }

  public postGeracoes(geracao:Geracao) {
    return this._httpClient.post(this.url, geracao)
  }

}
