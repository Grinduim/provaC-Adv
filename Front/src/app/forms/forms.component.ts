import { Component, OnInit } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
})
export class FormsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  SubmitForm() {
    let name = this.getInputField('#name');
    let age = this.getInputField('#age');
    let breed = this.getInputField('#breed');
    let user = this.getInputField('#user');
    let password = this.getInputField('#password');
    let photo = this.getInputField('#photo');

    var data = JSON.stringify({
      name: name.value,
      Age: age.value,
      Breed: breed.value,
      UserName: user.value,
      Password: password.value,
      Image: photo.value
    });
    console.log(data)

    var config = {
      method: 'post',
      url: 'http://localhost:5148/user/register',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error.message);
      });
  }

  getInputField(id: string) {
    let response = document.querySelector(id) as HTMLInputElement;
    return response;
  }


}
