const comidas = [];
const comida = prompt("🍕Hola! Que comida deseas pedir?🥙");
comidas.push(comida);

while (confirm("Desea pedir otra comida?🛒")){
    const comida = prompt("¿Qué comida desea?");
    comidas.push(comida);
};
 console.log("Usted compró: ");
 for (let comida of comidas) {
    console.log(comida);
 };
