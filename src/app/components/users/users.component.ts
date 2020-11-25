import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/User'; //User.ts file from models
import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  //Properties

  user: User = {
    firstName: '',
    lastName: '',
    email: '',
  }

  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = false;
  @ViewChild('userForm') form: any;
  data: any;

  constructor(private userService: UserService) { }

  // Lifecycle Method
  ngOnInit(): void {


    this.userService.getUsers().subscribe(users => {
      this.loaded = true;
      this.users = users;
    });



  }


  // addUser(user: User) {
  //   this.user.isActive = true;
  //   this.user.registered = new Date();
  //   this.users.unshift(this.user);
  //   // for clear form  after add user details
  //   this.user = {
  //     firstName: '',
  //     lastName: '',
  //     email:''
  //   }
  // }


  onSubmit({ value, valid }: { value: User, valid: boolean }) {
    if (!valid) {
      // in case we didnt validation form
      console.log('form is not valid');
    } else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;
      this.userService.addUser(value);
      this.form.reset();
    }

  }

}
