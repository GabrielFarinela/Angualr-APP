import { UsersService } from './../../components/Services/users.service';
import { User } from './../../components/Services/users.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'CRUD-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  tamUser: number = 0;
  grafico = []

  title1: string = 'Dados do sistema'
  title2: string = 'Gráficos'
  
  users : User[]

  chartData: any = {
    type: 'PieChart',
    data: [],
  options: {
    title: 'Cidades',
    is3D: true,
    pieSliceTextStyle: {
      color: 'black'
    }
  },
  width: 500,
  height: 350
  };

  constructor(
    private usersService: UsersService
  ) {}

  async ngOnInit() {
    await this.tamanhoUsers();
  }

  async tamanhoUsers() {
    this.usersService.usersRead().subscribe(response => { 

      this.tamUser = response.length
      let result = response.map( ({ city }) => city)
      let cont = []
      let total = 1
      result.sort()
      for(let i=0; i < response.length; i++) {
        if(i < response.length - 1 && result[i] == result[i + 1]) {
          total++
        }
        else {
          cont.push({city: result[i], total: total})
          total = 1
        }
      }
      console.log(cont)
      cont.forEach(item => {
        this.chartData.data.push([ item.city, item.total, 1,  1])
      });
    })
  }

  get content1() {
    return 'Total de usuários cadastrados no sistema: ' + this.tamUser 
  }
}