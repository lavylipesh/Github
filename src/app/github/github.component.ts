import { Component, OnInit } from '@angular/core';
import { Github } from '../github';
import { HttpserviceService } from '../httpservice/httpservice.service';
import {Repositories} from '../repositories';


@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  user: Github;
  name:string;
  constructor( private httpservice:HttpserviceService) { }

  ngOnInit() {
 this.findUser('');
  }

  findUser(name){
    this.httpservice.searchUser(name).then(
      (result)=>{
        this.user = this.httpservice.userProfile
        console.log(this.user);
      },
      (error)=>{
        console.log(error);
      }
    )
  }

}
