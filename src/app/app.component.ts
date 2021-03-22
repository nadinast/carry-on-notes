import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { UserService } from './service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

  items: MenuItem[];
  userMenuItems: MenuItem[];

  constructor(private userService: UserService,
              private router: Router) {

  }

  ngOnInit() {
      this.items = [
        {
          label: 'Home',
          icon: 'pi pi-fw pi-home',
          routerLink: '/home'
        },
        {
          label: 'View Notes',
          icon: 'pi pi-fw pi-list',
          routerLink: '/notes/all'
        },
        {
          label: 'Create Note',
          icon: 'pi pi-fw pi-file-o',
          routerLink: '/notes/create'
        }
      ];

      this.userMenuItems = [
        {
          label: 'Logout',
          icon: 'pi pi-fw pi-sign-out',
          command: (e) => this.userService
              .logout()
              .subscribe(res => {
                sessionStorage.removeItem('loggedInUser');
                location.reload();
              })
        },
      ]
    }
}
