import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../Services/users.service';

@Component({
  selector: 'CRUD-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
  
  }

  clicar() {
    this.usersService.load()
  }
}
