import { Game } from './../game';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'all-games',
  templateUrl: './all-games.component.html',
  styleUrls: ['./all-games.component.css']
})
export class AllGamesComponent implements OnInit {
  game: Game = {
    id: 1,
    name: "Catan"
  };
  games=GAMES;
  selectedGame: Game;
  onSelect(game: Game): void{
    this.selectedGame = game;
  }
  constructor() { }

  ngOnInit() {
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

