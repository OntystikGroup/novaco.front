import {Component, OnInit} from '@angular/core';
import {Company, Vacancy} from "../models";
import {ActivatedRoute} from "@angular/router";
import {CompanyService} from "../company.service";
import {VacancyService} from "../vacancy.service";
import {subscribeOn} from "rxjs";

@Component({
  selector: 'app-vacancy-details',
  templateUrl: './vacancy-details.component.html',
  styleUrls: ['./vacancy-details.component.css']
})
export class VacancyDetailsComponent implements OnInit{

  vacancy: Vacancy ;
  islogged  = false;

  constructor(private vacancyService : VacancyService, private route : ActivatedRoute) {
    this.vacancy = {} as Vacancy;
  }

  ngOnInit(): void {
    this.getVacancy()
  }

  getVacancy(){
      this.route.paramMap.subscribe((params) =>{
        const id = Number(params.get('id'));
        this.vacancyService.getVacancy(id).subscribe((vacancy) =>{
          this.vacancy = vacancy;
        })
      })
    }

    respond(){

      this.vacancyService.respond(this.vacancy.id)



    }
}
