import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserModel } from './model/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularApp';
  showText = false

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required,Validators.minLength(8)])

  })

  userForm = new FormGroup({
    id:new FormControl('',[Validators.required]),
    name:new FormControl('',[Validators.required]),
    address: new FormControl('', [Validators.required]),
    phoneNumber:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required])
  })


  buttonOnClick() {
    console.log("tombol di klik");
    this.showText = !this.showText
    console.log(this.showText);
  }

  buttonSubmit() {
    console.log(this.showText);
    console.log(this.loginForm.valid);

    console.log(this.loginForm.value);
  }

  userList:UserModel[]=[]

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

  // userBudi: UserModel = new UserModel({
  //   id: 1,
  //   name: "budi",
  //   address: "alamat budi",
  //   phoneNumber: "nomor WA budi",
  //   email:"email budi"
  // })

  // userAji: UserModel = new UserModel({
  //   id: 2,
  //   name: "Aji",
  //   address: "alamat Aji",
  //   phoneNumber: "nomor WA Aji",
  //   email:"email Aji"
  // })

  // userAsep: UserModel = new UserModel({
  //   id: 3,
  //   name: "Asep",
  //   address: "alamat Asep",
  //   phoneNumber: "nomor WA Asep",
  //   email:"email Asep"
  // })

  // userList: UserModel[] = [
  //   this.userBudi,
  //   this.userAji,
  //   this.userAsep
  // ]

}

