import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Modules } from './_modules';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ModalService } from './services/modal.service';

@NgModule({
  declarations: [AppComponent, NavigationComponent],
  imports: [BrowserModule, AppRoutingModule, Modules],
  providers: [ModalService],
  bootstrap: [AppComponent],
})
export class AppModule {}
