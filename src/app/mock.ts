import { Historia, Proyect, Skill, User } from './interfaces';

export const USERS: User[] = [
  {
    id: 0,
    fullname: '',
    aboutMe:
      '',
    shortEducation: '',
    image: '',
    portraitImage: '',
  },
  {
    id: 1,
    fullname: '',
    aboutMe:
      '',
    shortEducation: '',
    image: '',
    portraitImage: '',
  },
];

export const HISTORIAS: Historia[] = [
  {
    id: 1,
    idusuario:1,
    title: '',
    place: '',
    date: '',
    image: '',
    tipo: false
  },
  {
    id: 2,
    idusuario:1,
    title: '',
    place: '',
    date: '',
    image: '.',
    tipo: false
  },
  {
    id: 3,
    idusuario:1,
    title: '',
    place: '',
    date: '',
    image: '',
    tipo: true
  },
  {
    id: 4,
    idusuario:1,
    title: '',
    place: '',
    date: '',
    image: '',
    tipo: true
  },
];
export const SKILLS: Skill[] = [
  {
    id: 1,
    title: '',
    percent: 100,
  },
];
export const PROYECTS: Proyect[] = [
  {
    id: 1,
    title: 'Cargando',
    text: '',
    url: 'string',
  }
];
