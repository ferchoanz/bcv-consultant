import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HtmlService {
  private parser = new DOMParser();

  convertStringToHtml(htmlContent: string): Document {
    return this.parser.parseFromString(htmlContent, 'text/html');
  }
}
