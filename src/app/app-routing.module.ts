import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { HomeComponent } from './home/home.component';
import { CadastroPacienteComponent } from './cadastro-paciente/cadastro-paciente.component';
import { CadastroMedicamentoComponent } from './cadastro-medicamento/cadastro-medicamento.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'cadastro-usuario', component: CadastroUsuarioComponent},
  {path:'home', component: HomeComponent},
  {path:'cadastro-paciente', component: CadastroPacienteComponent},
  {path:'cadastro-medicamento', component: CadastroMedicamentoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
