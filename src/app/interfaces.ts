export interface User {
  id?: number;
  username:string;
  password:String;
  fullName:string;
  aboutMe: string;
  shortEducation: string;
  image: string;
  portraitImage: string;
}

export interface Historia {
  id?: number;
  title: string;
  place: string;
  date: string;
  image: string;
}

export interface Skills {
    id?: number;
    title: string;
    percent: number;
}
export interface Proyects {
    id?: number;
    title: string;
    text: number;
    url: string;
}
  