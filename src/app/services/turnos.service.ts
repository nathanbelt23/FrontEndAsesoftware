import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { TurnosConsulta, creacionTurno, ResponseAPI } from '../models/modelo-app';

const  urlApi= environment.urlApi;
@Injectable({
  providedIn: 'root'
})
export class TurnosService {

  constructor(
    private HttpClient:HttpClient,
    

  ) {



   }



   public obtenerTurnos()
   {
         const url=`${urlApi}/Turnos`;
         return this.HttpClient.get<TurnosConsulta[]>(url);
   }

   public crearTurno(data:creacionTurno)
   {

    console.log(data);
         const url=`${urlApi}/Turnos`;
         data.servicio=   Number( data.servicio);
         return this.HttpClient.post<ResponseAPI>(url, data);
   }


}
