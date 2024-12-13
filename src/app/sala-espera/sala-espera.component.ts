import { Component, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-sala-espera',
  imports:[],
  templateUrl: './sala-espera.component.html',
  styleUrl: './sala-espera.component.css'
})
export class SalaEsperaComponent {
  constructor(private elRef: ElementRef) {}

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const gamingTable = this.elRef.nativeElement.querySelector('.gaming-table');
    const rect = gamingTable.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Suaviza el efecto dividiendo por un número mayor
    const rotateX = (centerY - y) / 40; // Ajuste más suave
    const rotateY = (x - centerX) / 40;

    gamingTable.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
    `;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    const gamingTable = this.elRef.nativeElement.querySelector('.gaming-table');
    // Transición suave al estado inicial
    gamingTable.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
  }
}

