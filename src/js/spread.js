let persona = {
    nombre: 'Luis',
    apellido: 'Rodriguez'
}
let nombres = ["Hugo", "Paco", "Luis", "Jose", "Ramon", "Juan"];
let datos = [{ label: 'Serpiente' }, { label: 'Elefante' }, { label: 'Orca' }];

//let nombres2 = nombres; // referencia a nombres
//let nombres2 = nombres.slice(3, 5);
let nombres2 = [...nombres];
console.log("Creando nombres2: ", nombres2);

nombres2.push('Elsa');

console.log("contenido original de nombres: ", nombres);
console.log("nombres2 despues del push: ", nombres2);

let [a, b, c, ...rest] = nombres;
console.log(rest);
console.log(`${a} ${b} ${c} ${rest}`);



nombreCompleto(persona);

nombreCompleto({ nombre: 'Luis', apellido: 'Rodriguez' })

function nombreCompleto({ nombre, apellido }) {
    return `${nombre} ${apellido}`
}

function imprimirAnimales({ label }) {
    console.log(label);
}

datos.forEach((animal) => {
    imprimirAnimales(animal);
})


/* const App = ({ nombre: name = 'John', apellido: lastname = 'Doe', ...props }) => {
    return (
        <h1>{name} {lastname} edad: {props.edad}</h1>
    )
}


<App nombre={"Luis"} apellido={"Rodriguez"} edad={40} direccion="" /> */


function sumar(...rest) {
    console.time();
    let total = 0;
    for (let valor of rest) {
        total += valor;
    }
    console.log(total);
    console.timeEnd();
    console.time();
    console.log(rest.reduce((total, valor) => total + valor, 0));
    console.timeEnd();
}

sumar(1); // 1
sumar(1, 2); // 3
sumar(34, 54, 12, 76, 1, 34, 0, 90, 100);