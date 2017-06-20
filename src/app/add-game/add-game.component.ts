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
  clear = false;
  public n: number = 1;

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
    this.clear = true;
    setTimeout(() => {
      this.n = this.n + 20;
      this.clear = false;
    }, 1000);
    this.gameService.addGame(name, description, urlImage);
    
    
  }

  ngOnInit() {
  }

}
