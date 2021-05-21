import { Component, OnInit } from '@angular/core';
import { Icrypto } from 'src/model/Icrypto.model';

import { NomicsApi } from '../../services/nomics-api.service';

@Component({
  selector: 'app-cryptotable',
  templateUrl: './cryptotable.component.html',
  styleUrls: ['./cryptotable.component.scss']
})
export class CryptotableComponent implements OnInit {

  cryptos: any = [];

  dropdownList = [];
  selectedItems = ['XRP'];
  dropdownSettings = {};

  constructor(private api: NomicsApi) { }

  ngOnInit(): void {
    this.api.getCryptocurrency(this.selectedItems).subscribe(
      data =>{
        this.cryptos = data;
      }
    );
  }

  getCoins(){

  }

}
