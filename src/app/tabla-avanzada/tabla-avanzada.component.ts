import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tabla-avanzada',
  imports: [CommonModule],
  templateUrl: './tabla-avanzada.component.html',
  styleUrl: './tabla-avanzada.component.css'
})
export class TablaAvanzadaComponent {
  tablaDatos = [
    { Fecha: '1/3', Joyner: 79, Nelson: 16, Dario: '-', Mario: 7, Mateo: 40, Inge: 41 },
    { Fecha: '2/3', Joyner: 22, Nelson: 110, Dario: 27, Mario: 13, Mateo: 23, Inge: '-' },
    { Fecha: '1/4', Joyner: 100, Nelson: 135, Dario: 80, Mario: '-', Mateo: 76, Inge: 30 },
    { Fecha: '2/4', Joyner: 152, Nelson: 15, Dario: 155, Mario: 2, Mateo: 24, Inge: '-' },
    { Fecha: '1/5', Joyner: 28, Nelson: 112, Dario: '-', Mario: 76, Mateo: 12, Inge: 29 },
    { Fecha: '2/5', Joyner: 25, Nelson: 98, Dario: 177, Mario: 73, Mateo: 6, Inge: '-' },
    { Fecha: 'Escalera', Joyner: '-', Nelson: '-', Dario: 5, Mario: '-', Mateo: '-', Inge: '-' },
    { Fecha: 'TOTAL', Joyner: 406, Nelson: 436, Dario: 398, Mario: 171, Mateo: 181, Inge: 150 }
  ];
}
