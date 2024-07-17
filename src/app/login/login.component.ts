import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginObj:Login ;
  constructor(private http:HttpClient , private router : Router) { 
    this.loginObj=new Login();
  }
  onLogin() {
    this.http.post('https://api.expert-sante.continuousnet.com/api/login', this.loginObj)
      .subscribe(
        (res: any) => {
          console.log(res); 
          if (res) {
            alert("Login success");
            localStorage.setItem('token', res.data.token);
            this.router.navigate(['/home']);
          } else {
            alert("Login failed: " + res.message);
          }
        },
        (error) => {
          console.error('Error during login:', error);
          alert('An error occurred during login.');
          
        }
      );
  }
  goToSignup(){
    this.router.navigate(['/sign-up']);
  }


  ngOnInit(): void {
  }



}
export class Login {
  username : string ; 
  password : string ; 
  constructor(){
    this.username='' ;
    this.password='';
  }
}
