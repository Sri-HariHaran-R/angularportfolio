import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit
{
  ngOnInit(): void {
    
  }

  checkMark:string="";
  arrow:string="";
  constructor()
  {
    this.checkMark="./assets/images/checkmark.png";
    this.arrow="./assets/images/arrow.png"
  }
}
