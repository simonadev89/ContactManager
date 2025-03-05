import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-tabella-contatti',
  imports: [TableModule, ButtonModule, ],
  templateUrl: './tabella-contatti.component.html',
  styleUrl: './tabella-contatti.component.css'
})

export class TabellaContattiComponent {
@Input() contattiDaRiempire: any;
@Output() eliminaContatto = new EventEmitter<{nome:string, email: string, telefono: number}>();


  contattoDaEliminare(contatto: { nome: string; email: string; telefono: number }){
  this.eliminaContatto.emit(contatto);
  }
}



