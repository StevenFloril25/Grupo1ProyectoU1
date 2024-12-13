import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { GameInterfaceComponent } from './game-interface/game-interface.component';
import { SalaEsperaComponent } from './sala-espera/sala-espera.component';
import { TablaAvanzadaComponent } from './tabla-avanzada/tabla-avanzada.component';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' }, // Redirige a inicio por defecto
  { path: 'inicio', component: InicioComponent },
  { path: 'game-interface', component: GameInterfaceComponent },
  { path: 'sala-espera', component: SalaEsperaComponent },
  { path: 'tabla-avanzada', component: TablaAvanzadaComponent },
];
