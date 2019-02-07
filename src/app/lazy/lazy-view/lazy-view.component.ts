import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-lazy-view',
  templateUrl: './lazy-view.component.html',
  styleUrls: ['./lazy-view.component.css']
})
export class LazyViewComponent implements OnInit {
  public userList: any;
  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getUsersList().subscribe((users: any) => {
      console.log(users)
      this.userList = users;
    });
  }
}
