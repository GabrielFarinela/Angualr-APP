import { UsersService } from '../../Services/users.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { User } from '../../Services/users.model';

@Component({
  selector: 'CRUD-users-create-update',
  templateUrl: './users-create-update.component.html',
  styleUrls: ['./users-create-update.component.css']
})
export class UsersCreateUpdateComponent implements OnInit {

  isNew: boolean;
  campo = new FormControl('', [Validators.required]);
  userFormGroup: FormGroup;

  user: User = {
    name: '',
    city: '',
    email: '',
    telefone: ''
  }

  constructor(
    private usersService: UsersService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute) {
      this.userFormGroup = this.formBuilder.group({
        name: ['', Validators.required],
        city: ['', Validators.required],
        email: ['', [
          Validators.required,
          Validators.email
        ]],
        telefone: ['', Validators.required]
      })
    }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    if(!id) {
      console.log("Formulário de Create")
      this.isNew = true
    }
    else {
      this.isNew = false
      this.usersService.readById(id).subscribe((user) => {
        this.user = user
        this.userFormGroup.controls['name'].setValue(this.user.name);
        this.userFormGroup.controls['city'].setValue(this.user.city);
        this.userFormGroup.controls['email'].setValue(this.user.email);
        this.userFormGroup.controls['telefone'].setValue(this.user.telefone);
      })
      console.log("Formulário de Update")
    }
  }
  
  createUser() {
    if(!this.userFormGroup.valid) {
      console.log("Formulário inválido")
    } else (
        this.usersService.create(this.userFormGroup.value).subscribe(() => {
          this.usersService.showMessage("Usuário criado com sucesso!")
          this.router.navigate(['/users'])})
      )
      console.log("Usuário cadastrado")
  }

  updateUser(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.usersService.update(this.userFormGroup.value, id).subscribe(() => {
      this.usersService.showMessage('Usuário atualizado com sucesso!')
      this.router.navigate(['/users'])
    })
    console.log("Usuário atualizado")
  }


  cancel(): void {
    this.router.navigate(['/users'])
    console.log("Operação cancelada")
  }

  getErrorMessage() {
    if (this.campo.hasError('required')) {
      return 'Este campo é obrigatorio';
    }

    return this.campo.hasError('campo') ? 'Esté campo é obrigatório' : '';
  }
}
