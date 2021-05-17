export interface TurnosConsulta {
    id_turno:      number;
    fecha_turno:   Date;
    hora_inicio:   Date;
    hora_fin:      Date;
    id_estado:     number;
    nombre_estado: string;
    id_servicio:   number;
    nom_servicio:  string;
    id_comercio:   number;
    non_comercio:  string;
}


export interface ResponseAPI {
    ok:      boolean;
    message: string;
    id:      number;
}



export interface creacionTurno
{

    fecha_Inicio: Date;
    fecha_Fin: Date;
    servicio:number;
}



export interface Servicios {
    id_servicio:   number;
    nom_servicio:  string;
    hora_apertura: { [key: string]: number };
    hora_cierre:   { [key: string]: number };
    id_comercio:   number;
    comercio:      null;
    turno:         null;

 
}

export interface Comercios {
    id_comercio:  number;
    non_comercio: string;
    num_aforo:    number;
    servicio:     null;
}
