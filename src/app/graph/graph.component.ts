import { Component, OnInit, Input, NgZone, OnDestroy, AfterContentInit } from '@angular/core';
import Issue from 'src/models/Issue';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit, OnDestroy, AfterContentInit {

  @Input() allIssues: Issue[];

  private chart: am4charts.XYChart;

  constructor(private zone: NgZone) {
  }

  ngOnInit() {
  }

  ngAfterContentInit() {
    if (this.allIssues) {
      this.zone.runOutsideAngular(() => {
        const chart = am4core.create('graphContainer', am4charts.XYChart);

        // ... chart code goes here ...
        chart.paddingRight = 20;
        const data = [];

        // used to count the number of days
        const countDays = () => {
          const today = new Date();
          const month = today.getMonth();
          return daysInMonth(month + 1, today.getFullYear());
        };

        const daysInMonth = (month, year) => {
          return new Date(year, month, 0).getDate();
        };

        // getting the today's date
        const currentDate = new Date();
        const currentMonth = currentDate.getMonth();
        const currentYear = currentDate.getFullYear();

        // assigning number of days to a varibale
        const numberOfDays = countDays();

        // loop through each date in a month
        for (let i = 1; i <= numberOfDays; i++) {
          const numberOfIssues = this.allIssues.filter((issue) => {
            return new Date(issue.updated_at).getDate() === new Date(currentYear, currentMonth, i).getDate();
          }).length;

          data.push({ date: new Date(currentYear, currentMonth, i), name: 'name' + i, value: numberOfIssues });
        }

        chart.data = data;
        chart.colors.step = 2;

        const dateAxis = chart.xAxes.push(new am4charts.DateAxis());
        dateAxis.renderer.grid.template.location = 0;
        dateAxis.renderer.minGridDistance = 50;
        dateAxis.renderer.line.strokeOpacity = 1;
        dateAxis.renderer.line.strokeWidth = 2;

        const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.tooltip.disabled = true;
        valueAxis.renderer.minWidth = 35;
        valueAxis.renderer.line.strokeOpacity = 1;
        valueAxis.renderer.line.strokeWidth = 2;

        const series = chart.series.push(new am4charts.LineSeries());
        series.dataFields.dateX = 'date';
        series.dataFields.valueY = 'value';
        series.strokeWidth = 2;
        series.tooltipText = '{valueY.value}';
        series.tensionX = 0.8;
        series.name = 'Number of Issues';

        valueAxis.renderer.line.stroke = series.stroke;
        valueAxis.renderer.labels.template.fill = series.stroke;
        valueAxis.renderer.grid.template.disabled = true;
        chart.cursor = new am4charts.XYCursor();

        // Add legend
        chart.legend = new am4charts.Legend();



        this.chart = chart;
      });
    }

  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }

}

