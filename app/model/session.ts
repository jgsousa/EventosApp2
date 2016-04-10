import {Speaker} from "./speaker";

export class Session {
    _id:string;
    eventoId:string;
    nome:string;
    dataInicio:string;
    dataFim:string;
    speaker: Speaker;
    descricao:string;
    local:string;

    get horario():string {
        console.log("passou");
        return this.dataInicio + " - " + this.dataFim;
    }

    constructor(){
        this.dataInicio = new Date().toISOString();
        this.dataFim = new Date().toISOString();
    }

}