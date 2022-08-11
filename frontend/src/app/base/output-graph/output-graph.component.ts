import { style } from '@angular/animations';
import { Component, OnInit, Input, Output, EventEmitter, SimpleChange, SimpleChanges } from '@angular/core';

import * as Highcharts from "highcharts";

import { DataO } from 'src/app/data-output';

@Component({
  selector: 'app-output-graph',
  templateUrl: './output-graph.component.html',
  styleUrls: ['./output-graph.component.css', '../../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class OutputGraphComponent implements OnInit {

  @Input() data!: DataO;

  constructor() { }
  
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      renderTo: "chart",
      backgroundColor: '#181818',
      height: (9 / 16 * 100) + '%',
    },
    title: {
      style: {
        color: 'white',
        fontFamily: 'Roboto'
      },
      text: 'Net Worth Impact - Loan Comparison'
    },
    subtitle: {
      style: {
        color: '#FDB515',
        fontFamily: 'Roboto'
      },
      text: 'Source: API Request'
    },
    legend: {
      itemStyle: {
        color: 'white'
      }
    },
    xAxis: {
      title: {
        text: 'Years',
        style: {
          color: 'white',
          fontSize: '1.25em',
          fontFamily: 'Roboto'
        }
      },
      labels: {
        style: {
          color: 'white',
          fontFamily: 'Roboto'
        }
      }
    },
    yAxis: [{
      title: {
        text: 'USD ($)',
        style:{
          color: 'white',
          fontSize: '1.25em',
          fontFamily: 'Roboto'
        }
      },
      labels: {
        style: {
          color: 'white',
          fontFamily: 'Roboto'
        }
      }
    }, {
    title: {
      text: ' '
    },
      linkedTo: 0,
      opposite: true,
      labels: {
        style: {
          color: 'white',
          fontFamily: 'Roboto'
        }
      }
    }],
    series: [
      { //defeine net worth display
        name: "Net Worth Impact",
        type: "line",
        data: [],
        color: '#FDB515'
      },
      { //define loan display
        name: "Remaining Loan",
        type: "line",
        data: [],
        color: '#8700ff',
      }
    ]
  }; //end of highcharts options;
  chart: Highcharts.Chart;

  ngOnInit(): void {
    this.sleeping();
  }
  
  async sleeping() {
    const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
    await sleep(1000);
    this.chart = new Highcharts.Chart("chart", this.chartOptions);
    this.chart.series[0].setData(this.data.yearlyNetWorthImpact, true, true, true);
    this.chart.series[1].setData(this.data.yearlyRemainingLoanBalances, true, true, true);
  }

  ngOnChanges(changes: SimpleChanges) {
    if(!this.data.yearlyNetWorthImpact){
      this.data.yearlyNetWorthImpact = [];
      this.data.yearlyRemainingLoanBalances = [];
    }
      this.chart.series[0].setData(this.data.yearlyNetWorthImpact, true, true, true);
      this.chart.series[1].setData(this.data.yearlyRemainingLoanBalances, true, true, true);
  }
  
}