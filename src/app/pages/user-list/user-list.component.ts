import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserModel } from '../../model/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  userForm = new FormGroup({
    id:new FormControl('',[Validators.required]),
    name:new FormControl('',[Validators.required]),
    address: new FormControl('', [Validators.required]),
    phoneNumber:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required])
  })

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

  buttonSubmitForm() {
    let doc = new UserModel({
      id: this.userForm.value.id,
      name:this.userForm.value.name,
      address:this.userForm.value.address,
      phoneNumber:this.userForm.value.phoneNumber,
      email:this.userForm.value.email
    })

    this.userList.push(doc)
  }
}
