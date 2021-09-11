import Animal from "./Animal";
import AnimalAquatico from "./AnimalAquatico";
import AnimalVoador from "./animalVoador";
import User from "./User";


const usuario:User = new User(1,"Cláudio Alves", "123Admin", "email@example.com");


//Lógica do Princípio de Liskov
usuario.info();
usuario.infoStatusConta();
usuario.addContaVip();
usuario.infoStatusConta();


/*

//Lógica do Princípio da Segregação de Interfaces 
const peixeNalta:AnimalAquatico = usuario.createAnimalAquatico(1,"Peixenalta", "Peixe-Palhaço", "Peixenalta adora nadar muito fundo", 0.50, 0.54);
peixeNalta.info();
peixeNalta.nadar();
peixeNalta.status();
peixeNalta.decrementoFome(1);
peixeNalta.status();


*/