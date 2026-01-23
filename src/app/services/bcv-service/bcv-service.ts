import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BcvService {
  private httpClient = inject(HttpClient);

  async getRawHtml(): Promise<string | null> {
    try {
      return await firstValueFrom(this.httpClient.get(environment.bcvUrl, { responseType: 'text' }));
    } catch (error: any) {
      console.log(error);
      return null;
    }
  }

  getDolarCurrency(doc: Document): string {
    const text = doc.querySelector('#dolar strong')?.textContent;
    if (!text) {
      return '0';
    }
    return parseFloat(text.trim().replace(',', '.')).toFixed(2);
  }

  getEuroCurrency(doc: Document): string {
    const text = doc.querySelector('#euro strong')?.textContent;
    if (!text) {
      return '0';
    }
    return parseFloat(text.trim().replace(',', '.')).toFixed(2);
  }
}
