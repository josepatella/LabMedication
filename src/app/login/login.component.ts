import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  usuariosCadastrados = [];
  loginObj: any = {
    email: '',
    senha: '',
  };
  constructor() {}
  ngOnInit() {
  }
  alerta = false;
  entrar(f: NgForm) {

    const localData = (localStorage.getItem('usuariosCadastrados'));
    if (localData != null) {
      this.usuariosCadastrados = JSON.parse(localData);
    }
else{
  this.usuariosCadastrados = [];

}
console.log(this.usuariosCadastrados)
    }

}

