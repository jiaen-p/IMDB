import {Professional} from "./professional";

export class Movie{
    public title: string
    public releaseYear: number
    public actors: Professional[]
    public nationality: string
    public director: string
    public writer: string
    public language: string
    public platform: string
    public isMCU: boolean
    public mainCharacterName: string
    public producer: string
    public distributor: string
    private genre:string
    constructor(title: string,actors: Professional[], releaseYear: number, nationality: string, genre: string){
        this.title = title
        this.actors = actors
        this.releaseYear = releaseYear
        this.nationality = nationality
        this.genre = genre
    }
    public print(){
        let text = `
        Title: ${this.title}
        Year released: ${this.releaseYear}
        Nationality: ${this.nationality}
        Actor: : ${this.actors}
        Director: ${this.director} printProfessional
        Writer: ${this.writer} printProfessional
        Language: ${this.language}
        Platform: ${this.platform}
        Is it MCU: ${this.isMCU}
        Main character name: ${this.mainCharacterName}
        Producer: ${this.producer}
        Distrubuted by: ${this.distributor}
        `
        console.log(text)
    }
}
