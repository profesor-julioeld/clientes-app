import { Component} from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})
export class DirectivaComponent {
  habilitar:boolean=true;
  listadoCursos: string[] = ["TypeScript","JavaScript","Java SE","C#","PHP"];
  constructor() { }
}
