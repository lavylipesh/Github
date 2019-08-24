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
    
    let searchEndpoint= "https://api.github.com/users/search?access_token=" + environment.GithubUrl;

    zjhsuhu