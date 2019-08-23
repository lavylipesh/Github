import {Injectable} from '@angular/core';
import {HttpClient} from'@angular/common/http';
import {environment} from '../../environments/environment';
import {Github} from '../github';

@Injectable({
  providedIn: 'root'
})
export class GithubRequestService {
  users:Github[]=[];
  constructor(private http:HttpClient) { }

  searchGithub(search:string){
    interface Results{
      data:[];
    } 
  
    let searchEndpoint= "https://api.github.com/users/search?api_key=" + environment.GithubUrl;

    let promise =  new Promise((resolve, reject)=>{
        this.http.get<Results>(searchEndpoint+"&q="+search).toPromise().then(

          (results)=>{
            this.users=[];
            for(let i=0; i<results["data"].length; i++){
              this.users.push(new Github());
              
            }
            console.log(this.users);
            resolve()
          },
          (error)=>{
            console.log(error)
            reject()
          }
        )
    })
    return promise;
  }
}