import { Historia, Proyect, Skill, User } from './interfaces';

export const USERS: User[] = [
  {
    id: 0,
    username: '',
    fullName: '',
    password: '',
    aboutMe:
      '',
    shortEducation: '',
    image: '',
    portraitImage: '',
  },
  {
    id: 1,
    username: 'sebas',
    fullName: 'Sebastian Contreras',
    password: '12345',
    aboutMe:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quo nesciunt accusamus dicta delectus ullam porro voluptatibus unde esse, recusandae eum assumenda magnam consequuntur beatae necessitatibus iusto reprehenderit harum ipsa?',
    shortEducation: 'Ingenieria en Computacion - Facet',
    image: './assets/images/thumbnail.jpg',
    portraitImage: './assets/images/portada.jpg',
  },
];

export const HISTORIAS: Historia[] = [
  {
    id: 1,
    idUser:1,
    title: '',
    place: '',
    date: '',
    image: '',
    tipo: false
  },
  {
    id: 2,
    idUser:1,
    title: '',
    place: '',
    date: '',
    image: '.',
    tipo: false
  },
  {
    id: 1,
    idUser:1,
    title: 'Universidad Nacional de tucuman',
    place: 'Ingenieria en Computacion - FACET',
    date: '2017-Actualidad',
    image: './assets/images/educacion/unt.jpg',
    tipo: true
  },
  {
    id: 2,
    idUser:1,
    title: 'Titulo Secundario',
    place: 'Instituto Congreso de tucuman SEOC',
    date: '2014-2016',
    image: './assets/images/educacion/LogoSEOC.jpg',
    tipo: true
  },
];
export const SKILLS: Skill[] = [
  {
    id: 1,
    title: 'HTML',
    percent: 100,
  },
  {
    id: 2,
    title: 'CSS',
    percent: 30,
  },
  {
    id: 3,
    title: 'JS',
    percent: 70,
  },
];
export const PROYECTS: Proyect[] = [
  {
    id: 1,
    title: 'Base de datos de Sistema de salud orientada a Covid-19',
    text: '',
    url: 'string',
  },
  {
    id: 2,
    title: 'Base de datos y Documentacion sistema de stock KCrepuestos',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe maiores cum blanditiis cupiditate adipisci suscipit minima obcaecati dolores, voluptate numquam accusamus architecto incidunt quas fuga quidem modi eum quod. Debitis!',
    url: 'string',
  },
  {
    id: 3,
    title: 'Contador de insectos en Sticky paper IA',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe maiores cum blanditiis cupiditate adipisci suscipit minima obcaecati dolores, voluptate numquam accusamus architecto incidunt quas fuga quidem modi eum quod. Debitis!',
    url: 'string',
  },
];
