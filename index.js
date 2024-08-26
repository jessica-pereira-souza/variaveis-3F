let idade= 19;
const anoNascimento= 2005;
let anoAtual= 2024;
const nomeCompleto= "Jéssica Pereira de Souza";

anoAtual = 2024 + 1;
console.log(anoAtual);

idade = 19 + 1;
console.log(idade);

console.log("Meu nome é "  + nomeCompleto + " nascida no ano de " + anoNascimento + " e no ano atual " + anoAtual + " completo " + idade + " anos ");


//Agência de viagens Bonito Foz do Iguaçu Tiradentes Urubici Cambará do Sul
const ListaDeDestinos = new Array(
  "Bonito",
  "Foz do Iguaçu",
  "Tiradentes",
  "Urubici",
  "Cambará do Sul"
); 

console.log(ListaDeDestinos);
console.log(ListaDeDestinos[4]);
ListaDeDestinos.push("Coronel Vivida");
ListaDeDestinos.push("Curitiba");
ListaDeDestinos.push("Madrid ");
ListaDeDestinos.push("Berlin");
console.log(ListaDeDestinos);
