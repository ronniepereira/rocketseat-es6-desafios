//Exercicio 5.1
//Parte 1
const arr = [1, 2, 3, 4, 5, 6]
const [
    x,
    ...y
] = arr
console.log(x)
console.log(y)

//Parte 2
function soma(...numeros) {
    return numeros.reduce((total, element) => total + element)
};
console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3