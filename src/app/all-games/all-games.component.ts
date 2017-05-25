import { Game } from './../game';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RouterModule, Routes, RouterOutlet } from '@angular/router';
import { Router} from '@angular/router';
import { FormGroup, ReactiveFormsModule, FormBuilder, Validators,FormControl } from '@angular/forms';
import { GameService } from '../game.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'all-games',
  templateUrl: './all-games.component.html',
  styleUrls: ['./all-games.component.css'],
  providers: [GameService]
})
export class AllGamesComponent implements OnInit {
  games=[];
  
  constructor( private gameService: GameService, public router: Router) { }

 private _sanitizer: DomSanitizer;

  getImage (image) {
     return this._sanitizer.bypassSecurityTrustStyle('url(${image})');
  }

  delete(id: string){
    this.gameService.deleteGame(id);
  }

  loadGame(){
    this.gameService.getGames().subscribe(data => this.games = data);
    // console.log(data.name)
  }

  // view_game(id: string){
  //   this.gameService.getGame(id);
  //   // console.log(this.gameService.getGame(id));
  // }


  ngOnInit() {
    this.loadGame();
  }

}


