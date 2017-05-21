import { Component, OnInit } from '@angular/core';
import { GameService} from '../game.service';
import { FormGroup, ReactiveFormsModule, FormBuilder, Validators,FormControl } from '@angular/forms';
@Component({
  selector: 'add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css'],
  providers: [GameService]
})
export class AddGameComponent implements OnInit {

str: string;
public newGameForm: FormGroup;

  constructor( private gameService: GameService, formBuilder: FormBuilder) {
    this.newGameForm = formBuilder.group({
      'name' : [''],
      'description': [''],
      'urlImage':['']
    })
  }

  addNewGame(name, description, urlImage){
    this.gameService.addGame(name, description, urlImage);
  }

  ngOnInit() {
  }

}
