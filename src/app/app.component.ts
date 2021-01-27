import { BuscaCEPService } from './busca-cep.service';
import { Component, OnInit } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task, FirestoreService } from './firestore.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Novo-Projeto';
  cpf_cnpj = ''

  cep: string = ''

  tasksList = [
    {name: 'Assign activities for w/c 10th October', priority: 'URGENT', done: 1},
    {name: 'Create Lesson Plan Autumn term', priority: 'NEW', done: 0},
    {name: 'Review Attainment report', priority: 'DEFAULT', done: 0},
    {name: 'Review something', priority: 'DEFAULT', done: 1},
    {name: 'Do something urgently', priority: 'URGENT', done: 1},
  ]

  private _tasks = new BehaviorSubject<any>(undefined)
  tasks$: Observable<Task[]> | undefined

  constructor(
    private buscaCEP: BuscaCEPService,
    private firestoreService: FirestoreService
  ) { }

  ngOnInit(): void {
    // this.tasks$ = this.firestoreService.obterTarefas()
  }

  onBotaoPressionado(evento: any) {
    // this.firestoreService.adcionarTarefa(this.tasksList[4])
  }

}
