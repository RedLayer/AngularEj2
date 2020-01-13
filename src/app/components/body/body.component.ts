import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styles: []
})
export class BodyComponent implements OnInit {
  mostrar = true;

  personajes: string[] = ['Spiderman', 'Hulk', 'Thor', 'Daredevil'];

  frase: any = {
    mensaje: 'Un gran poder requiere una gran personalidad',
    autor: 'Ben Parker'
}

  constructor() { }

  ngOnInit() {
  }

}
