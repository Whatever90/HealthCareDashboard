import { Component, Input, OnChanges } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { DiagnosisHistory } from '../../../../../patient.service';

@Component({
  selector: 'chart',
  imports: [BaseChartDirective],
  templateUrl: './chart.html',
  styleUrl: './chart.css',
})
export class Chart implements OnChanges {
  @Input() diagnosis_history: DiagnosisHistory[] = [];

  lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'Systolic',
        borderColor: '#E66FD2',
        backgroundColor: '#E66FD2',
        pointBackgroundColor: '#E66FD2',
        pointBorderColor: '#FFFFFF',
        pointBorderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 6,
        borderWidth: 2,
        tension: 0.4,
      },
      {
        data: [],
        label: 'Diastolic',
        borderColor: '#8C6FE6',
        backgroundColor: '#8C6FE6',
        pointBackgroundColor: '#8C6FE6',
        pointBorderColor: '#FFFFFF',
        pointBorderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 6,
        borderWidth: 2,
        tension: 0.4,
      },
    ],
  };

  lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#072635',
          font: {
            size: 12,
          },
        },
      },
      y: {
        min: 60,
        max: 180,
        ticks: {
          stepSize: 20,
          color: '#072635',
          font: {
            size: 12,
          },
        },
        grid: {
          color: '#CBC8D4',
        },
      },
    },
    elements: {
      line: {
        fill: false,
      },
    },
  };

  ngOnChanges(): void {
    const history = this.diagnosis_history.slice(0, 6).reverse();

    this.lineChartData = {
      labels: history.map((item) => `${item.month.slice(0, 3)}, ${item.year}`),
      datasets: [
        {
          ...this.lineChartData.datasets[0],
          data: history.map((item) => item.blood_pressure.systolic.value),
        },
        {
          ...this.lineChartData.datasets[1],
          data: history.map((item) => item.blood_pressure.diastolic.value),
        },
      ],
    };
  }
}
