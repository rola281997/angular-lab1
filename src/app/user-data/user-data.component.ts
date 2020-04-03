import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent implements OnInit {

  username1 : string = '';
  username2 : string = '';

  constructor() { 

  }

  ngOnInit(): void {
  }

  reset(){
    this.username1 = '';
    this.username2 = '';
  }

}
