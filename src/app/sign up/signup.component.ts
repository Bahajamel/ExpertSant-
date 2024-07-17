import { Component , OnInit } from '@angular/core';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  username='';
  password='';
  wrongCredentials = false ;
  constructor() {
   
  }
  
  ngOnInit(): void {
   
  }
  login(){
    this.wrongCredentials = !this.wrongCredentials ;
  }
    
  }
 
