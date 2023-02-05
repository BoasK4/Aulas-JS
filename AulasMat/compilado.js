// 1 - let array = [1, 3, 5, 7, 9];

// console.log(array[0]);

// a - let arrayBi = [1, 3, 5, [6, 2, 5], 7, [8], 9];

// console.log(arrayBi[3][0], arrayBi[1]);

// b - let arrayTri = [2, 3, [2, 3, 4, [1]]];

// console.log(arrayTri[2][3][0]);

// c - let mia = {
//   gato: true,
//   especie: "felino",
//   idade: 15,
// };

// console.log(mia.idade);

// 2 -let setup = {
//   cpu: {
//     placaMae: "asrock",
//   },
//   monitor: "noc",
//   mesa: {
//     decoracoes: 10,
//   },
// };

// console.log(setup.cpu.placaMae);

// a - let setup2 = {
//   cpu2: {
//     componentes: ["placa mae", "RAM", "pato", "ventoinha"],
//   },
//   monitor2: {
//     modelo: "noc",
//     caracteristica: {
//       altura: 50,
//       largura: 70,
//       polegadas: 30,
//     },
//   },
// };

// console.log(
//   setup2.cpu2.componentes[1],
//   setup2.monitor2.caracteristica.polegadas
// );

// 3 - let validacao = 10;

// if (validacao === 10) {
//   console.log(validacao + 40);
// } else {
//   console.log("Tente novamente");
// }

// a - let karen = ["Baiana", 22, "mulher"];

// if (karen[0] === "Baiana" && karen[1] === 22 && karen[2] !== "homem") {
//   console.log("São idênticas");
// } else {
//   console.log("Não são idênticas");
// }

// b - let matheus = "humano";

// if (matheus !== "humano" || matheus === "animal" || matheus === "cachorro") {
//   console.log("OK");
// } else {
//   console.log("NOK");
// }

// c - const interruptor = false;

// if (!interruptor) {
//   console.log("TA AQUI");
// }

// ! = "DO CONTRA"

// AULA 17/01/2023 - Looping FOR - Exercícios
 
// Crie um looping FOR, que percorra de 0 á 100 (Looping simples)

// Crie um looping FOR, que percorra o tamanho total do array (array.length) (Looping simples).

// Crie um looping FOR, que percorra o tamanho total do array e identifique todos os valores pares (Looping complexo) (if) (%)

// array[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// RESOLUÇÃO

// for (let i = 0; i <= 100; i++) {
// console.log(i);
// }

// let array = [1, 2, 3, 4, 8, 9, 15, 22, "aaaaa"]
// for (let i = 0; i < array.length; i++) {
// console.log(array[i])
// }

// let arrayTwo = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// for (let i = 0; i < arrayTwo.length; i++) {
//     if (arrayTwo[i] % 2 !== 0) {
//         console.log(arrayTwo[i]);
//     }
// }

// let weatherToday = ""

// if (weatherToday === "chuvoso") {
//     console.log ("Não esqueça o guarda chuva");
// } else if (weatherToday === "ensolarado") {
//     console.log ("Beba bastante água");
// } else if (weatherToday === "") {
//     console.log ("Pesquise a previsão do tempo");
// }

// Aula - 29/01/2023

// let nome = ["K", "A", 0, "E", false];

// for(let i = 0; i < nome.length; i++){
//     if(typeof nome[i] === "string") {
//         console.log(nome[i]);
//     }
// }

// function imc(nome, altura, peso){
//     if(typeof altura === "number" && typeof peso === "number") {
//         let imc = peso / (altura * altura) 
       
//         if (imc < 18.5){
//             console.log(nome + " seu IMC deu " + imc + " = Baixo peso");
//         } else if (imc >= 18.5 && imc < 24.99){
//             console.log(nome + " seu IMC deu " + imc + " = Normal");
//         } else {
//             console.log(nome + " seu IMC é " + imc + " = Está com sobrepeso");
//         }
//     } else {
//         console.log("Tipo de valor é inválido");
//     }
// }

// imc("Karen ", 1.65, 58);

// Aula - 31/01/2023

// function imc(nome, altura, peso) {
//     if (typeof altura !== "number" || typeof peso !== "number")
//       return console.log("Insira um valor válido");
// // quando condição if só tem um argumento, não é necessário abrir chave{}
//     let imc = peso / (altura * altura);
    
//     if (imc <= 18.5){
//         console.log(nome + " seu IMC é " + imc + " = Anormal.")
//     } else if (imc >= 18.6 && imc <= 24.7){
//         console.log(nome + " seu IMC é " + imc + " = Normal.")
//     } else {
//         console.log(nome + " seu IMC é " + imc + " = Sobrepeso.")
//     }
// }


// imc("Karen", 1.74, "d")


// let pessoas = {
//     0: {
//         nome: "Ka",
//         altura: 1.65,
//         peso: 58
//     },
//     1: {
//         nome: "Mat",
//         altura: 1.75,
//         peso: 105
//     }
// }

// function imc(obj){
//     for(const i in obj){
//       if(typeof obj[i].altura !== "number" || typeof obj[i].peso !== "number"){
//         console.log("A pessoa " + obj[i].nome + " está com informações inválidas.");
//         continue;
//       }
//       let imc = obj[i].peso / (obj[i].altura * obj[i].altura)
//         if(imc <= 18.5){
//             console.log(obj[i].nome + " seu IMC é " + imc + " = anormal.");
//         } else if(imc >= 18.6 && imc <= 24.5){
//             console.log(obj[i].nome + " seu IMC é " + imc + " = normal.");
//         } else {
//             console.log(obj[i].nome + " seu IMC é " + imc + " = sobrepeso.");
//         }
    
//     }
// }

// imc(pessoas)


// Aula - 04/02/2023

// let arr = ["Eu", 0, 2, "Karen", true, false, "844542", 4, 4.5, 2];
// let num = 0
// let bool = 0
// let stri = 0

// for(let i = 0; i < arr.length; i++){
//     if(typeof arr[i] === "number"){
//         num += 1
//     } else if(typeof arr[i] === "string"){
//         stri += 1
//     } else {
//         bool +=1
//     }

// }

// console.log(num, bool, stri);


// let arr = [0, 2, "a", 5, 1.1, true, "M", 5, 9, false];

// let result = {
//     num: 0,
//     stri: 0,
//     bool: 0
// }

// for(let i = 0; i < arr.length; i++){
//     if(typeof arr[i] === "number"){
//         result.num ++;
//     } else if(typeof arr[i] === "string"){
//         result.stri ++;
//     } else {
//         result.bool ++;
//     }
// }

// console.log(result);


// let result = {
//     num: 0,
//     stri: 0,
//     bool: 0
// }

// function contador(array){
//     for(let i = 0; i < array.length; i++){
//         if(typeof array[i] === "number"){
//             result.num ++;
//         } else if(typeof array[i] === "string"){
//             result.stri ++;
//         } else {
//             result.bool ++;
//         }
//     } console.log(result);
// }

// contador([0, 2, 3, 5, true, "gos", 4, 8, "toso"])



// Atividades para casa

// 1 - Crie um método que percorra um array de trás para frente utilizando for looping.
// 2 - Crie um array para cada inicial do nome "MATHEUS", e aplique um método que retorne apenas consoantes.
// 3 - Crie uma function que calcule quantas consoantes existem no alfabeto.
