import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormDialogComponent } from './components/form-dialog/form-dialog.component';
import { ChartsComponent } from './components/charts/charts.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    FormDialogComponent,
    ChartsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-external-libraries';
}
