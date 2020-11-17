import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../../services/alertify.service';
import { UserService } from '../../services/user.service';
import { User } from '../../_models/user';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {

  users: User[];
  constructor( private userService: UserService, private alertify: AlertifyService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers()
  {
    this.userService.getUsers().subscribe((response: User[]) => {
      this.users = response;
    }, error =>{
        this.alertify.error(error);
    });
  }

}
