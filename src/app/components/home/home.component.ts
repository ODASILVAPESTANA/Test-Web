import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Data } from '../../models/response';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private data:Data[];	

  constructor(private authService:AuthService) { }

  ngOnInit(){
    this.getData();
  }

  public getData(){
  	let cid:string = this.authService.readCID();
  	this.authService.getData(cid).subscribe((resp)=>{
  		this.data = resp;
  	},(err)=>{
  		console.log('Error!!!',err);
  	});
  }
}