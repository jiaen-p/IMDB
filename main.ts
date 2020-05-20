import {Professional} from "./professional";
import {Imdb} from "./imdb";

let alex = new Professional('alex', 28, 'masc', 76, 183, 'brown', 'brown', 'european', true, 'spanish', 0, 'b-ball coach');
let jiaen = new Professional('jiaen', 28, 'masc', 76, 186, 'black', 'brown', 'asiatic', false, 'spanish', 3, 'b-ball coach');

console.log(alex.print());
console.log(jiaen.print());

// ----------------------------------------------

import { Movie } from './Movie'

let m1 = new Movie("Infinity War",[jiaen], 2018, "USA", "Action")
m1.print()

let m2 = new Movie("Guns Akimbo",[alex], 2020, "UK, New Zealand and West Germany", "Comedy and Action")
m2.print()

let myImdb = new Imdb([m1, m2]);

// let imdbBBDD = myImdb.toJSON()

// --------------------------------------------
myImdb.escribirEnFicheroJson("peliculas")

// let myImdb2 = new Imdb([]).obtenerInstanciaIMSB("peliculas")
//  -----------------------
import * as readline from 'readline-sync'
let p1 = new Movie(readline.question('Titulo: '),
            readline.question([readline.question('Actor\nName: '),
            readline.question('Age: '),
            readline.question('Genre: '),
            readline.question('Weight: '),
            readline.question('Heigth: '),
            readline.question('Hair Color: '),
            readline.question('Eye Color: '),
            readline.question('Race: '),
            readline.question('Is Retired: '),
            readline.question('Nationality: '),
            readline.question('Oscars: '),
            readline.question('Profession: ')]),
            Number(readline.question('Año: ')), 
            readline.question('Pais: '),
            readline.question('Genero: '));

myImdb.peliculas.push(p1);
myImdb.escribirEnFicheroJson('imdbBBDD');
