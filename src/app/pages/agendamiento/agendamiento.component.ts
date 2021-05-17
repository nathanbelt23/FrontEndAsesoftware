
import {AfterViewInit, ViewChild, Component, OnInit} from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';


import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, MatSortable } from '@angular/material/sort';

import { TurnosConsulta } from 'src/app/models/modelo-app';
import { TurnosService } from '../../services/turnos.service';
import { DatosReferencialeService } from '../../services/datosReferenciales.service';
import { Servicios, Comercios } from '../../models/modelo-app';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-agendamiento',
  templateUrl: './agendamiento.component.html',
  styleUrls: ['./agendamiento.component.css']
})
export class AgendamientoComponent implements OnInit  , AfterViewInit{


  public turnosConsulta: TurnosConsulta[] = [];
  public Servicios: Servicios[] = [];
  public  Comercios:Comercios[]=[];
  public booCargando :boolean=false;
  public servicioFiltro :number=0;
  public comercioFiltro :number=0;

  public dataSource = new MatTableDataSource([]);
  
  displayedColumns: string[] = ['fecha_turno', 'hora_inicio', 'hora_fin', 'nombre_estado', 'nom_servicio', 'non_comercio'];


  @ViewChild(MatPaginator, {read: true}) paginator: MatPaginator;
  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.dataSource.paginator = this.paginator;
  }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatSort, {static: false}) set content(sort: MatSort) {
    this.dataSource.sort = sort;
  }


  

  ngAfterViewInit() {
  
  }
 

  public form: FormGroup = this.FormBuilder.group(
    {
      fecha_Inicio: [new Date(), Validators.required],
      fecha_Fin: [new Date(), [Validators.required]],
      servicio: [0, Validators.min(1)]

    }
    , {
      validators: this.fechaValidacion('fecha_Inicio', 'fecha_Fin')
    }

  );

  constructor(

    private TurnosService: TurnosService
    , private DatosReferencialeService: DatosReferencialeService
    , private FormBuilder: FormBuilder
  ) {



  }


  ngOnInit(): void {
  
    this.llenarTurnos();
    this.llenarServicios();
    this.llenarComercios();
    this.dataSource.sort = this.sort;
  }

  llenarServicios() {

    this.booCargando= true;
    this.DatosReferencialeService.obtenerServicios().subscribe(p => {
    this.Servicios = p;
     this.booCargando= false;
    }
    
    , (errr:any)=>{
              
      Swal.fire(
        {
          icon:'error',
          text: 'Ups no pudimos traer los datos intenta en otro momento , pero antes revisa el proyecto .net si corre ',
          timer: 7000
        }
      );
    }
    
    );
  }
  llenarComercios() {
    this.DatosReferencialeService.obtenerComercios().subscribe(p => {
        this.Comercios= p;
    }
    );
  }

  llenarTurnos() {
    this.booCargando= true;
    this.TurnosService.obtenerTurnos().subscribe(p => {
    
      this.turnosConsulta = p;
      this.booCargando= false;
      this.dataSource= new MatTableDataSource<TurnosConsulta>(this.turnosConsulta);
      this.dataSource.paginator = this.paginator;
      

 
      setTimeout(() => {
        this.dataSource.sort = this.sort; 
      });

      this.servicioFiltro=0;
      this.comercioFiltro=0;

    });
  }



  public guardar() {
    Swal.fire(
      {
        title: 'Estas seguro?',
        text: "Deseas  ingresar este turno!",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, dale!'
      }
    ).then((result) => {
      if (result.value) {
        this.booCargando= true;
        this.TurnosService.crearTurno(this.form.value).subscribe
          (
            p => {
            
              Swal.fire(
                {
                  icon: p.ok ? 'success' : 'error',
                  text: p.ok ? `${p.message} id ${p.id} ` : p.message,
                  timer: 5000
                }

              );

              this.llenarTurnos();

            }, (errr:any)=>{
              
              Swal.fire(
                {
                  icon:'error',
                  text: 'Ups no pudimos guardar',
                  timer: 5000
                }
              );

            }
          );

      }

    }
    );

  }


  campoNoValido(control: string) {

    if (this.form.get(control).invalid && this.form.get(control).touched) {
      return true;
    } else {
      return false;
    }

  }

  fechaValidacion(fecha_Inicio: string, fecha_Fin: string) {

    return (formGroup: FormGroup) => {

      const fecha_InicioControl = formGroup.get(fecha_Inicio);
      const fecha_FinControl = formGroup.get(fecha_Fin);

      if ((new Date(fecha_InicioControl.value)).getDate() <( new Date()).getDate()) {
        fecha_InicioControl.setErrors({ esMayorAHoy: true })
        
      }
      else
        if (new Date(fecha_InicioControl.value) <= new Date(fecha_FinControl.value)) {
          fecha_InicioControl.setErrors(null)
        } else {
          fecha_InicioControl.setErrors({ esMayorAFinal: true })
        }


    }
  }

  
  
  onChangeSelectServicio()
  {
    let turnoTemp:TurnosConsulta[]=[];
    this.comercioFiltro=0;

    if(this.servicioFiltro==0)
    {

      turnoTemp= this.turnosConsulta; 
    }
    else
    {
     turnoTemp= this.turnosConsulta.filter(x=> x.id_servicio== this.servicioFiltro); 
    }
    this.dataSource= new MatTableDataSource<TurnosConsulta>(turnoTemp);
    this.dataSource.paginator = this.paginator;
    


    setTimeout(() => {
      this.dataSource.sort = this.sort; 
    });

  }


  onChangeSelectComercio()
  {

    this.servicioFiltro=0;
    let turnoTemp:TurnosConsulta[]=[];
    if(this.comercioFiltro==0)
    {
    turnoTemp= this.turnosConsulta; 
    }
    else
    {
     turnoTemp= this.turnosConsulta.filter(x=> x.id_comercio== this.comercioFiltro); 
    }
    this.dataSource= new MatTableDataSource<TurnosConsulta>(turnoTemp);
    this.dataSource.paginator = this.paginator;
    


    setTimeout(() => {
      this.dataSource.sort = this.sort; 
    });
  }


}

