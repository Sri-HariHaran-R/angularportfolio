import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit
{
  ngOnInit(): void {
    
  }

  email:string="";
  linkedIn:string="";
  constructor()
  {
    this.email="./assets/images/email.png";
    this.linkedIn="./assets/images/linkedin.png";
  }



}
