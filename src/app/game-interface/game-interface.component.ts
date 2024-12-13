import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-game-interface',
  templateUrl: './game-interface.component.html',
  imports: [RouterModule],
  styleUrls: ['./game-interface.component.css']
})
export class GameInterfaceComponent implements OnInit {
  gameCode: string = '';
  games: string[] = []; // Lista de partidas disponibles
  isModalOpen: boolean = false; // Controla la visibilidad del modal
  isCopySuccess: boolean = false; // Controla la visibilidad del mensaje de copia
  codeInput: string = ''; // Código ingresado por el usuario

  ngOnInit() {
    this.generateGameCode();
  }

  // Generar un código único para la partida
  generateGameCode() {
    this.gameCode = Math.random().toString(36).substring(2, 10).toUpperCase();
  }

  // Cerrar el modal
  closeModal() {
    this.isModalOpen = false;
  }

  // Enviar el código ingresado en el modal
  submitCode(enteredCode: string) {
    if (enteredCode === this.gameCode) {
      Swal.fire({
        title: '¡Éxito!',
        text: '¡Código correcto! Te has unido a la partida.',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      });
      this.closeModal();
    } else {
      Swal.fire({
        title: 'Error',
        text: 'Código incorrecto. Inténtalo de nuevo.',
        icon: 'error',
        confirmButtonText: 'Reintentar'
      });
    }
  }

  // Copiar el código al portapapeles
  copyCode() {
    navigator.clipboard.writeText(this.gameCode).then(() => {
      Swal.fire({
        title: '¡Copiado!',
        text: 'Código copiado al portapapeles.',
        icon: 'success',
        timer: 1500,
        showConfirmButton: false
      });
    });
  }

  // Crear una nueva partida
  createGame() {
    const newGame = `Partida-${this.games.length + 1}`; // Genera el nombre de la partida
    if (!this.games.includes(newGame)) {
      this.games.push(newGame); // Guarda la partida en la lista
      Swal.fire({
        title: 'Nueva partida creada',
        text: `Nueva partida creada: ${newGame}`,
        icon: 'success',
        confirmButtonText: 'Aceptar'
      });
    } else {
      Swal.fire({
        title: 'Error',
        text: 'La partida ya existe.',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    }
  }

  openModal() {
    this.isModalOpen = true;
  }

  // Unirse a una partida
  joinGame(game: string) {
    Swal.fire({
      title: '¡Unido!',
      text: `¡Te uniste a la partida: ${game}!`,
      icon: 'success',
      confirmButtonText: 'Aceptar'
    });
    this.closeModal(); // Cierra el modal después de unirse
  }
}
