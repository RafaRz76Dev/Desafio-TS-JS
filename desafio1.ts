import { Expect, ExpectExtends } from "./types/validateTypes";
// Modificação de IFullUser para possuir os campos de IUserWorker e IUserStudent
interface IFullUser extends IUserWorker, IUserStudent { }

// Definição das interfaces auxiliares
interface IUserWorker {
  name: string;
  work: string;
}

interface IUserStudent {
  name: string;
  age: number;
}

// Validações
type casosDeValidacao = [
  Expect<ExpectExtends<IUserWorker, IFullUser>>, // Confere se IFullUser possui campos do Worker
  Expect<ExpectExtends<IUserStudent, IFullUser>> // Confere se IFullUser possui campos do Student
]

export default IFullUser
