import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TablaAvanzadaComponent } from './tabla-avanzada/tabla-avanzada.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TablaAvanzadaComponent, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Grupo1ProyectoU1';
}
