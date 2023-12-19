// Desafio de Hérois.

console.log("Escolha seu heroi e seu xp de poder!");

let nomeHero = prompt("Digite seu héroi:");
let nivelXp = prompt("Digite a quantidade do XP do seu herói entre  1.000 à 10.001:");

if(nivelXp > 900 & nivelXp <= 1000) {
    console.log("O Herói de nome " + nomeHero + " está no nivel " + nivelXp + " de Ferro");
} else 
    if(nivelXp > 1001 & nivelXp <= 2000)  {
    console.log("O Herói de nome " + nomeHero + " está no nivel" + nivelXp + " de Bronze");
}else 
    if(nivelXp > 2001 & nivelXp <= 5000) {
    console.log("O Herói de nome " + nomeHero + " está no nivel" + nivelXp + " de Prata");
}else 
    if(nivelXp > 6001 & nivelXp <= 7000) {
    console.log("O Herói de nome " + nomeHero + " está no nivel " + nivelXp + " de Ouro");
}else 
    if(nivelXp > 7001 & nivelXp <= 8000) {
    console.log("O Herói de nome " + nomeHero + " está no nivel " + nivelXp + " de Platina");
}else 
    if(nivelXp > 8001 & nivelXp <= 9000) {
    console.log("O Herói de nome " + nomeHero + " está no nivel " + nivelXp + " de Ascendente");
}else 
    if(nivelXp > 9001 & nivelXp <= 10000) {
    console.log("O Herói de nome " + nomeHero + " está no nivel " + nivelXp + " de Imortal");
}else 
    if(nivelXp > 10001) {
    console.log("O Herói de nome " + nomeHero + " está no nivel " + nivelXp + " de Radiante");
}else{
    console.log("Digite um herói com XP válido");
}

//Gostaria de sugestões para minimizar esse código.





