import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {


  public nombre="Yonathan Beltran R.";
  public correo="nathanbelt23@gmail.com";
  public celular="+57 310 2711918";
  public likenid="https://www.linkedin.com/in/yonathan-beltran-romero-309114162/";
  public img="./assets/images/Yonathan.png";

  constructor() { }
}
