import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { MainModule } from './main/main.module';
import { SideMenuModule } from './side-menu/side-menu.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    MainModule,
    SideMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
