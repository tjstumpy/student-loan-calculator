import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BaseComponent } from './base/base.component';
import { OutputGraphComponent } from './base/output-graph/output-graph.component';
import { OutputInfoComponent } from './base/output-info/output-info.component';
import { InputStudentLoanComponent } from './base/input-student-loan/input-student-loan.component';
import { InputNetWorthComponent } from './base/input-net-worth/input-net-worth.component';
import { OutputPaymentComponent } from './base/output-payment/output-payment.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HighchartsChartComponent, HighchartsChartModule } from 'highcharts-angular';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BaseComponent,
    OutputGraphComponent,
    OutputInfoComponent,
    InputStudentLoanComponent,
    InputNetWorthComponent,
    OutputPaymentComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HighchartsChartModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
