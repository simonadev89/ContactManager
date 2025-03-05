import { Component } from '@angular/core';
import { ContattiComponent } from "./contatti/contatti.component";

@Component({
  selector: 'app-root',
  imports: [ContattiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ContactManager';
}
