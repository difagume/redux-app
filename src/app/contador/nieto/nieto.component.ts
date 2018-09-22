<<<<<<< HEAD
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-nieto',
    templateUrl: './nieto.component.html',
    styles: []
})
export class NietoComponent implements OnInit {

    @Input() contador: number;
    @Output() contadorCambio = new EventEmitter<number>();

    constructor() { }

    ngOnInit() {
    }

    reset() {
        this.contador = 0;
        this.contadorCambio.emit(this.contador);
    }
=======
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styles: []
})
export class NietoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
>>>>>>> b44eaac3fd0e3ea113a51c6777f2c903728956f4

}
