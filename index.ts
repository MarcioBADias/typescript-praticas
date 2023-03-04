//TIPOS PRIMITIVOS

/* 1- Crie uma função que recebe um número e retorna o seu dobro. Certifique-se de especificar o tipo de entrada e saída da função.*/

const double = (value:number) => {
  let result:number = value*2;
  return result;
};

console.log(double(2));

/* 2 - Crie uma função que recebe uma string e retorna a primeira letra em maiúscula. Certifique-se de especificar o tipo de entrada e saída da função.*/

const fistLetterInUpperCase = (value: string) => {
  const result: string = value[0].toUpperCase();
  return result;
};

console.log(fistLetterInUpperCase('teste'));

/* 3 - Crie uma função que recebe um booleano e retorna a negação desse valor. Certifique-se de especificar o tipo de entrada e saída da função.*/

const inverseValue = (value:boolean) => {
  const result:boolean = !value;
  return result;
};

console.log(inverseValue(false));

/* 4 - Crie uma variável do tipo number e outra do tipo string, e faça uma operação de adição entre elas. Verifique o resultado e o tipo da variável resultante.*/

const a : number = 8;
const b : string = 'tipado';
const aB = a + b;

console.log(aB, typeof aB);

/* 5 - Crie um array de números e itere sobre ele, imprimindo cada valor na tela. Certifique-se de especificar o tipo do array e dos elementos.*/

const arrNumber : number[] =[1,2,3];
arrNumber.forEach(i => console.log(i, typeof i));

/* 6 - Crie uma função que recebe duas strings e retorna a concatenação das duas, separadas por um espaço. Certifique-se de especificar o tipo de entrada e saída da função*/

const fullName = (name : string, lastName ?: string) => {
  if (lastName === undefined) {
    const result : string = name!
    return result;
  };
  
  const result : string = `${name} ${lastName}`;
  return result;
};

console.log(fullName('Marcio'));
console.log(fullName('Marcio', 'Breno'))
