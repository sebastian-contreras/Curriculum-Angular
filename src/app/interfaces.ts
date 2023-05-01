export interface User {
  id?: number;
  email?:string;
  password:String;
  fullName:string;
  aboutMe?: string;
  shortEducation?: string;
  image?: string;
  portraitImage?: string;
}

export interface Historia {
  id?: number;
  iduser:number;
  title: string;
  place: string;
  date: string;
  image: string;
  tipo: boolean;
  // 0 = Experiencias , 1 = Educacion
}

export interface Skill   {
    id?: number;
    iduser?:number;
    title: string;
    percent: number;
}
export interface Credentials   {
  email: string;
  password: string;
}
export interface Proyect {
    id?: number;
    iduser?:number;
    title: string;
    text: string;
    url: string;
}
  