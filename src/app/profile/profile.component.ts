import { Component,OnInit } from '@angular/core';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit
{
  ngOnInit(): void {
    
  }
  imagePath:string="";
  alternate:string="";
  resumePath:string="";
  linkedInPath:string="";
  githubPath:string="";
  linkedInUrl:string="https://www.linkedin.com/in/sri-hariharan-r/";
  githubUrl:string="https://github.com/Sri-HariHaran-R?tab=repositories";

  constructor()
  {
    this.imagePath="./assets/images/pic.png";
    this.alternate="Profile Picture"
    this.linkedInPath="./assets/images/linkedin.png"
    this.githubPath="./assets/images/github.png"
  }

  showResume()
  {
    this.resumePath="./assets/Sri HariHaran R Resume.pdf"
    window.open(this.resumePath,);
  }

  linkedIn()
  {
    location.href=this.linkedInUrl;
  }

  github()
  {
    location.href=this.githubUrl;
  }
  
}
