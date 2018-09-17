import { Injectable, Injector } from '@angular/core';
import {TranslateLoader} from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageLoaderService implements TranslateLoader {
  constructor(private inej: Injector) {}

  getTranslation(lang: string): Observable<any> {
    alert('Jsi Shri Ram! getTranslation is called!!!');
    let json = {};
    if (lang === 'en'){ 
      json = require('../../../assets/i18n/en.json');
    } else {
      json = require('../../../assets/i18n/fr.json');
    }
    const http = this.inej.get(HttpClient);
    return of(json);//http.get(`./assets/i18n/${lang}.json`);
  }
}
