import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

export type TablaFila = {
  Fecha: string;
  [key: string]: string | number | null;
};

@Component({
  selector: 'app-tabla-avanzada',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tabla-avanzada.component.html',
  styleUrls: ['./tabla-avanzada.component.css']
})
export class TablaAvanzadaComponent {
  // Datos para la tabla
  tablaDatos: TablaFila[] = [
    { Fecha: '1/3', 'Jugador 1': null, 'Jugador 2': null, 'Jugador 3': null, 'Jugador 4': null, 'Jugador 5': null, 'Jugador 6': null },
    { Fecha: '2/3', 'Jugador 1': null, 'Jugador 2': null, 'Jugador 3': null, 'Jugador 4': null, 'Jugador 5': null, 'Jugador 6': null },
    { Fecha: '1/4', 'Jugador 1': null, 'Jugador 2': null, 'Jugador 3': null, 'Jugador 4': null, 'Jugador 5': null, 'Jugador 6': null },
    { Fecha: '2/4', 'Jugador 1': null, 'Jugador 2': null, 'Jugador 3': null, 'Jugador 4': null, 'Jugador 5': null, 'Jugador 6': null },
    { Fecha: '1/5', 'Jugador 1': null, 'Jugador 2': null, 'Jugador 3': null, 'Jugador 4': null, 'Jugador 5': null, 'Jugador 6': null },
    { Fecha: '2/5', 'Jugador 1': null, 'Jugador 2': null, 'Jugador 3': null, 'Jugador 4': null, 'Jugador 5': null, 'Jugador 6': null },
    { Fecha: 'Escalera', 'Jugador 1': null, 'Jugador 2': null, 'Jugador 3': null, 'Jugador 4': null, 'Jugador 5': null, 'Jugador 6': null },
    { Fecha: 'TOTAL', 'Jugador 1': 0, 'Jugador 2': 0, 'Jugador 3': 0, 'Jugador 4': 0, 'Jugador 5': 0, 'Jugador 6': 0 }
  ];

  // Propiedades para mostrar mensajes de alerta
  mensajeAlerta: string | null = null;
  mostrarAlerta: boolean = false;

  // Fichas iniciales para cada jugador
  fichasJugadores: { [key: string]: number } = {
    'Jugador 1': 10,
    'Jugador 2': 10,
    'Jugador 3': 10,
    'Jugador 4': 10,
    'Jugador 5': 10,
    'Jugador 6': 10
  };

  // Totales para cada jugador
  totales: { [key: string]: number } = {
    'Jugador 1': 0,
    'Jugador 2': 0,
    'Jugador 3': 0,
    'Jugador 4': 0,
    'Jugador 5': 0,
    'Jugador 6': 0
  };

  constructor() {
    setTimeout(() => this.recalcularTotales(), 0);
  }

  // Recalcular totales
  recalcularTotales(): void {
    Object.keys(this.totales).forEach((key) => {
      this.totales[key] = 0;
    });

    this.tablaDatos.forEach((fila, index) => {
      if (index < this.tablaDatos.length - 1) {
        Object.keys(this.totales).forEach((key) => {
          if (fila[key] !== null && typeof fila[key] === 'number') {
            this.totales[key] += fila[key] as number;
          }
        });
      }
    });

    this.tablaDatos[this.tablaDatos.length - 1] = {
      ...this.tablaDatos[this.tablaDatos.length - 1],
      ...this.totales
    };
  }

  // Validar entrada de datos
  validarEntrada(event: any, fila: TablaFila, columna: string): void {
    const valor = event.target.value;
    if (!/^[1-9]\d*$/.test(valor)) {
      this.mostrarAlertaConMensaje(`El valor ingresado en ${columna} no es válido. Ingrese un número positivo.`);
      fila[columna] = null;
      event.target.value = '';
    } else {
      fila[columna] = parseInt(valor, 10);
      this.recalcularTotales();
    }
  }

  // Comprar fichas
  comprarFichas(jugador: string): void {
    if (this.fichasJugadores[jugador] > 0) {
      this.fichasJugadores[jugador]--;
    } else {
      this.mostrarAlertaConMensaje(`El jugador ${jugador} no tiene fichas disponibles.`);
    }
  }

  // Mostrar alerta con mensaje
  mostrarAlertaConMensaje(mensaje: string): void {
    this.mensajeAlerta = mensaje;
    this.mostrarAlerta = true;
    setTimeout(() => {
      this.mensajeAlerta = null;
      this.mostrarAlerta = false;
    }, 3000);
  }
}
