import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';

import { PoModalModule } from '@po-ui/ng-components';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatTabsModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    PoModalModule
    
  ],
  exports: [
    MatCardModule,
    MatTabsModule,
    MatDialogModule,
    MatPaginatorModule,
    MatTableModule,
    PoModalModule
  ]
})
export class SharedMaterialModule { }
