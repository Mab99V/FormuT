import { Component, OnInit } from '@angular/core';
import { FormuT } from '../TestdeFormula/FormuT';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UiComponent implements OnInit {
 

  constructor() {
  
  }

  ngOnInit(): void {

    }

    //variables
    value1 = 0;
    value2= 0;
    resultado= 0;

    multiplicacion(){
      let res= 0;
       res= FormuT(this.value1, this.value2);
      this.resultado = res;
    }
  }


