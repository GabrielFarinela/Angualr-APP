import { User } from './../../Services/users.model';
import { UsersService } from '../../Services/users.service';
import { ModalComponent } from './../../Util/modal/modal.component';
import { Page, PageRequest } from './../../Util/pagination';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { take } from 'rxjs';

@Component({
  selector: 'CRUD-users-read',
  templateUrl: './users-read.component.html',
  styleUrls: ['./users-read.component.css']
})
export class UsersReadComponent implements OnInit {

  displayedColumns = ['name','city', 'email', 'telefone', 'action']

  page: Page<User> = new Page([], 0);
  pageEvent: PageEvent;
  
  constructor(private usersService: UsersService,
              private dialog: MatDialog) {}

  ngOnInit() {
    this.listarUsers();
  }

  openDialog(id: number) {
    const dialogRef = this.dialog.open(ModalComponent)

    this.page.content.findIndex(i=> i.id == id);
    console.log("Modal remover usuário aberto")
    dialogRef.beforeClosed().subscribe(result => {
      if(result) {
        console.log("Excluir usuário")
        this.deleteUser(id)
        this.page.content.splice(id, 1)
        this.usersService.load()
      }
      else {
        console.log("Operação cancelada")
      }
    })
  }

  listarUsers() {
    let queryAdicional: Map<string, string>;
    this.usersService.read(
      new PageRequest(
        {
          pageNumber: this.pageEvent? this.pageEvent.pageIndex: 0,
          pageSize: this.pageEvent? this.pageEvent.pageSize: 5
        },
        queryAdicional
      )
    )
    .pipe(
      take(1)
    )
    .subscribe (
      page => {
        this.page = page
      }
    )
  }

  deleteUser(id: number) {
    this.usersService.delete(id).subscribe((user) => {
      this.usersService.showMessage("Usuário excluido com sucesso!")
    })
      
  }
}