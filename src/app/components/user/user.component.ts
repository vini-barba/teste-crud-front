import { Component, OnInit } from '@angular/core'
import { UserService } from 'src/app/services/user.service'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userName = null
  userEmail = null
  users = []
  oneUser = null

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.read()
  }

  create(nome, email) {
    this.userService.post({ nome, email }).then((res: any) => {
      this.read()
    })
  }

  read() {
    this.userService.getAll().then((users: any) => {
      this.users = users
    })
  }

  async update(user) {
    const { value: formValues } = await Swal.fire({
      title: 'Editar Usúario',
      html:
        `<label>Nome</label><input id="swal-input1" class="swal2-input" value='${
          user.nome
        }'>` +
        `<label>Email</label><input id="swal-input2" class="swal2-input" value='${
          user.email
        }'>`,
      focusConfirm: false,
      preConfirm: () => {
        return [
          (<HTMLInputElement>document.getElementById('swal-input1')).value,
          (<HTMLInputElement>document.getElementById('swal-input2')).value
        ]
      }
    })

    if (formValues) {
      this.userService
        .put({
          id: user._id,

          nome: formValues[0],
          email: formValues[1]
        })
        .then((res: any) => {
          Swal.fire('Pronto', 'Usuário alterado com sucesso', 'success')
          this.read()
        })
    }
  }

  delete(user) {
    this.userService.delete(user._id).then((res: any) => {
      this.read()
    })
  }
}
