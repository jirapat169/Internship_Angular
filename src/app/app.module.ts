import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Modules } from './_modules';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, Modules],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
