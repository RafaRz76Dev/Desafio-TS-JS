"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./desafio2");
var desafio3_1 = require("./desafio3");
var desafio4_1 = require("./desafio4");
var desafio5_1 = require("./desafio5");
console.log("\n- Apresentação dos Desafios: \n");
//Deasfio 01 
var fullUser = {
    name: "Rafa Raizer",
    work: "Desenvolvedor Front End Júnior",
    age: 47
};
console.log("\n- Desafio 1: ", fullUser);
//Desafio 2: Se o arquivo compilar sem erros, significa que os tipos são equivalentes.
console.log("\n- Desafio 2 => Os tipos ISiblingsUser e IExtendedWithoutFields são equivalentes.\n");
// Desafio 3: Vai imprimir true se duplicarNumero for uma função conforme o tipo esperado
console.log("\n- Desafio 3: => ", typeof desafio3_1.duplicarNumero === 'function');
// Teste adicional para verificar o comportamento da função
console.log("\n Testando duplicarNumero(2): ", (0, desafio3_1.duplicarNumero)(2) === 4); // Deve imprimir true
// Desafio 4: 
console.log("\n- Desafio 4 ", "\n Valores da Lista =>", desafio4_1.list_of_packs); // Deve aceitar valores numéricos e de texto
// Desafio 5:
console.log("\n- Desafio 5:");
console.log("\n Nome: =>", desafio5_1.userYouMade.name);
console.log("\n Idade:", desafio5_1.userYouMade.age);
console.log("\n Trabalho:", desafio5_1.userYouMade.work);
console.log("\n Irmãos:", desafio5_1.userYouMade.siblings);
console.log("\n Avaliação:", desafio5_1.userYouMade.rating);
console.log("\n Aplicativos:", desafio5_1.userYouMade.applications.join(', '));
console.log("\n Ativo:", desafio5_1.userYouMade.active);
