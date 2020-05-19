import {Professional} from "./professional";
import {Imdb} from "./imdb";

let alex = new Professional('alex', 28, 'masc', 76, 183, 'brown', 'brown', 'european', true, 'spanish', 0, 'b-ball coach');
let jiaen = new Professional('jiaen', 28, 'masc', 76, 186, 'black', 'brown', 'asiatic', false, 'spanish', 3, 'b-ball coach');

console.log(alex.print());
console.log(jiaen.print());

// ----------------------------------------------

import { Movie } from './Movie'

let m1 = new Movie("Infinity War", 2018, "USA", "Action")
m1.print()

let m2 = new Movie("Guns Akimbo", 2020, "UK, New Zealand and West Germany", "Comedy and Action")
m2.print()

let myImdb = new Imdb([m1, m2]);

let imdbBBDD = myImdb.toJSON()

// --------------------------------------------
myImdb.escribirEnFicheroJson("peliculas")

let myImdb2 = new Imdb([]).obtenerInstanciaIMSB("peliculas")
myImdb.escribirEnFicheroJson("escrito")
//  -----------------------
let m3 = new Movie("alsdkjafl",2200, "España", "Comedia")
myImdb.peliculas.push(m3)

myImdb.escribirEnFicheroJson("imdbBBDD")