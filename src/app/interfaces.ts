export interface User {
  id?: number;
  email?:string;
  fullname:string;
  aboutMe?: string;
  shortEducation?: string;
  image?: string;
  portraitImage?: string;
}

export interface Historia {
  id?: number;
  idusuario:number;
  title: string;
  place: string;
  date: string;
  image: string;
  tipo: boolean;
  // 0 = Experiencias , 1 = Educacion
}

export interface Skill   {
    id?: number;
    idusuario?:number;
    title: string;
    percent: number;
}
export interface Credentials   {
  email: string;
  password: string;
}
export interface Proyect {
    id?: number;
    idusuario?:number;
    title: string;
    text: string;
    url: string;
}
  