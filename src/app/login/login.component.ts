import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user={
    username:"admin",
    password:"admin123"
  }
  uname=""
  paswd=""

  constructor(private router:Router){}
 
handLogin(){
  console.log(this.uname,this.paswd);
  if(this.uname==this.user.username && this.paswd==this.user.password){
    alert("User Login SuccessFull!!")
    this.router.navigateByUrl('dash')
  }
  else{
    alert("Invalid User/Password")
  }
}

}
