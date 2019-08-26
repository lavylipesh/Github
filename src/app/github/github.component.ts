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
  repo: Repositories;
  
  constructor( private httpservice:HttpserviceService) { }


  findUser(name){
    this.httpservice.searchUser(this.name).then(
      (result)=>{
        this.user = this.httpservice.userProfile
        console.log(this.user);
      },
      (error)=>{
        console.log(error);
      }
    )
    this.httpservice.getRepo(name).then(
      (success)=>{
        this.repo = this.httpservice.userRepo; 
        console.log(this.repo);
      },
      (error)=>{

      }
    )
  }

  ngOnInit() {
    this.findUser('lavylipesh');
     }

}
