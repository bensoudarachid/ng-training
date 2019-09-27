import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navpublic',
  templateUrl: './navpublic.component.html',
  styleUrls: ['./navpublic.component.scss']
})
export class NavPublicComponent implements OnInit {
  
  constructor() { 
    console.log('public nav constructor')    
  }

  ngOnInit() {
    console.log('public nav init')
  }

}
