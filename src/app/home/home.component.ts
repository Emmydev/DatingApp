import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  registerMode = false;
  // values: any;
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // this.getValues();
  }

  registerToggle()
  {
    this.registerMode = true;
  }

  // getValues(){
  //   this.http.get('http://localhost:49975/api/values').subscribe(response => {
  //     this.values = response;
  //   }, error =>{
  //     console.log(error)
  //   });
  // }

  cancelRegisterMode(registerMode: boolean){
      this.registerMode = registerMode;
  }

}
