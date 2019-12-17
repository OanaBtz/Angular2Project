import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from '../game.service';

@Component({
    selector: 'login-register',
    templateUrl: './login-register.component.html',
    styleUrls: ['./login-register.component.css'],
    providers: [GameService]
})


export class LoginRegisterComponent {
  model: any = {};
  loading = false;
  
  constructor(
    private router: Router,
    private gameService: GameService) { }

  // get return url from route parameters or default to '/'
    
    login(){
      
    }
    register() {
        
    }
}
