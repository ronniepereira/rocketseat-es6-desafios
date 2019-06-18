const usuarios = [
  { nome: "Diego", idade: 23, empresa: "Rocketseat" },
  { nome: "Gabriel", idade: 15, empresa: "Rocketseat" },
  { nome: "Lucas", idade: 30, empresa: "Facebook" }
];

var idade = usuarios.map(elem => elem.idade);
var empregadoRocket = usuarios.filter(elem => {
  if (elem.empresa === "Rocketseat" && elem.idade >= 18) {
    return elem;
  }
});

var empregadoGoogle = usuarios.find(elem => elem.empresa === "Google");

var multiplicacaoIdade = usuarios
  .map(usuario => ({ ...usuario, idade: usuario.idade * 2 }))
  .filter(usuario => usuario.idade <= 50);

console.log(idade);
console.log(empregadoRocket);
console.log(empregadoGoogle);
console.log(multiplicacaoIdade);
