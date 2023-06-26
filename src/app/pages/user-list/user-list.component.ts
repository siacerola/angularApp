import { Component } from '@angular/core';
import { UserModel } from '../../model/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent {

  userBudi: UserModel = new UserModel({
    id: 1,
    name: "budi",
    address: "alamat budi",
    phoneNumber: "nomor WA budi",
    email:"email budi"
  })

  userAji: UserModel = new UserModel({
    id: 2,
    name: "Aji",
    address: "alamat Aji",
    phoneNumber: "nomor WA Aji",
    email:"email Aji"
  })

  userAsep: UserModel = new UserModel({
    id: 3,
    name: "Asep",
    address: "alamat Asep",
    phoneNumber: "nomor WA Asep",
    email:"email Asep"
  })

  userList: UserModel[] = [
    this.userBudi,
    this.userAji,
    this.userAsep
  ]

  buttonSubmitForm(input:any) {
    let doc = new UserModel({
      id: input.id,
      name:input.name,
      address:input.address,
      phoneNumber:input.phoneNumber,
      email:input.email
    })

    this.userList.push(doc)
  }

}
