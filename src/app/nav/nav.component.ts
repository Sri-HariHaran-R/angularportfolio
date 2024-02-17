import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit
{
  ngOnInit(): void {
    
  }
  isMenuOpen:boolean=false;
  show()
  {
    this.isMenuOpen=!this.isMenuOpen
  }
}
