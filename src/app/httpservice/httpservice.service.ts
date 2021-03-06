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
  GithubUrl = '?access_token=' + environment.GithubUrl;
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
      this.lipesh.get<person>("https://api.github.com/users/"+ name +"?access_token="+ environment.GithubUrl).toPromise().then(
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
  
  getRepo(name: string){
    interface Myrepo {
      id: string;
      name: string;
    // tslint:disable-next-line:variable-name
      html_url: string;
      description: string;
    }
    return new Promise((resolve, reject) => {
      this.lipesh.get<Myrepo>("https://api.github.com/users/" + name + '/repos?' + environment.GithubUrl).toPromise().then(
        (result) => {
          this.userRepo = result;
          console.log(this.userRepo)
          resolve();
        },
        (error) => {
          reject();
        }
      );
    });

  }


}
