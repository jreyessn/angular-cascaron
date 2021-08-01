import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/auth/auth.service';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  activeSignIn: boolean = true;

  constructor(
    public authService: AuthService,
    private router: Router,
    private loginService: LoginService,
  ) { }

  ngOnInit(): void {
    this.loginService.test().subscribe(value => {
      console.log(value)
    })
  }

  login(){
    this.authService.signIn();
    this.router.navigate(['/dashboard'])
  }

 
}
