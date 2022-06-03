import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  login() {
    var username = this.getInputField('#username');
    var password = this.getInputField('#password');

    var data = JSON.stringify({
      "UserName": username.value,
      "Password": password.value
    });

    var config = {
      method: 'post',
      url: 'http://localhost:5148/user/login',
      headers: {
        'Content-Type': 'application/json'
      },
      data : data
    };
    var instance = this;
    axios(config)
    .then(function (response) {
      console.log("okay");
      let id = response.data;
      localStorage.setItem('id', id);
      var route = '/profile/' + id;
      instance.router.navigate([route]);
    })
    .catch(function (error) {
      console.log(error);
    });

  }
  getInputField(id: string) {
    let response = document.querySelector(id) as HTMLInputElement;
    return response;
  }

}
