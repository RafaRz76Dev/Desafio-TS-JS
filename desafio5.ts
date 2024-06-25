
import { Equal, Expect, ExpectExtends } from "./types/validateTypes";

// Seu código vai aqui :
// O usuário userYouMade precisa ter seus atributos válidos, mexa apenas na tipagem abaixo :

interface IUserYouMade {
  name: string;
  age: number;
  work: string;
  siblings: number;
  rating: number;
  applications: string[];
  active: boolean;
}

// Validações :
// Inicializando os valores em uma constante
const initialUser: IUserYouMade = {
  name: "",
  age: 0,
  work: "",
  siblings: 0,
  rating: 0,
  applications: [],
  active: false
};

// Usando let para a variável userYouMade
let userYouMade: IUserYouMade = initialUser;
// Atribuindo valores às propriedades

userYouMade.name = "Rafa Raizer"
userYouMade.age = 47
userYouMade.work = "Desenvolvedor"
userYouMade.siblings = 2
userYouMade.rating = 10
userYouMade.applications = ['Adm', 'Dev']
userYouMade.active = true

export { userYouMade };