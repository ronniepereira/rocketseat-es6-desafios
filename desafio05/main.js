const arr = [1, 2, 3, 4, 5, 6];

const [x, ...y] = arr;

console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]

// function soma...
function soma(...numbers) {
  return numbers.reduce((prev, next) => prev + next, 0);
}
console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3

//Exercicio 5.2

const usuario = {
  nome: "Diego",
  idade: 23,
  endereco: {
    cidade: "Rio do Sul",
    uf: "SC",
    pais: "Brasil"
  }
};

const usuario2 = { ...usuario, nome: "Gabriel" };
const usuario3 = {
  ...usuario,
  endereco: { ...usuario.endereco, cidade: "Lodres" }
};

console.log(usuario);
console.log(usuario2);
console.log(usuario3);
