import { Equal, Expect } from "./types/validateTypes";

// Use a função Omit para criar IExtendedWithoutFields
interface IExtendedUser {
  siblings: number;
  rating: number;
  applications: string[];
}

interface ISiblingsUser {
  siblings: number;
}

// Criando IExtendedWithoutFields usando Omit
type IExtendedWithoutFields = Omit<IExtendedUser, 'rating' | 'applications'>;

// Validações
type casosDeValidacao = [
  Expect<Equal<ISiblingsUser, IExtendedWithoutFields>>,
];

export default casosDeValidacao
