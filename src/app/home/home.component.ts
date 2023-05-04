import {Component} from '@angular/core';
import {Vacancy} from "../models";
import {VacancyService} from "../vacancy.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../auth.service";
import {TokenService} from "../token.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  loaded : Boolean;
  vacancies : Vacancy[] = [];
  isLogged = false;
  username: string


  constructor(private vacancyService: VacancyService,
              private route: ActivatedRoute,
              private router: Router,
              private authService: AuthService,
              private tokenService: TokenService) {
    this.loaded = true;
    this.username = '';
  }
  ngOnInit(): void {
      this.listVacancies()
      let cookie_username = localStorage.getItem("username");
      if (cookie_username){
        this.isLogged = true;
        this.username = cookie_username;
      }
  }

  listVacancies() {
    this.loaded = false;
    this.vacancyService.getVacancies().subscribe(vacancies => {
      this.vacancies = vacancies;
      this.loaded = true;
    });
  }

  logOut(){
    let token = this.tokenService.getRefreshToken();
    this.authService.logOut(token).subscribe(data => {
      localStorage.clear()
      window.location.reload();
    });
  }
}
