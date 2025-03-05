import { Component, OnInit, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { FormsModule, NgForm } from '@angular/forms';
import { FloatLabel } from 'primeng/floatlabel';
import { EventEmitter } from '@angular/core';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-form-contatti',
  imports: [ButtonModule, FormsModule, FloatLabel, CardModule, CommonModule],
  templateUrl: './form-contatti.component.html',
  styleUrl: './form-contatti.component.css'
})

export class FormContattiComponent implements OnInit{
  @Output() mandaContatto = new EventEmitter<{nome:string, email: string, telefono: string}>();
  
  public nome!: string;
  public email!: string;
  public telefono!: string;

constructor(){ }


ngOnInit(): void {}

  inserisciContatto(form: NgForm){
    if(form.valid) {
      const contatto ={
      nome: this.nome, 
      email: this.email, 
      telefono: this.telefono
  };
  this.mandaContatto.emit(contatto);
  form.reset();
    this.nome = '';
    this.email = '';
    this.telefono = '';
    }
  }
}
