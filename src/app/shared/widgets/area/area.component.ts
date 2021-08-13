import { Component, OnInit, Input } from '@angular/core';
import { LineController } from 'chart.js';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
HC_exporting(Highcharts)
// Module with declaration:
import AccessibilityModule from 'highcharts/modules/accessibility';



@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})


export class AreaComponent implements OnInit {

  constructor( ){}
  Highcharts: typeof Highcharts = Highcharts; // required
  chartConstructor: string = 'chart'; // optional string, defaults to 'chart'
  chartOptions: Highcharts.Options = { }; // required
  
  @Input() data: any = [];

  ngOnInit() {
    
   
      this.chartOptions = {

        chart: {
          zoomType: 'x'
      },
      title: {
          text: 'Temperature variation'
      },
      subtitle: {
          text: document.ontouchstart === undefined ?
              'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
      },
      xAxis: {
          type: 'datetime'
      },
      yAxis: [{
        min:0,
          title: {
              text: 'Temperature'
          }
      },{
        title: {
          text: 'Humidity'
        },
        opposite: true} ],
   
      plotOptions: {
        line: {
            dataLabels: {
                enabled: false
            },
            enableMouseTracking: true
        }
    },
      legend: {
          enabled: false
      },
     

      series: [{
          type: 'line',
          name: 'Temperature',
          color: 'rgb(220,20,60)',
          data: this.data
      },
      {
        type: 'line',
        name: 'Humidity',
        data: this.data,
        yAxis:1
    }]
    }
  }

}

HC_exporting(Highcharts);


setTimeout(() => {
  window.dispatchEvent(
    new Event('resize')
  );
}, 300)
