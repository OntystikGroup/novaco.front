import {Component, OnInit} from '@angular/core';
import {Respond} from "../models";
import {RespondService} from "../respond.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  myResponds: Respond[];

  constructor(private respondService: RespondService,) {
    this.myResponds = {} as Respond[];
  }

  ngOnInit(): void {
    this.getResponds();
  }
  getResponds(){
    this.respondService.getResponds().subscribe((responds =>{
      this.myResponds = responds;
    }))
  }

}
