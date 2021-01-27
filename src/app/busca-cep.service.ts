import { ICEP } from './cep.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class BuscaCEPService {

  constructor(
    private httpClient: HttpClient
  ) { }

  buscarCEP(cep: string) {
    return this.httpClient.get<ICEP>(`http://viacep.com.br/ws/${cep}/json`)
    
  } 

}
