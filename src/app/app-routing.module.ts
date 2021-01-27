import { BotaoComponent } from './botao/botao.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormTarefaComponent } from './form-tarefa/form-tarefa.component';

const routes: Routes = [  
  { path: 'botao', component: BotaoComponent },
  { path: 'form', component: FormTarefaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
