import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormsModule, NgForm } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dialog-form',
  standalone: true,
  imports: [CommonModule, FormsModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './dialog-form.component.html',
  styleUrl: './dialog-form.component.scss'
})
export class DialogFormComponent {

  formData = {
    nombre: '',
    email: '',
    direccion: ''
  };

  constructor(public dialogRef: MatDialogRef<DialogFormComponent>) {}

  cerrar(): void {
    this.dialogRef.close();
  }

  enviar(): void {
    this.dialogRef.close(this.formData);
  }

}
