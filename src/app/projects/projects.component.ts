import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit
{
  ngOnInit(): void {
    
  }
  project1:string="";
  project2:string="";
  arrow:string="";
  constructor()
  {
    this.project1="./assets/images/project-1.png";
    this.project2="/assets/images/project-2.png";
    this.arrow="./assets/images/arrow.png";
  }

}
