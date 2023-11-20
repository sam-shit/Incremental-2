import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username : string;
  password : string;
  constructor(private ls : AuthService, private route :Router) { }
  login(){
    this.ls.login(this.username,this.password).subscribe();
  }
 
  ngOnInit(): void {
  }
 
}