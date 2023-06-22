import { Component, Input } from '@angular/core';
import { UserModel } from 'src/app/model/user.model';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.css']
})
export class UserListItemComponent {
  @Input() userList:UserModel[]=[]
}
