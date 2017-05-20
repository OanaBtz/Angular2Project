import { Component } from '@angular/core';

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
  }
}
export class Game {
  id: number;
  name: string;
}
