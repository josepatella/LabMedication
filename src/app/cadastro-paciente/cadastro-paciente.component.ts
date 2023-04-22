import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastro-paciente',
  templateUrl: './cadastro-paciente.component.html',
  styleUrls: ['./cadastro-paciente.component.sass'],
})
export class CadastroPacienteComponent implements OnInit {
  pacientesCadastrados: any[] = [];
  Paciente: any = {
    nomeCompleto: '',
    sexo: '',
    dataNascimento: '',
    cpf: '',
    rg: '',
    telefone: '',
    estadoCivil: '',
    email: '',
    naturalidade: '',
    contatoEmergencia: '',
    listaAlergias: '',
    listaCuidados: '',
    convenio: '',
    numeroConvenio: '',
    validadeConvenio: '',
    cep: '',
    cidade: '',
    estado: '',
    logradouro: '',
    numero: '',
    complemento: '',
    bairro: '',
    pontoReferencia: '',
  };

  alerta = false;
  constructor() {}
  ngOnInit() {}

  public cadastrar(f: NgForm) {
    {
      this.pacientesCadastrados.push(this.Paciente);
      localStorage.setItem(
        'pacientesCadastrados',
        JSON.stringify(this.pacientesCadastrados)
      );
      this.Paciente = {
        nomeCompleto: '',
        sexo: '',
        dataNascimento: '',
        cpf: '',
        rg: '',
        telefone: '',
        estadoCivil: '',
        emil: '',
        naturalidade: '',
        contatoEmergencia: '',
        listaAlergias: '',
        listaCuidados: '',
        convenio: '',
        numeroConvenio: '',
        validadeConvenio: '',
        cep: '',
        cidade: '',
        estado: '',
        logradouro: '',
        numero: '',
        complemento: '',
        bairro: '',
        pontoReferencia: '',
      };
      alert('Cadastro realizado com sucesso!');
      this.alerta = true;
    }
  }
}
