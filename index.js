import { dados } from "./dados.js";

console.log("\nDados: ")
console.log(dados)

var alunosCC = dados.filter((aluno) => (
    aluno.curso == "Ciência da Computação"
))

console.log("\nAlunos que cursam Ciência da Computação: ")
console.log(alunosCC)

var alunos20 = dados.filter((aluno) => (
    aluno.idade <= 20
))

console.log("\nAlunos que tem 20 anos ou menos: ")
console.log(alunos20)

var alunosNomes = dados.map((aluno) => {
    return aluno.nome
})

console.log("\nNomes dos alunos: ")
console.log(alunosNomes)