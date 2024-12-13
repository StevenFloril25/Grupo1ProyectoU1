import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Definir el tipo de fila con acceso dinámico
export type TablaFila = {
  Fecha: string;
  [key: string]: string | number | null; // Permitir valores nulos
};

@Component({
  selector: 'app-tabla-avanzada',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tabla-avanzada.component.html',
  styleUrls: ['./tabla-avanzada.component.css']
})
export class TablaAvanzadaComponent {
  @Input() tablaDatos: TablaFila[] = []; // Recibe los datos desde un componente padre
  @Output() totalesCalculados = new EventEmitter<{ [key: string]: number }>(); // Emite el total calculado

  mensajeAlerta: string | null = null; // Mensaje para las alertas
  mostrarAlerta: boolean = false; // Estado para mostrar/ocultar la alerta

  // Fichas iniciales para cada jugador
  fichasJugadores: { [key: string]: number } = {
    Joyner: 10,
    Nelson: 10,
    Dario: 10,
    Mario: 10,
    Mateo: 10,
    Inge: 10,
  };

  // Totales de cada jugador
  totales: { [key: string]: number } = {
    Joyner: 0,
    Nelson: 0,
    Dario: 0,
    Mario: 0,
    Mateo: 0,
    Inge: 0,
  };

  constructor() {
    setTimeout(() => this.recalcularTotales(), 0);
  }

  // Método para recalcular los totales
  recalcularTotales(): void {
    // Reiniciar los totales
    Object.keys(this.totales).forEach((key) => {
      this.totales[key] = 0;
    });

    // Calcular los totales sumando los valores válidos de la tabla
    this.tablaDatos.forEach((fila, index) => {
      if (index < this.tablaDatos.length - 1) {
        Object.keys(this.totales).forEach((key) => {
          if (
            fila[key] !== null &&
            typeof fila[key] === 'number' &&
            typeof this.totales[key] === 'number'
          ) {
            this.totales[key] += fila[key] as number;
          }
        });
      }
    });

    // Emitir los totales actualizados
    this.totalesCalculados.emit(this.totales);
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

  // Mostrar alerta con un mensaje
  mostrarAlertaConMensaje(mensaje: string): void {
    this.mensajeAlerta = mensaje;
    this.mostrarAlerta = true;
    setTimeout(() => {
      this.mensajeAlerta = null;
      this.mostrarAlerta = false;
    }, 3000);
  }
}
