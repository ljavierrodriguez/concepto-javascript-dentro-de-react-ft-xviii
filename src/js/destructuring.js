let persona = {
    nombre: 'Luis',
    apellido: 'Rodriguez'
}

let nombres = ["Hugo", "Paco", "Luis", "Jose", "Ramon", "Juan"];

console.log('--------- acceso ordinario ----------')
console.log(`${persona.nombre} ${persona.apellido}`)
console.log(`${nombres[0]} ${nombres[1]} ${nombres[2]}`)


let { nombre, apellido } = persona;
let [, , a, b, c] = nombres;

console.log('--------- acceso destructuring ----------')
console.log(`${nombre} ${apellido}`)
console.log(`${a} ${b} ${c}`)

let x = 5;
let y = 6;
[x, y] = [y, x];
console.log(x, y);

[x, y] = [y, x];
console.log(x, y);
//if (x < y) {
/* let aux = x;
x = y;
y = aux; */
//}

// Alias
let datos = [{ label: 'Serpiente' }, { label: 'Elefante' }, { label: 'Orca' }];
let [animal1, animal2, animal3] = datos;
let { label: label1 } = animal1;
let { label: label2 } = animal2;
let { label: label3 } = animal3;

console.log('--------- acceso destructuring usando alias ----------')
console.log(`${label1} ${label2} ${label}`);