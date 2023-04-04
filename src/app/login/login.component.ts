import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
   
  data="Your Perfect Banking partner" // string interpolation
  data1="Enter your account number"  //property binding


//ac no=""
//or
acno:any
psw:any
   
  userDetails:any={
    1000:{username:"aswanth",acno:1000,password:"abc123",balance:0},
    1001:{username:"amal",acno:1001,password:"abc123",balance:0},
    1002:{username:"sarath",acno:1002,password:"abc123",balance:0},
    1003:{username:"sivada",acno:1003,password:"abc123",balance:0}
  }

  //methods

  login(){
    // alert("Login worked")
    var acnum = this.acno
    var psw = this.psw
    var userDetails=this.userDetails //for simplify the code using additional varible
    
    if(acnum in this.userDetails){
     if(psw==userDetails[acnum]["password"]){
      alert("login sucess")
     }
     else{
      alert("incorrect password")
     }
    }
    else{
      alert("incorrect account number")
    }
  }

  acnoChange(event:any){
    // console.log(event.target.value);   // nammukke log il kane use cheyyunnu  athil target value ethtra enne kananm .target.value
    this.acno=event.target.value
    // console.log(this.acno);
    
  }
  pswChange(event:any){
    this.psw=event.target.value
    // console.log(this.psw);
    
  }
}
