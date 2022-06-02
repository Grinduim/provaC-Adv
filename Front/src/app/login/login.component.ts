import { Component, OnInit } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor() {}

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

    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
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
