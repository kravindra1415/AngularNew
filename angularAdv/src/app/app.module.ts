import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomPipe } from './customPipe/customPipe';
import { LowerAndUpper } from './customPipe/LowerAndUpper';

@NgModule({
  declarations: [
    AppComponent,
    CustomPipe,
    LowerAndUpper
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
