import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  loginError: boolean = false;
  @ViewChild('loginusername') loginusername: any;
  @ViewChild('loginpassword') loginpassword: any;
  @ViewChild('username') username: any;
  @ViewChild('email') email: any;
  @ViewChild('password') password: any;
  
  constructor(private router: Router) { }

  signUpMode: boolean = false;

  signIn() {
    const loginusername = this.loginusername.nativeElement.value;
    const loginpassword = this.loginpassword.nativeElement.value;
    
    const userDataString = localStorage.getItem(loginusername);
    console.log(userDataString)
    
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      if (userData.password === loginpassword) {
        this.router.navigate(['/products']);
        console.log('Sign-in successful!');
        console.log('User Data:', userData);
      } else {
        this.loginError = true;
        console.log('Incorrect password. Please try again.');
      }
    } else {
      this.loginError = true;
      console.log('User with provided email does not exist. Please sign up.'); 
    }
  }

  signUp() {
    localStorage.clear();
    const username = this.username.nativeElement.value;
    const email = this.email.nativeElement.value;
    const password = this.password.nativeElement.value;
  
    const userData = {
      username: username,
      email: email,
      password: password
    };
    localStorage.setItem(email, JSON.stringify(userData));
  }

  toggleMode(mode: boolean) {
    this.signUpMode = mode;
  }
}
