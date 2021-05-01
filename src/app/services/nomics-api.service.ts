import { Injectable } from '@angular/core';
import { HttpClient } from "@Angular/common/http";
import { Observable } from "rxjs";
import { Icrypto } from 'src/model/Icrypto.model';

@Injectable({
  providedIn: 'root'
})
export class NomicsApi {

  baseString: string = "https://api.nomics.com/v1/";
  apiKey: string = "0f9826294dca2d7891a9cc49521fb949"

  constructor(private http: HttpClient) {}

  public getCryptocurrency(coins: string[]):Observable<Icrypto[]>{
    return this.http.get<Icrypto[]>(this.urlConcatenator(this.baseString, this.apiKey, coins));
  }

  private urlConcatenator(baseString: string, apiKey: string, currency: string[]): string{
    return baseString +
      "currencies/ticker?key=" +
      apiKey +
      "&ids=" +
      currency +
      "&interval=1d,30d&convert=USD&per-page=100&page=1";

  }

}
