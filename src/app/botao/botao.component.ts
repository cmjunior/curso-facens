import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.scss']
})
export class BotaoComponent {
  @Input() texto: string = 'TESTE'
  @Output() pressionado = new EventEmitter<string>();

  onClick() {
    this.pressionado.emit('Botão foi Clicado...')
  }
}