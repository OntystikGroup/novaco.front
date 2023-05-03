import {Component, OnInit} from '@angular/core';
import {AuthToken, Company, Vacancy, VacancyShort} from "../models";
import {CompanyService} from "../company.service";
import {VacancyService} from "../vacancy.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../auth.service";

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
              private authService: AuthService) {
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

  getVacancies(){
    this.route.paramMap.subscribe((params) =>{
      const id = Number(params.get('id'));
      this.loaded = false;
      this.vacancyService.getCompanyVacancies(id).subscribe((vacancies) =>{
        this.vacancies = vacancies;
        this.loaded = true;
      })
    })
  }
  listVacancies() {
    this.loaded = false;
    this.vacancyService.getVacancies().subscribe(vacancies => {
      this.vacancies = vacancies;
      this.loaded = true;
    });
  }

  logOut(){
    localStorage.removeItem("token")
    localStorage.removeItem("username")
    localStorage.removeItem('is_staff')
    location.reload();
  }
}

