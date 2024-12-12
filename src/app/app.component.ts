import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TablaAvanzadaComponent } from './tabla-avanzada/tabla-avanzada.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,TablaAvanzadaComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Grupo1ProyectoU1';
}
