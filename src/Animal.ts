import AnimalAquatico from "./AnimalAquatico";
import AnimalTerreste from "./AnimalTerrestre";
import AnimalVoador from "./animalVoador";

class Animal implements AnimalVoador, AnimalAquatico, AnimalTerreste{
    id:Number;
    nome:String;
    especie:String;
    descricao:String;
    peso:Number;
    altura:Number;
    saude:Number;
    fome:Number;
    sono:Number;

    //Construtor de um Animal
    constructor(id:Number, nome:String,especie:String, descricao:String, peso:Number, altura:Number, saude:Number, fome:Number, sono:Number){
        this.id = id;
        this.nome = nome;
        this.especie = especie;
        this.descricao = descricao;
        this.peso = peso;
        this.altura = altura;
        this.saude = saude;
        this.fome = fome;
        this.sono = sono;
    }

    info = () =>{
        console.log("******* Info Animal *********");
        console.log("Nome: "+this.nome);
        console.log("Espécie: "+this.especie);
        console.log("Descrição: "+this.descricao);
        console.log("Altura: "+this.altura);
        console.log("Peso: "+this.peso);
        console.log("*****************************")
    }

    status = () =>{
        console.log("***** Status do Animal *****");
        console.log("Saude: "+this.saude);
        console.log("Fome: "+this.fome);
        console.log("Sono: "+this.sono);
        console.log("****************************");
    }





    /* ****************************************** */
    /* ***** Métodos sobre diminuir Status *****  */
    /* ****************************************** */
    
        //Diminui o status de fome do Pet. Quanto menor,
        //mais o pet se sente energizado.
        decrementoFome = (value:Number) =>{
            this.fome = +this.fome - +value;
            if (this.fome < 0){
                this.fome = 0;
            }
        }

        //Diminui o status de sono do Pet. Quanto menor,
        //mais ativo o Pet fica.
        decrementoSono = (value:Number) =>{
            this.sono = +this.sono - +value;
            if (this.sono < 0){
                this.sono = 0;
            }
        }

        //Diminui o status de saúde do Pet. Quanto menor,
        //mais o Pet se encontra em risco de morte.
        decrementoSaude = (value:Number) =>{
            this.saude = +this.saude - +value;
            if (this.saude < 0){
                this.saude = 0;
            }
        }

    /* ****************************************** */





    /* ****************************************** */
    /* ***** Métodos sobre aumentar Status *****  */
    /* ****************************************** */

        //Aumenta o status de fome do Pet. Quanto maior,
        //mais o Pet fica com fome.
        aumentoFome = (value:Number) =>{
            this.fome = +this.fome + +value;
            if (this.fome > 100){
                this.fome = 100;
            }
        }

        //Aumenta o status de Sono do Pet. Quanto maior,
        //mais sonolento ele fica.
        aumentoSono = (value:Number) =>{
            this.sono = +this.sono + +value;
            if (this.sono > 100){
                this.sono = 100;
            }
        }

        //Aumenta o status da saúde do Pet. Quando maior,
        //mais saudável o Pet fica.
        aumentoSaude = (value:Number) =>{
            this.saude = +this.saude + +value;
            if (this.saude > 100){
                this.saude = 100;
            }
        }

    /* ****************************************** */
    




    /* ****************************************** */
    /*  Métodos especificos para Pets Aquáticos   */
    /* ****************************************** */
        
        nadar = () => {
            console.log(this.nome+" está nadando profundamente...");
        }

    /* ******************************************* */





    /* ****************************************** */
    /*  Métodos especificos para Pets Voadores    */
    /* ****************************************** */
        
        voar = () =>{
            console.log(this.nome+" está voando rapidamente no céu...");
        }
    
    /* ****************************************** */





    /* ****************************************** */
    /*  Métodos especificos para Pets Terrestres  */
    /* ****************************************** */
    
        correr = () =>{
            console.log(this.nome+" está correndo muito rápido!!! Que velocidade!!!");
        }

    /* ****************************************** */
}

export default Animal;