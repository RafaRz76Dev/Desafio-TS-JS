"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userYouMade = void 0;
// Validações :
// Inicializando os valores em uma constante
var initialUser = {
    name: "",
    age: 0,
    work: "",
    siblings: 0,
    rating: 0,
    applications: [],
    active: false
};
// Usando let para a variável userYouMade
var userYouMade = initialUser;
exports.userYouMade = userYouMade;
// Atribuindo valores às propriedades
userYouMade.name = "Rafa Raizer";
userYouMade.age = 47;
userYouMade.work = "Desenvolvedor";
userYouMade.siblings = 2;
userYouMade.rating = 10;
userYouMade.applications = ['Adm', 'Dev'];
userYouMade.active = true;
