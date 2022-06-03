import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
})
export class FormsComponent implements OnInit {
  constructor(private router: Router) {}

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
    
    var config = {
      method: 'post',
      url: 'http://localhost:5148/user/register',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };
    let instance = this;
    axios(config)
      .then(function (response) {
        instance.router.navigate(['/login']);
      })
      .catch(function (error) {
      });
  }

  getInputField(id: string) {
    let response = document.querySelector(id) as HTMLInputElement;
    return response;
  }


}
