import { Component, OnInit, TemplateRef  } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user:User;
  private formLogin:FormGroup;
  private letters:any; 

  constructor(private authService:AuthService, 
              private router:Router, 
              private formBuilder:FormBuilder,
              private toastrService:ToastrService){}

    ngOnInit(){
      this.user = new User();
      this.formLogin = this.formBuilder.group({
        'username': new FormControl('', Validators.required),
        'password': new FormControl('', Validators.required),
        'type': new FormControl('', Validators.required),
      });

      this.letters = [{ abbrev: 'V'},
                      { abbrev: 'E'},
                      { abbrev: 'P'}];
    }


  public recuperarContrasena(){
    alert("recuperar contraseña");
  }


  public login(form){
    if(this.formLogin.valid){
      //console.log('Formulario',this.formLogin);
      this.user.username = form.username;
      this.user.password = form.password;
      this.user.type = form.type;
      this.authService.loginUser(this.user).subscribe((resp)=>{
        if(resp.status == 'ok'){
          this.authService.saveCID(resp.cid);
          //console.log('RESPUESTA',resp);
          this.toastrService.success('Bienvenido', 'Ok!');
          this.router.navigate(['/home']);
        }
      },(err)=>{
        if(err.status == 400){
          this.toastrService.error('Datos Incorrectos', 'Error!');
        } 
        //console.log('Error!!!',err);
        return
      }); 
    }
    else
    {  return;  }
  }
}