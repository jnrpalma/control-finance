import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedMaterialModule } from './shared/shared-material/shared-material.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PoModalModule, PoModule } from '@po-ui/ng-components';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MenuComponent } from './components/dashboard/menu/menu.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RevenuesCardComponent } from './components/dashboard/revenues-card/revenues-card.component';
import { FooterComponent } from './components/dashboard/footer/footer.component';
import { DebtsComponent } from './components/dashboard/debts/debts.component';
import { RevenuesComponent } from './components/dashboard/revenues/revenues.component';
import { BalanceTotalCardComponent } from './components/dashboard/balance-total-card/balance-total-card.component';
import { DebtsCardComponent } from './components/dashboard/debts-card/debts-card.component';
import { MessageHourComponent } from './components/dashboard/message-hour/message-hour.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MenuComponent,
    RevenuesCardComponent,
    DebtsCardComponent,
    BalanceTotalCardComponent,
    RevenuesComponent,
    DebtsComponent,
    FooterComponent,
    

  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
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
