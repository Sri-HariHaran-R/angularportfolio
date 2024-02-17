import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit
{
  ngOnInit()
  {

  }

  imagePath:string="";
  experirence:string="";
  education:string="";
  arrow:string="";
  constructor()
  {
    this.imagePath="./assets/images/pic2.JPG";
    this.experirence="./assets/images/experience.png";
    this.education="./assets/images/education.png"
    this.arrow="./assets/images/arrow.png"
  }
}
