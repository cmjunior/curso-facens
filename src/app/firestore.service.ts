import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

export interface Task {
  id: string,
  name: string,
  prioridade: string
}

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  constructor(
    private firestore: AngularFirestore
  ) { }

  obterTarefas() {
    return this.firestore.collection<Task>('tarefas', ref => ref.where('dataExclusao', '==', null)).snapshotChanges()
  }

  adcionarTarefa(tarefa: Task) {
    if ( tarefa.id ) {
      this.firestore.doc(`tarefas/${tarefa.id}`).update({...tarefa})
    } else {
      let id = this.firestore.createId()    
      this.firestore.doc(`tarefas/${id}`).set({...tarefa, id})
    }
  }

  convertSnaps<T>(snaps: any) {
    return <T> snaps.map( (snap: any)  => {
        return {
            ...snap.payload.doc.data(),
            id: snap.payload.doc.id,
        }
    })
}

}
