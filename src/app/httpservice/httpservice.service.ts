import { Injectable } from '@angular/core';
import { Github } from '../github';
import { HttpClient } from '@angular/common/http';
import {Repositories} from '../repositories'


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
      this.lipesh.get<person>('https://api.github.com/users/lavylipesh?access_token=b5e8cd8a999c688a5b3ff4b70f6b122c04e76263').toPromise().then(
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
      
    }
  }
  


}
