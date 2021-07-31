import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Modules } from './_modules';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ModalService } from './services/modal.service';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [AppComponent, NavigationComponent, PageNotFoundComponent],
  imports: [BrowserModule, AppRoutingModule, Modules],
  providers: [ModalService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
