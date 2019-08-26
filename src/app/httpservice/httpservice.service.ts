import { Injectable } from '@angular/core';
import { Github } from '../github';
import { HttpClient } from '@angular/common/http';
import {Repositories} from '../repositories';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {
  userProfile: Github;
  userRepo:Repositories;

  constructor(private lipesh:HttpClient) {  }
  

  searchUser(name:string){
    interface person{
      bio:string;
      name:any;
      login: any;
      location:any;
      followers:any;
      following:any;
      avatar_url:any;
      public_repos:any;
    }
    return new Promise((resolve, reject)=>{
      this.lipesh.get<person>("https://api.github.com/users/"+this.userProfile+"?access_token="+ environment.GithubUrl).toPromise().then(
        (result)=>{
          console.log(result)
          this.userProfile = result;
          resolve();
        },
        (error)=>{
          console.log(error);
        })
    })
  }
  searchRepository(name:string){
    interface repos{
      name:string;
      description:string;
      full_name:string;
      html_url:any;
    }
    return new Promise((resolve, reject)=>{
      this.lipesh.get<repos>("https://api.github.com/users/"+this.searchRepository+"?access_token="+environment.GithubUrl).toPromise().then(
        
        (success)=>{
          console.log(success)
          this.userRepo = success;
          resolve();
        },
        (error)=>{
          console.log(error);
        })
    })
    
  }
  


}
