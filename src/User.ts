import Animal from "./Animal";
import AnimalAquatico from "./AnimalAquatico";
import AnimalTerreste from "./AnimalTerrestre";
import AnimalVoador from "./AnimalVoador";
import Conta from "./Conta";
import ContaNormal from "./ContaNormal";
import ContaVip from "./ContaVip";
import {Md5} from "../node_modules/ts-md5/dist/md5";

class User{
    id:Number;
    nome:String;
    senha:String;
    email:String;
    conta:Conta;

    constructor (id:Number,nome:String, senha:String, email:String){
        this.id = id;
        this.nome = nome;
        this.senha = Md5.hashStr(""+senha+"");
        this.email = email;
        this.addContaNormal();
    }

    info = ()=>{
        console.log("Nome: "+this.nome);
        console.log("Senha: "+this.senha);
        console.log("Email: "+this.email);    
    }

    infoStatusConta =  ()=>{
        this.conta.status();
    }

    addContaVip =  ()=>{
        this.conta = new ContaVip();
    }

    addContaNormal = () =>{
        this.conta = new ContaNormal();
    }

    createAnimalVoador = (id:Number, nome:String, especie:String, descricao:String, peso:Number, altura:Number) =>{
        const animal:AnimalVoador = new Animal(id,nome,especie,descricao,peso,altura,100,0,0);
        return animal;
    }

    createAnimalAquatico = (id:Number, nome:String, especie:String, descricao:String, peso:Number, altura:Number) =>{
        const animal:AnimalAquatico = new Animal(id,nome,especie,descricao,peso,altura,100,0,0);
        return animal;
    }

    createAnimalTerreste = (id:Number, nome:String, especie:String, descricao:String, peso:Number, altura:Number) =>{
        const animal:AnimalTerreste = new Animal(id,nome,especie,descricao,peso,altura,100,0,0);
        return animal;
    }
}

export default User;