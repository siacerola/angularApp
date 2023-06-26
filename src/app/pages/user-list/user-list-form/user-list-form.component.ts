import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-user-list-form',
  templateUrl: './user-list-form.component.html',
  styleUrls: ['./user-list-form.component.css']
})
export class UserListFormComponent {

  @Output() inputUserEvent = new EventEmitter < any > ()

  userForm = new FormGroup({
    id:new FormControl('',[Validators.required]),
    name:new FormControl('',[Validators.required]),
    address: new FormControl('', [Validators.required]),
    phoneNumber:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required])
  })

  onSubmit() {
    console.log(this.userForm.value);

    this.inputUserEvent.emit(this.userForm.value)
  }
}
