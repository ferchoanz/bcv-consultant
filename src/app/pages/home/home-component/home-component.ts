import { HtmlService } from '@services/html-service/html-service';
import { Component, inject, signal } from '@angular/core';
import { BcvService } from '@services/bcv-service/bcv-service';

@Component({
  selector: 'app-home-component',
  imports: [],
  templateUrl: './home-component.html',
  styleUrl: './home-component.scss',
})
export class HomeComponent {
  private bcvService = inject(BcvService);
  private htmlService = inject(HtmlService);
  public dolarCurrency = signal<string>('0');
  public euroCurrency = signal<string>('0');

  async ngOnInit(): Promise<void> {
    const bcvRawHtml = await this.bcvService.getRawHtml();
    if (!bcvRawHtml) {
      return;
    }
    console.time('convertStringToHtml');
    const bcvDocument = this.htmlService.convertStringToHtml(bcvRawHtml);
    console.timeEnd('convertStringToHtml');
    this.dolarCurrency.set(this.bcvService.getDolarCurrency(bcvDocument));
    console.log({ dolarCurrency: this.dolarCurrency() });
    this.euroCurrency.set(this.bcvService.getEuroCurrency(bcvDocument));
    console.log({ euroCurrency: this.euroCurrency() });
  }
}
