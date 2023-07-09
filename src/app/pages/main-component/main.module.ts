import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MainComponent } from './main.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DataService } from '../../services/data.service';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CardComponent } from 'src/app/components/card/card.component';
import { LoadingComponent } from '../../components/loading/loading.component';
import { LanguageSelectorComponent } from '../../components/language-selector/language-selector.component';

@NgModule({
  declarations: [MainComponent, CardComponent, LoadingComponent, LanguageSelectorComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [DataService],
  bootstrap: [MainComponent],
})
export class MainModule {}

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
