import { Currencies } from './model/currencies.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrencyListService {

  private currencies: Currencies = {
     'ISR': {
      currency: 'shekel',
      weight: 10
    },
    'EUR': {
      currency: 'euro',
      weight: 10
    },
    'USD': {
      currency: 'dollar',
      weight: 10
    },
    'GBP': {
      currency: 'pound sterling',
      weight: 10
    }
  };

  getCurrencies(): Currencies {
    return this.currencies;
  }

  generateBaseCurrencies(currencyCodes: string[]): Currencies {
    const baseCurrencies = currencyCodes.reduce((prevValue, currentValue) => {
      if (this.currencies[currentValue]) {
        prevValue[currentValue] = this.currencies[currentValue];
      }
      return prevValue;
    }, {});
    return baseCurrencies;
  }
}
