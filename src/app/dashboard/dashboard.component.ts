import { Component, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common'; // Import CommonModule

import * as JSC from 'jscharting';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements AfterViewInit {
  loading = true;
  error: string | null = null;
  chartData!: any[];
  chartContainer: any;
  symbol: string = 'AAPL';

  constructor(private httpClient: HttpClient) {}

  ngAfterViewInit() {
    // Construct the API URL
    const apiUrl = `https://api.twelvedata.com/time_series?symbol=${this.symbol}&interval=1day&apikey=demo`;

    // Make the API request using HttpClient
    this.httpClient.get(apiUrl).subscribe(
      (response: any) => {
        this.chartData = response.values.map((item: any) => [
          new Date(item.datetime),
          parseFloat(item.open),
          parseFloat(item.high),
          parseFloat(item.low),
          parseFloat(item.close),
        ]);
        this.renderChart();
        this.loading = false;
      },
      (error) => {
        this.error = error.message || 'An error occurred while fetching data.';
        this.loading = false;
      }
    );
  }

  renderChart() {
    console.log(this.chartData);

    // Initialize JSCharting candlestick chart
    new JSC.Chart('chartContainer', {
      type: 'candlestick',
      legend: {
        template: '%icon %name',
        position: 'inside top left',
      },
      yAxis_formatString: 'c',
      xAxis_crosshair_enabled: true,
      defaultPoint_tooltip:
        'Change: <b>{%close-%open}</b><br>Open: %open<br/>High: %high<br/>Low: %low<br/>Close: %close',
      xAxis_scale_type: 'time',
      series: [
        {
          name: this.symbol,
          points: this.chartData,
        },
      ],
    });
  }
}
