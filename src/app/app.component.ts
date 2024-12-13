import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TablaAvanzadaComponent } from './tabla-avanzada/tabla-avanzada.component';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { SalaEsperaComponent } from './sala-espera/sala-espera.component';
import { GameInterfaceComponent } from "./game-interface/game-interface.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TablaAvanzadaComponent, CommonModule, InicioComponent, SalaEsperaComponent, GameInterfaceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Grupo1ProyectoU1';
}
