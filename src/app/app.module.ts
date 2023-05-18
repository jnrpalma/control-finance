import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedMaterialModule } from './shared/shared-material/shared-material.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PoModalModule, PoModule } from '@po-ui/ng-components';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedMaterialModule,
    PoModule,
    HttpClientModule,
    PoModalModule,
    RouterModule.forRoot([])
  ],
  providers: [{ provide: MAT_DIALOG_DATA, useValue: {} }],
  bootstrap: [AppComponent]
})
export class AppModule { }
