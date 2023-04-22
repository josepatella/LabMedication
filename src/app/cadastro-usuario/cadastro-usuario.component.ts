import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.sass'],
})
export class CadastroUsuarioComponent implements OnInit {
  usuariosCadastrados: any[] = [];
  Usuario: any = {
    email: '',
    senha: '',
    confirmaSenha: '',
  };
  alerta = false;
  constructor() {}
  ngOnInit() {}

  public cadastrar(f: NgForm) {
    {
      if (this.Usuario.senha !== this.Usuario.confirmaSenha) {
        window.alert('Erro digite senhas iguais.');
      } else {
        this.usuariosCadastrados.push(this.Usuario);
        localStorage.setItem(
          'UsuariosCadastrados',
          JSON.stringify(this.usuariosCadastrados)
        );
        this.Usuario = {
          email: '',
          senha: '',
          confirmaSenha: '',
        };
        alert('Cadastro realizado com sucesso!');
        this.alerta = true;
      }
    }
  }
}
