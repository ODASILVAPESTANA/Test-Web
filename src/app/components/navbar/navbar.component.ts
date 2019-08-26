import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService:AuthService, private router:Router, private toastrService:ToastrService) { }

  ngOnInit(){}

  public exit(){
  	this.authService.logout();
  	this.toastrService.success('Cerrada la Sesion', 'Ok!');
  	this.router.navigate(['/login']);
  }
}