import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';



@Component({
  selector: 'app-user',
  // template: '<h2>Jhon Doe</h2>'
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  // Properties
  user: User;


  // Methodes
  constructor() { }

  ngOnInit() { }


}

