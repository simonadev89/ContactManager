import { Component } from '@angular/core';
import { FormContattiComponent } from "./form-contatti/form-contatti.component";
import { TabellaContattiComponent } from "./tabella-contatti/tabella-contatti.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contatti',
  imports: [FormContattiComponent, CommonModule, TabellaContattiComponent],
  templateUrl: './contatti.component.html',
  styleUrl: './contatti.component.css'
})
export class ContattiComponent {
contatti: { nome: string; email: string; telefono: string }[] = [];
  contatto: any;

  riceviContatto(value:any){
    this.contatti.push(value);
}

  eliminaContatto(value:any){
  const index = this.contatti.findIndex(contatto => contatto === value);
    if (index !== -1) {
      this.contatti.splice(index, 1);
    //   console.log(`Contatto rimosso: ${JSON.stringify(value)}`);
    // } else {
    // console.log('Contatto non trovato.');
    }
  }
}