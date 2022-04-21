import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login-form/logins.component';
import { Login } from './login/login.component';
import { component2 } from './my_folder/component2';
import { TemplateReference } from './TemplateReference/templateref.component';
import { Component1 } from './wai_components/Component1';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { FormsModule } from '@angular/forms';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { DisplayChildComponent } from './display-child/display-child.component';


@NgModule({
  declarations: [
    AppComponent,
    Component1,
    component2,
    TemplateReference,
    Login,
    LoginComponent,
    TwowaybindingComponent,
    ParentComponentComponent,
    DisplayChildComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
