import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Definir el tipo de fila con acceso dinámico
type TablaFila = {
  Fecha: string;
  [key: string]: string | number; // Permite acceso dinámico con índices
};

@Component({
  selector: 'app-tabla-avanzada',
  imports: [CommonModule, FormsModule],
  templateUrl: './tabla-avanzada.component.html',
  styleUrls: ['./tabla-avanzada.component.css']
})
export class TablaAvanzadaComponent {
  tablaDatos: TablaFila[] = [
    { Fecha: '1/3', Joyner: 79, Nelson: 16, Dario: 0, Mario: 7, Mateo: 40, Inge: 41 },
    { Fecha: '2/3', Joyner: 22, Nelson: 110, Dario: 27, Mario: 13, Mateo: 23, Inge: 0 },
    { Fecha: '1/4', Joyner: 100, Nelson: 135, Dario: 80, Mario: 0, Mateo: 76, Inge: 30 },
    { Fecha: '2/4', Joyner: 152, Nelson: 15, Dario: 155, Mario: 2, Mateo: 24, Inge: 0 },
    { Fecha: '1/5', Joyner: 28, Nelson: 112, Dario: 0, Mario: 76, Mateo: 12, Inge: 29 },
    { Fecha: '2/5', Joyner: 25, Nelson: 98, Dario: 177, Mario: 73, Mateo: 6, Inge: 0 },
    { Fecha: 'Escalera', Joyner: 0, Nelson: 0, Dario: 5, Mario: 0, Mateo: 0, Inge: 0 },
    { Fecha: 'TOTAL', Joyner: 0, Nelson: 0, Dario: 0, Mario: 0, Mateo: 0, Inge: 0 }
  ];

  constructor() {
    this.recalcularTotales();
  }

  recalcularTotales(): void {
    const totalRow = this.tablaDatos[this.tablaDatos.length - 1];

    // Inicializar totales
    Object.keys(totalRow).forEach((key) => {
      if (key !== 'Fecha') {
        totalRow[key] = 0; // Resetear el total a 0
      }
    });

    // Calcular los totales
    this.tablaDatos.forEach((fila, index) => {
      if (index < this.tablaDatos.length - 1) {
        Object.keys(fila).forEach((key) => {
          if (key !== 'Fecha' && typeof fila[key] === 'number' && typeof totalRow[key] === 'number') {
            totalRow[key] = (totalRow[key] as number) + (fila[key] as number);
          }
        });
      }
    });
  }
}
