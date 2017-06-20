import { Game } from './../game';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RouterModule, Routes, RouterOutlet } from '@angular/router';
import { Router} from '@angular/router';
import { FormGroup, ReactiveFormsModule, FormBuilder, Validators,FormControl } from '@angular/forms';
import { GameService } from '../game.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { Http, Response, Headers } from '@angular/http';
import { ToastsManager} from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'all-games',
  templateUrl: './all-games.component.html',
  styleUrls: ['./all-games.component.css'],
  providers: [GameService]
})
export class AllGamesComponent implements OnInit {
  games=[];
  selectedGame: Game;
  constructor( private gameService: GameService, public router: Router, public toastr: ToastsManager, vcr: ViewContainerRef ) { 
    this.toastr.setRootViewContainerRef(vcr);
  }

  delete(id: string){
    this.gameService.deleteGame(id);
    this.loadGame();
    this.showDelete();
  }
  loadGame(){
    this.gameService.getGames().subscribe(data => this.games = data);
    // console.log(data.name)
  }

  showDelete() {
    this.toastr.error('The game was deleted', 'Oops!');
  }

  onSelect(game: Game): void {
    this.selectedGame = game;
  }

   gotoDetail(id: string): void {
    this.router.navigate(['/view-game',id]);
  }
   gotoEdit(id: string): void {
    this.router.navigate(['/edit-game',id]);
  }

  ngOnInit() {
    this.loadGame();
  }

}


