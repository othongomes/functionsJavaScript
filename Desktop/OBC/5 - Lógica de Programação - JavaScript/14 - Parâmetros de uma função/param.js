function dobro(x) {
  alert("O dobro de " + x + " é " + x * 2);
}

//dobro(7);
//dobro(2);
//dobro();

function dizerOla(nome = "Mundo") {
  alert("Olá, " + nome + "!");
}

//dizerOla("Othon");
//dizerOla();

function soma(a, b) {
  alert("Resultado da soma é " + (a + b));
}

//soma(2, 3);
//soma(1, 1);

//dica: A ordem dos parâmetros tem que ser a mesma da chamada.

function criarUsuario(nome, email, senha, tipo = "admin") {
  const usuario = {
    nome: nome,
    email: email,
    senha, //se mesmo nome pode abreviar
    tipo,
  };
  console.log(usuario);
}

function novoUsiario(nome, tipo = "admin", email, senha) {
  const usuario = {
    nome: nome,
    email: email,
    senha, //se mesmo nome pode abreviar
    tipo,
  };
  console.log(usuario);
}

criarUsuario("Othon", "othon@email.com", "1234");
//criarUsuario("othon@email.com", "Othon", "1234"); //errado
// A ORDEM IMPORTA
novoUsiario("Othon", "othon@email.com", "1234");

//dica:
function muitosParametros(nome, telefone, end, aniversario, email, senha) {
  //qualquer coisa
}

muitosParametros("nome, telefone, end, aniversario, email, senha");

//podemos diminuir usando objetos:

function objetoComoParametros(usuario) {
  //...
  usuario.nome;
  usuario.email;
}

const dadosDoUsuario = {
  nome: "Othon",
  email: "....",
  end: "...",
  senha: "...",
};

objetoComoParametros(dadosDoUsuario);
