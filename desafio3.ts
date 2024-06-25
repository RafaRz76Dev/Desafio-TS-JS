import { Equal, Expect } from "./types/validateTypes";

// Modifique a tipagem myFunction para que a função duplicarNumero se encaixe nela.
type myFunction = (arg: number) => number;

// Aqui estão os auxiliares e comparações:
function duplicarNumero(value: number): number {
  return value * 2;
}

// Validações:
type casosDeValidacao = [
  Expect<Equal<typeof duplicarNumero, myFunction>>
];

export { duplicarNumero }; // Exportando a função duplicarNumero
