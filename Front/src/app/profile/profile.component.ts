import { Component, OnInit } from '@angular/core';
import { user } from '../user';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  user: user | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {

    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('userid'));
    this.LoadData(productIdFromRoute);
  }

  LoadData(id : number) {
    var data = '';
    var config = {
      method: 'get',
      url: 'http://localhost:5148/user/get/' + id,
      headers: {},
      data: data,
    };
    var instance = this;

    axios(config)
      .then(function (response : any) {
        console.log(response.data)
        instance.user = response.data;
      })
      .catch(function (error: any) {
        console.log(error);
      });
  }
}
