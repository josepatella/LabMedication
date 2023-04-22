import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastro-medicamento',
  templateUrl: './cadastro-medicamento.component.html',
  styleUrls: ['./cadastro-medicamento.component.sass']
})
export class CadastroMedicamentoComponent implements OnInit {
  medicamentoPacienteCadastrados: any[] = [];
  medicamentoPaciente: any = {
    nomePaciente: '',
    medicamento: '',
    data: '',
    hora: '',
    tipo: '',
    quantidade: '',
    unidade: '',
    observacao: '',
  };

  alerta = false;
  constructor() {}
  ngOnInit() {}

  public cadastrar(f: NgForm) {
    {
      this.medicamentoPacienteCadastrados.push(this.medicamentoPaciente);
      localStorage.setItem(
        'pacientesCadastrados',
        JSON.stringify(this.medicamentoPaciente)
      );
      this.medicamentoPaciente = {
        nomePaciente: '',
    medicamento: '',
    data: '',
    hora: '',
    tipo: '',
    quantidade: '',
    unidade: '',
    observacao: '',
      };
      alert('Cadastro realizado com sucesso!');
      this.alerta = true;
    }
  }
}
