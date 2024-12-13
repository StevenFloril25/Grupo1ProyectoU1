import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TablaAvanzadaComponent } from './tabla-avanzada/tabla-avanzada.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TablaFila } from './tabla-avanzada/tabla-avanzada.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TablaAvanzadaComponent, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tablaDatos: TablaFila[] = [
    { Fecha: '1/3', Joyner: null, Nelson: null, Dario: null, Mario: null, Mateo: null, Inge: null },
    { Fecha: '2/3', Joyner: null, Nelson: null, Dario: null, Mario: null, Mateo: null, Inge: null },
    { Fecha: '1/4', Joyner: null, Nelson: null, Dario: null, Mario: null, Mateo: null, Inge: null },
    { Fecha: '2/4', Joyner: null, Nelson: null, Dario: null, Mario: null, Mateo: null, Inge: null },
    { Fecha: '1/5', Joyner: null, Nelson: null, Dario: null, Mario: null, Mateo: null, Inge: null },
    { Fecha: '2/5', Joyner: null, Nelson: null, Dario: null, Mario: null, Mateo: null, Inge: null },
    { Fecha: 'Escalera', Joyner: null, Nelson: null, Dario: null, Mario: null, Mateo: null, Inge: null },
    { Fecha: 'TOTAL', Joyner: 0, Nelson: 0, Dario: 0, Mario: 0, Mateo: 0, Inge: 0 }
  ];

  // Método para manejar los totales calculados desde el componente hijo
  onTotalesCalculados(totales: { [key: string]: number }): void {
    console.log('Totales calculados:', totales);
    this.tablaDatos[this.tablaDatos.length - 1] = {
      ...this.tablaDatos[this.tablaDatos.length - 1],
      ...totales
    };
  }
}
