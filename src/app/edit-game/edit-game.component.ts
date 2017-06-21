import { Component, Input, OnInit , ViewContainerRef} from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { GameService } from '../game.service';
import { Game } from './../game';
import { ToastsManager} from 'ng2-toastr/ng2-toastr';
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
      private formBuilder: FormBuilder,
      public toastr: ToastsManager, 
      vcr: ViewContainerRef
      ) {

        this.newGameForm = formBuilder.group({
        'id': [''],
        'name' : [''],
        'description': [''],
        'urlImage':['']
      });
      this.toastr.setRootViewContainerRef(vcr);
      }

  ngOnInit(): void {
    this.route.params
    .switchMap((params: Params) => this.gameService.getGame(params['id']))
    .subscribe(game => this.game = game);
  }
  showEdit() {
    this.toastr.success('The game was edited', 'woohoo!');
  }

  save(id, name, description, urlImage): void {
    
    if(id==""){
      id = this.game._id;
      
    }
    if(name==""){
      name = this.game.name;
      
    }
     if(description==""){
      description = this.game.description;
      
    }
     if(urlImage==""){
      urlImage = this.game.urlImage;
     
    }
    
    this.gameService.update(id, name, description, urlImage);
    this.showEdit();
    
  }


  goBack(): void {
    this.location.back();
  }

}
