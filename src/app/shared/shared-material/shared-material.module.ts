import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDialogModule} from '@angular/material/dialog';
import { PoModalModule } from '@po-ui/ng-components';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatTabsModule,
    MatDialogModule,
    PoModalModule
    
  ],
  exports: [
    MatCardModule,
    MatTabsModule,
    MatDialogModule,
    PoModalModule
  ]
})
export class SharedMaterialModule { }
