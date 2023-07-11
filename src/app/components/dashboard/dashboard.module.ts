import { SharedMaterialModule } from 'src/app/shared/shared-material/shared-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { RevenuesCardComponent } from './revenues-card/revenues-card.component';
import { DebtsCardComponent } from './debts-card/debts-card.component';
import { BalanceTotalCardComponent } from './balance-total-card/balance-total-card.component';
import { DebtsComponent } from './debts/debts.component';
import { FooterComponent } from './footer/footer.component';
import { PoButtonModule, PoContainerModule, PoDividerModule, PoFieldModule, PoLoadingModule, PoModule, PoTabsModule } from '@po-ui/ng-components';
import { CardViewComponent } from './card-view/card-view.component';
import { AddRevenuesComponent } from './add-revenues/add-revenues.component';



@NgModule({
  declarations: [
    DashboardComponent,
    RevenuesCardComponent,
    DebtsCardComponent,
    BalanceTotalCardComponent,
    DebtsComponent,
    FooterComponent,
    CardViewComponent,
    AddRevenuesComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedMaterialModule,
    PoButtonModule,
    PoModule
  ],
  exports: [
  ]
})
export class DashboardModule { }
