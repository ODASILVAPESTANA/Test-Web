import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from '../models/user';
import { Response } from '../models/response';
import { Data } from '../models/response';
import { environment } from '../../environments/environment';


@Injectable()
export class AuthService {

  private URL:string = environment.server;
  private cid:string;	

  constructor(private httpClient:HttpClient){}

  
  public loginUser(user:User){
    const path = `${this.URL}/session`;
    return this.httpClient.post<Response>(path,user);
  }

  public getData(id:string){
  	const path = `${this.URL}/data?cid=${id}`;
  	return this.httpClient.get<Data[]>(path);
  }

  public logout(){
    localStorage.removeItem('cid');
  }

  public saveCID(cid:string){
      this.cid = cid;
      localStorage.setItem('cid',this.cid);
  }

  public readCID(){
    if(localStorage.getItem('cid')){
      this.cid = localStorage.getItem('cid');
    }else{
      this.cid = "";
    }
    return this.cid;
  }

  public Authenticated():boolean{
    if(localStorage.getItem('cid'))
    {  return true;  }
    else
    {  return false; } 
  }
}