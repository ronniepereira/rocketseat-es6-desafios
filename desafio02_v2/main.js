const usuarios = [{
        nome: 'Diego',
        idade: 23,
        empresa: 'Rocketseat'
    },
    {
        nome: 'Gabriel',
        idade: 15,
        empresa: 'Rocketseat'
    },
    {
        nome: 'Lucas',
        idade: 30,
        empresa: 'Facebook'
    },
];


//Exercicio 2.1
const map = usuarios.map(({
    idade
}) => idade)
console.log(map)

//Exercicio 2.2
const filter = usuarios.filter(({
    empresa,
    idade
}) => empresa === "Rocketseat" && idade >= 18)
console.log(filter)

//Exercicio 2.3
const find = usuarios.find(({
    empresa
}) => empresa === "Google")
console.log(find)

//Exercicio 2.4
const mapFilter = usuarios.map((usuario) => {
    usuario.idade *= 2
    return usuario
}).filter(({
    idade
}) => idade <= 50)
console.log(mapFilter)