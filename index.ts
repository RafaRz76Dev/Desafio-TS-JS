import IFullUser from "./desafio1";
import './desafio2';
import { duplicarNumero } from "./desafio3";
import { list_of_packs } from "./desafio4";
import { userYouMade } from "./desafio5";

console.log("\n- Apresentação dos Desafios: \n")

//Deasfio 01 
const fullUser: IFullUser = {
    name: "Rafa Raizer",
    work: "Desenvolvedor Front End Júnior",
    age: 47
};

console.log("\n- Desafio 1: ", fullUser);


//Desafio 2: Se o arquivo compilar sem erros, significa que os tipos são equivalentes.
console.log("\n- Desafio 2 => Os tipos ISiblingsUser e IExtendedWithoutFields são equivalentes.\n");


// Desafio 3: Vai imprimir true se duplicarNumero for uma função conforme o tipo esperado
console.log("\n- Desafio 3: => ", typeof duplicarNumero === 'function');

// Teste adicional para verificar o comportamento da função
console.log("\n Testando duplicarNumero(2): ", duplicarNumero(2) === 4); // Deve imprimir true

// Desafio 4: 
console.log("\n- Desafio 4 ", "\n Valores da Lista =>", list_of_packs); // Deve aceitar valores numéricos e de texto

// Desafio 5:
console.log("\n- Desafio 5:");
console.log("\n Nome: =>", userYouMade.name);
console.log("\n Idade:", userYouMade.age);
console.log("\n Trabalho:", userYouMade.work);
console.log("\n Irmãos:", userYouMade.siblings);
console.log("\n Avaliação:", userYouMade.rating);
console.log("\n Aplicativos:", userYouMade.applications.join(', '));
console.log("\n Ativo:", userYouMade.active);

