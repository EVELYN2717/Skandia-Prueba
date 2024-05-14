import { Injectable, inject  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListCardInterface } from './interface/list-card.interface';

@Injectable({
  providedIn: 'root'
})
export class CardsProductsBalanceService {

  constructor(private readonly http: HttpClient) { }

  async getCardProducts () {

    return await new Promise((resolve, reject) => {
      this.http.get<ListCardInterface>('https://62e152f8fa99731d75d44571.mockapi.io/api/v1/test-front-end-skandia/cards')
      .subscribe(response => {
        resolve(response.listCard);
      }, (error) => {
        console.log(error);
        reject();
      });
    });
  }
}
