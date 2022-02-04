import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {

  constructor( private authService: AuthService, 
               private router: Router, ) { }

  login(){
    
    // ir al backend
    // usuario
    this.authService.login()
      .subscribe( resp => {
        console.log(resp.usuario);
        if( resp.id ){
          this.router.navigate(['/heroes/listado'])
        }
      });

      }




    // this.router.navigate(['/heroes/listado'])

  }
