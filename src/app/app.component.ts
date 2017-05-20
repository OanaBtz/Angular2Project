import { Component } from '@angular/core';
import { Game } from './game';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Board Game Shop';
  game: Game = {
    id: 1,
    name: "Catan"
  };
  games=GAMES;
  selectedGame: Game;
  onSelect(game: Game): void{
    this.selectedGame = game;
  }
}

const GAMES: Game[] = [
  { id: 1, name: "Catan" },
  { id: 2, name: "Risk" },
  { id: 3, name: "Game of Thrones" },
  { id: 4, name: "Axis and Allies" },
  { id: 5, name: "Ticket to ride" },
  { id: 6, name: "Love Letter" },
  { id: 7, name: "King of Tokyo" },
  { id: 8, name: "Flux" },
  { id: 9, name: "Monopoly" },
];


