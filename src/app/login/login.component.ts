import { Component } from '@angular/core';
import {AuthService} from "../auth.service";
import {User} from "../models";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  newUser: User;
  constructor(private authService:AuthService,
              private route : ActivatedRoute,
              private router: Router) {
    this.newUser = {} as User;
  }

  login(){
    this.authService.getAuthToken(this.newUser.username, this.newUser.password).subscribe(data => {
      localStorage.setItem("username", data.username);
      localStorage.setItem("token", data.token);
      localStorage.setItem("is_staff",String(data.is_staff));
      this.router.navigate(['/']).then();
    },
      error => {
      window.alert(error['error']['non_field_errors'][0]);
      });
  }

}
