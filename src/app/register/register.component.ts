import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AlertifyService } from '../services/alertify.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // @Input() valuesFromHome: any;
  @Output() cancelRegister = new EventEmitter();

  model: any = {};
  constructor( private authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit(): void {
  }

  register(){
    this.authService.register(this.model).subscribe(() => {
      this.alertify.success("Successfully registered!");
    }, error =>{
      this.alertify.error(error);
    });
  }

  cancel(){
    this.cancelRegister.emit(false);
  }

}
