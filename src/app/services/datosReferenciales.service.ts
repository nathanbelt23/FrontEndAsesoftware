import { Injectable } from '@angular/core';
import { Comercios, Servicios } from '../models/modelo-app';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
const urlApi = environment.urlApi;
@Injectable({
  providedIn: 'root'
})
export class DatosReferencialeService {

  constructor(
    private HttpClient: HttpClient
  ) { }


  public obtenerServicios() {
    const url = `${urlApi}/referencial/servicios`;
    return this.HttpClient.get<Servicios[]>(url);
  }



  public obtenerComercios() {
    const url = `${urlApi}/referencial/comercios`;
    return this.HttpClient.get<Comercios[]>(url);
  }


}
