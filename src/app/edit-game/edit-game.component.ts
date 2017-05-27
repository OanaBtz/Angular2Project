import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { GameService } from '../game.service';
import { Game } from './../game';

import 'rxjs/add/operator/switchMap';


import { NgForm } from '@angular/forms';
import { RouterModule, Routes, RouterOutlet } from '@angular/router';
import { Router} from '@angular/router';
import { FormGroup, ReactiveFormsModule, FormBuilder, Validators,FormControl } from '@angular/forms';


@Component({
  selector: 'edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.css'],
  providers: [GameService]
})
export class EditGameComponent implements OnInit {

  @Input() game: Game;
  str: string;
  public newGameForm: FormGroup;

  constructor(
      private gameService: GameService,
      private route: ActivatedRoute,
      private location: Location,
      private formBuilder: FormBuilder
      ) {

        this.newGameForm = formBuilder.group({
        'id': [''],
        'name' : [''],
        'description': [''],
        'urlImage':['']
        })
      }

  ngOnInit(): void {
    this.route.params
    .switchMap((params: Params) => this.gameService.getGame(params['id']))
    .subscribe(game => this.game = game);
  }

  save(id, name, description, urlImage): void {
    console.log(name)
    // console.log(id);
    if(id==""){
      id = this.game._id;
      console.log(this.game._id);
    }
    if(name==""){
      name = this.game.name;
      console.log(this.game.name);
    }
     if(description==""){
      description = this.game.description;
      console.log(this.game.description);
    }
     if(urlImage==""){
      urlImage = this.game.urlImage;
      console.log(this.game.urlImage);
    }
    
    this.gameService.update(id, name, description, urlImage);
    
  }


  goBack(): void {
    this.location.back();
  }

}
