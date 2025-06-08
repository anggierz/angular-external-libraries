import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { DialogFormComponent } from '../dialog-form/dialog-form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, DialogFormComponent],
  templateUrl: './form-dialog.component.html',
  styleUrl: './form-dialog.component.scss'
})
export class FormDialogComponent {

  datos: any;

  constructor(public dialog: MatDialog) {}

  abrirDialogo(): void {
    const dialogRef = this.dialog.open(DialogFormComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.datos = result;
      }
    });
  }

}
