
//here, all of the modules used in pur project are imported and all of the main  componetns are declared 
// ( except for the shared ones, they're declared in shared.modules.ts )


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DefaultComponent} from './default.component'
import {DashboardComponent} from 'src/app/modules/dashboard/dashboard.component'
import {RouterModule} from '@angular/router';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import {SharedModule} from 'src/app/shared/shared.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import { DashboardService } from 'src/app/modules/dashboard.service';
import { AppleDataService } from 'src/app/modules/apple.data.service';
import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    HighchartsChartModule
 
  ],
  providers: [
    DashboardService,
    AppleDataService,
  ]
})
export class DefaultModule { }
