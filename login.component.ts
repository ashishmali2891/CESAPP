import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { appInfo } from '../app.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: any;
  name: any;
  password: any;
  pass: any;
  constructor(public httpc:HttpClient, public route: Router) { }

  ngOnInit() {
  }

  LoginServer(){
    var login:any={};
  //  userLogin : appInfo = new appInfo();
   this.name = this.username;
   this.pass = this.password;
     this.httpc.post("http://localhost:3000/admin",[
      {
        "id" : 1,
        "username": 'admin',
        "password": 'admin'
      }
    ]).subscribe(res => {
       console.log(res);
       if(this.name === res[0].username && this.pass === res[0].password){
         console.log("success");
         alert("Welcome to CSE-App, User login successfully!")
         this.route.navigate(['/dashboard']);
       } else {
         alert('Please enter valid data');
         this.route.navigate(['/login']);
       }
     })
    //  .subscribe(res=>this.Success(res),
    //  res=>this.Error(res));
  }
  Success(res){
    console.log(res);
    
    // if () {}
  }
  Error(res){
    
  }

}
