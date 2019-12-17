import { User } from './../Model/user';
import { ListaWebService } from '../service/lista-web.service';
import { Component, OnInit } from '@angular/core';

@Component({
selector: 'app-user-list',
templateUrl: './user-list.component.html',
styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[];
  constructor(private userService: ListaWebService) { }


  ngOnInit() {
    this.findAll();
  }

  findAll() {
    this.userService.getAll().subscribe((userOut: User[]) => {
      this.users = userOut;
    })

  }

}
