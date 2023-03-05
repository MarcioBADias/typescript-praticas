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

//Union Types, Alias e Inferfaces 

/* 1 - Crie uma interface Pessoa com as propriedades nome, idade e email. Em seguida, crie uma função que recebe uma pessoa como parâmetro e retorna uma string com a mensagem "Olá, {nome da pessoa}! Você tem {idade} anos e seu e-mail é {email}.".*/

interface Person{
  name: string
  age: number
  email: string
}

const showPerson = (person : Person) => {
  return `Ola ${person.name}! Você tem ${person.age} anos e seu email é ${person.email}.`
}

console.log(showPerson({name:'Marcio', age: 34, email: 'marc.mail.com'}));
  
/* 2 - Crie um alias Valor para o tipo number | string. Em seguida, crie uma função que recebe um valor do tipo Valor e retorna uma string com o valor recebido.*/

type Value = string | number;

const myValue = (value : Value) => typeof value === 'string' ? value : `Insira uma string`;

console.log(myValue('teste'));
console.log(myValue(6));


/* 3 - Crie uma interface Livro com as propriedades titulo, autor e anoPublicacao. Em seguida, crie uma função que recebe um array de livros e retorna uma string com os títulos de todos os livros, separados por vírgula.*/

interface Books {
  title: string;
  author: string;
  pubishAge: number;
}

const booksTitleList = (books: Books[]): string => {
  const title = books.map(book => book.title);
  return title.join(", ");
}

const books: Books[] = [
  { title: "O Senhor dos Anéis", author: "J.R.R. Tolkien", pubishAge: 1954 },
  { title: "Harry Potter e a Pedra Filosofal", author: "J.K. Rowling", pubishAge: 1997 },
  { title: "1984", author: "George Orwell", publishAge: 1949 }
];

const bookTitles = booksTitleList(books);
console.log(bookTitles);


/* 4 - Crie uma interface Animal com as propriedades nome e tipo. Em seguida, crie um alias AnimalOuNull para o tipo Animal | null. Em seguida, crie uma função que recebe um AnimalOuNull e retorna uma string com o nome do animal, se ele existir, ou a mensagem "Nenhum animal foi encontrado.".*/

interface Animal {
  name: string
  type: string 
}

type AnimalOrNull = Animal | null;

const animalName = (animal : AnimalOrNull) : string => animal ? animal.name : "Nenhum animal foi encontrado." 

const cat : Animal = {
  name: 'Catita',
  type: 'cat'
}
  
console.log(animalName(cat));
console.log(animalName(null));

/* 5 - Crie uma interface Carro com as propriedades marca, modelo e ano. Em seguida, crie um alias CarroOuMoto para o tipo Carro | { marca: string, modelo: string, ano: number, cilindradas: number }. Em seguida, crie uma função que recebe um CarroOuMoto e retorna uma string com as informações do veículo.*/

interface Car{
  marca: string
  modelo: number
  age: number
}

type CarroOuMoto = Car | { marca: string, modelo: string, ano: number, cilindradas: number }

const carroOuMotoInfos = (carroOuMoto : CarroOuMoto ) : string => {
  return carroOuMoto;
}

console.log(typeof CarroOuMoto);
  
/* 6 - Crie uma interface Produto com as propriedades nome, preco e quantidade. Em seguida, crie um alias ProdutoComDesconto para o tipo Produto & { desconto: number }. Em seguida, crie uma função que recebe um ProdutoComDesconto e retorna uma string com o nome e o preço do produto com o desconto aplicado.*/

/* 7 - Crie uma interface Endereco com as propriedades rua, numero, complemento, cidade, estado e cep. Em seguida, crie um alias EnderecoCompleto para o tipo Endereco & { pais: string }. Em seguida, crie uma função que recebe um EnderecoCompleto e retorna uma string com o endereço completo, incluindo o país.*/

/* 8 - Crie uma interface Usuario com as propriedades nome, email e senha. Em seguida, crie um alias UsuarioSemSenha para o tipo Omit<Usuario, 'senha'>. Em seguida, crie uma função que recebe um UsuarioSemSenha e retorna uma string com o nome e o e-mail do usuário.*/
