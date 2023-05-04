import {Component} from '@angular/core';
import {VacancyShort} from "../models";
import {VacancyService} from "../vacancy.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../auth.service";
import {TokenService} from "../token.service";
import {SearchService} from "../search.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  loaded : Boolean;
  vacancies : VacancyShort[] = [];
  isLogged = false;
  username: string
  searchVacancy:string;


  constructor(private vacancyService: VacancyService,
              private route: ActivatedRoute,
              private router: Router,
              private authService: AuthService,
              private tokenService: TokenService,
              private searchService: SearchService,) {
    this.loaded = true;
    this.username = '';
    this.searchVacancy = '';
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

  search(){
    console.log(this.searchVacancy);
    this.searchService.search(this.searchVacancy).subscribe(vacancies=>{
      this.vacancies = vacancies;
    })
  }
}
