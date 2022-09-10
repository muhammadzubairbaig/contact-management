import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/*
   *  ==============================
   *  Here we are importing modules and routing file
   *  ==============================
   */
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  entryComponents:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
