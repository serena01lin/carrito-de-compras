let comidas = []
let comida = prompt("🍕Hola! Que comida deseas pedir?🥙");
comidas.push(comida);

while (confirm("Desea pedir otra comida?🛒")){
    prompt("¿Qué comida desea?");
    comidas.push(comida);
}
 console.log("Usted compró: ");
 comidas.forEach(comida => console.log(comida));
