import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-practice2-signal',
  templateUrl: './practice2-signal.component.html'
})
export class Practice2SignalComponent {

  public multiplo1 = signal(1);
  public multiplo2 = signal(2);
  public squareCompute = computed( () =>{
    return this.multiplo1() * this.multiplo2();
  } );

  intervalo = setInterval(()=>{
    this.multiplo1.update(value=>value+2);
    this.multiplo2.update(value=>value+2);
  },3000)
}
