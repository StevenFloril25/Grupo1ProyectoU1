import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { routes } from './app.routes'; // Importa las rutas

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule.forRoot(routes), RouterOutlet], // Configura las rutas y RouterOutlet
  template: `<router-outlet></router-outlet>`, // Contenedor para las rutas
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Grupo1ProyectoU1';
}
