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
export class VacancyDetailsComponent implements OnInit {

  vacancy: Vacancy;
  islogged = false;

  constructor(private vacancyService: VacancyService, private route: ActivatedRoute) {
    this.vacancy = {} as Vacancy;
    this.islogged = Boolean(localStorage.getItem("isLogged"));
  }

  ngOnInit(): void {
    this.getVacancy()
  }

  getVacancy() {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.vacancyService.getVacancy(id).subscribe((vacancy) => {
        this.vacancy = vacancy;
      })
    })
  }

  respond() {
    if (this.islogged) {
      this.vacancyService.respond(this.vacancy.id).subscribe(
        (data => {
          window.alert("Succesfully responded");
        }),
        error => {
          window.alert(error['error']['non_field_errors'][0]);
        }
      )
    }
    else {
      alert("Please authorize first to respond");
    }
  }
}
