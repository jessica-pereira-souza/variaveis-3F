const prompt = require('prompt-sync');
const entrada = prompt();

let idade= 19;
const anoNascimento= 2005;
let anoAtual= 2024;
const nomeCompleto= "Jéssica Pereira de Souza";

anoAtual = 2024 + 1;
console.log(anoAtual);

idade = 19 + 1;
console.log(idade);

console.log("Meu nome é "  + nomeCompleto + " nascida no ano de " + anoNascimento + " e no ano atual " + anoAtual + " completo " + idade + " anos ");


//Agência de viagens Bonito, Foz do Iguaçu, Tiradentes, Urubici, Cambará do Sul
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
ListaDeDestinos.push("Madrid");
ListaDeDestinos.push("Berlin");
console.log(ListaDeDestinos);

const loginCerto = "jessica";
const senhaCerta = 123;

var login = entrada ("Qual é o seu login? ");
var senha = entrada ("Insira a sua senha. ");

while(login != loginCerto || senha != senhaCerta){
  console.log ("Login ou senha incorretos. ");
  login = entrada ("Qual é o seu login? ");
  senha = entrada ("Insira a sua senha. ");
}

var nomeComprador = entrada("Digite o seu nome: ")
var idadeComprador = entrada("Qual a sua idade? ");

if (idadeComprador >= 18) {
  console.log("Olá senhor(a) " + nomeComprador);
  console.log("Comprador maior de idade");
  console.log("Escolha seu destino");
  
  var contador = 1;

  while(contador < 9) {
    console.log(ListaDeDestinos[contador]);
    contador++;
  }
  
  var destino = entrada("Digite o número que corresponde ao destino selecionado (0-8)");
  console.log(`Destino selecionado foi:
               ${(ListaDeDestinos[destino])}`);
  
} else {
  console.log("Olá senhor(a) " + nomeComprador);
  console.log("Comprador menor de idade");
  console.log("Sentimos muito, a compra não pôde ser finalizada pois você não é maior de idade.");
} 

