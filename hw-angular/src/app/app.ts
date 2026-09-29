import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  cliques = signal(0);
  incrementar() {
    this.cliques.update(v => v + 1);
  }
}