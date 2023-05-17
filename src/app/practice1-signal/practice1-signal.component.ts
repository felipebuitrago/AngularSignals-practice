import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

interface MenuItem {
  label?:string,
  link?:string,
}

interface Usuario {
  name:string,
  uid:string,
  role:string
}

@Component({
  selector: 'app-practice1-signal',
  templateUrl: './practice1-signal.component.html'
})
export class Practice1SignalComponent {

  title = 'signals-angular';

  notSignalArray = ["signal","array"];//referencia/state forma normal

  abrirMenu = signal(false);//señal de valor primitivo - boolean 
  // simitar to react => const [abrirMenu,setAbrirMenu] = useState(false)
  
  signalArray = signal(["signal","array"]);//señal de arreglo de tipos primitivos

  menuItems = signal<MenuItem[]>([//señal de arreglo de objetos de tipo MenuItem
    {label:"Inicio",link:"/"},
    {label:"Inventario",link:"/inventario"}
  ])

  usuario = signal<Usuario>(//señal de un objeto de tipo Usuario
    {name:"felipe",role:"administrador",uid:"jh776dcb676ad"}
  )

  //pequeño timer con señales
  public time = signal(new Date().toLocaleTimeString());

  intervaloReloj = setInterval(() => {
    this.time.set(new Date().toLocaleTimeString());
  },1000);
}
