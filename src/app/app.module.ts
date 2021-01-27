import { BuscaCEPService } from './busca-cep.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BotaoComponent } from './botao/botao.component';
import { FormatPipe } from './format.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CpfCnpjDirective } from './cpf-cnpj.directive';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { AngularFireModule } from '@angular/fire';
import { environment } from './../environments/environment';
import { FormTarefaComponent } from './form-tarefa/form-tarefa.component';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button'; 
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    BotaoComponent,
    FormatPipe,
    CpfCnpjDirective,
    FormTarefaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [
    BuscaCEPService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }