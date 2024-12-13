import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TablaAvanzadaComponent } from './tabla-avanzada/tabla-avanzada.component';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { SalaEsperaComponent } from './sala-espera/sala-espera.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,TablaAvanzadaComponent,CommonModule, InicioComponent,SalaEsperaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Grupo1ProyectoU1';
}
