import { Component, OnInit } from '@angular/core';
import { ListaWebService} from '../service/lista-web.service';
import {User} from '../Model/User';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
   
  private idBuscar: number;
  private _msgErro: string = null;
  private _user: User=null;

  constructor(private UserSrv: ListaWebService) { }

  ngOnInit() {
  }



private pesquisar(){
  if (this.idBuscar <= 0){
    this._msgErro = "Digite um numero valido";
    this._user = null;
}
else{
  this._msgErro = null;
  this.UserSrv.get(this.idBuscar).subscribe((res: User) => {
    this._user = res;
    console.log(this._user);
  });
}   
}

}

