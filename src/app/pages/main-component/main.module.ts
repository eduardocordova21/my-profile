import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MainComponent } from './main.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from '../../services/data.service';
import { CardModule } from 'src/app/components/card/card.module';

@NgModule({
  declarations: [MainComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    CardModule,
  ],
  providers: [DataService],
  bootstrap: [MainComponent],
})
export class MainModule {}
