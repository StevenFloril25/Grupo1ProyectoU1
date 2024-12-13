import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

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
      alert('¡Código correcto! Te has unido a la partida.');
      this.closeModal();
    } else {
      alert('Código incorrecto. Inténtalo de nuevo.');
    }
  }

  // Copiar el código al portapapeles
  copyCode() {
    navigator.clipboard.writeText(this.gameCode).then(() => {
     alert('Código copiado al portapapeles.');
    });
  }

  // Crear una nueva partida
  createGame() {
    const newGame = `Partida-${this.games.length + 1}`; // Genera el nombre de la partida
    if (!this.games.includes(newGame)) {
      this.games.push(newGame); // Guarda la partida en la lista
      alert(`Nueva partida creada: ${newGame}`);
    } else {
      alert('La partida ya existe.');
    }
  }

  openModal() {
    this.isModalOpen = true;
  }

  // Unirse a una partida
  joinGame(game: string) {
    alert(`¡Te uniste a la partida: ${game}!`);
    this.closeModal(); // Cierra el modal después de unirse
  }
}
