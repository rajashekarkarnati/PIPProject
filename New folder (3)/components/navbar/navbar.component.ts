import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 
  usertype : string;

  constructor() { }

  ngOnInit() {
    localStorage.setItem("usertype", 'student');
    let user = localStorage.getItem("usertype");
    if(user == "admin"){
       this.usertype = 'admin';
    }
    else if(user == "student"){
      this.usertype = 'student';
    }
    else{
      this.usertype = 'jobs';
    }
  }

  isAdmin(){
    if(this.usertype == 'admin'){
      return true;
    }
  }

  isStudent(){
    if(this.usertype == 'student'){
      return true;
    }
  }
  isJobs(){
    if(this.usertype == 'jobs'){
      return true;
    }

  }
}
