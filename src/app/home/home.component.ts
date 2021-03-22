import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user: User;
  isUserLoggedIn: Boolean = true;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.user = new User();
    this.isUserLoggedIn = !sessionStorage.getItem('loggedInUser');
  }

  registerUser() {
    this.userService
      .register(this.user)
      .subscribe();
  }

  loginUser() {
    this.userService
      .login(this.user)
      .subscribe(user => {
        sessionStorage.setItem('loggedInUser', user['email']);
        this.isUserLoggedIn = false;
      });
  }

}
