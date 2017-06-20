import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { GameService} from '../game.service';
import { FormGroup, ReactiveFormsModule, FormBuilder, Validators,FormControl } from '@angular/forms';
import { ToastsManager} from 'ng2-toastr/ng2-toastr';


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

  constructor( private gameService: GameService, formBuilder: FormBuilder,public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.newGameForm = formBuilder.group({
      'name' : [''],
      'description': [''],
      'urlImage':['']
    })
    this.toastr.setRootViewContainerRef(vcr);
  }  
  showSuccess() {
     this.toastr.success('The game was added', 'Success!');
  }
    

    
  //     showWarning() {
  //       this.toastr.warning('You are being warned.', 'Alert!');
  //     }
    
  //     showInfo() {
  //       this.toastr.info('Just some information for you.');
  //     }
      
  //     showCustom() {
  //       this.toastr.custom('<span style="color: red">Message in red.</span>', null, {enableHTML: true});
  //     }

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
