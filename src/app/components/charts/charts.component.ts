import { Component } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [NgxChartsModule],
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.scss'
})
export class ChartsComponent {


  lineChartData = [
    {
      name: 'Ventas',
      series: [
        { name: 'Enero', value: 5000 },
        { name: 'Febrero', value: 7200 },
        { name: 'Marzo', value: 6700 }
      ]
    }
  ];

  barChartData = [
    { name: 'Producto A', value: 4000 },
    { name: 'Producto B', value: 3000 },
    { name: 'Producto C', value: 5000 }
  ];

}
