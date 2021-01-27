import { FirestoreService } from './../firestore.service';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-form-tarefa',
  templateUrl: './form-tarefa.component.html',
  styleUrls: ['./form-tarefa.component.scss']
})
export class FormTarefaComponent implements OnInit {
  formulario: FormGroup
  tarefas$: any

  constructor(
    private firestore: FirestoreService,
    private formBuilder: FormBuilder,
  ) {
    this.formulario = this.formBuilder.group({
      id: [''],
      name: ['', [Validators.required, Validators.minLength(10)]],
      prioridade: ['']
    })

  }

  salvarTarefa() {
    this.firestore.adcionarTarefa(this.formulario.value)
    this.formulario.reset()
    this.formulario.updateValueAndValidity()
  }

  ngOnInit(): void {
    this.firestore.obterTarefas().subscribe( snaps => {
      let teste = this.firestore.convertSnaps(snaps)
      this.tarefas$ = of(teste)
    })
  }

  selecionarTarefa(tarefa: any) {
    this.formulario.patchValue(tarefa)
  }

  // checkField(field: string, error: string) {
  //   let control: AbstractControl = this.formulario.get(field)
  //   if ( control ) {
  //     return (control.invalid && ( control.dirty || control.touched )) && control.hasError(error)
  //   }
  // }

}
