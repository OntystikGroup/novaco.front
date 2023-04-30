import {Component, OnInit} from '@angular/core';
import {AuthToken, Company, Vacancy} from "../models";
import {CompanyService} from "../company.service";
import {VacancyService} from "../vacancy.service";
import {ActivatedRoute} from "@angular/router";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  loaded : Boolean;
  vacancies : Vacancy[] = [];


  constructor(private vacancyService: VacancyService,
              private route: ActivatedRoute,
              private authService: AuthService) {
    this.loaded = true;
  }
  ngOnInit(): void {
    this.authService.getAuthToken("yerke", "123").subscribe(token => {
      localStorage.setItem('token', token.access);
      this.listVacancies()
    });
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
}

