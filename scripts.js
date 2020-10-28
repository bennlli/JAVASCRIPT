/* VARIABLES */
let numero = -5;
let palabras = "Hola mundo";
let respuesta = true;
const PI = 3.14;

numero = 54;
/* VER EN CONSOLA */
console.log(PI);
console.log(numero);
console.log(palabras);
console.log(respuesta);

/* OPERADORES*/
let a = 5;
let b = 6;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a%b);
console.log(a/b);

let c = 7;
console.log(c);
console.log(c++);
console.log(c);


/* MÉTODOS Y STRINGS */
let cadenaLongitud = 'prueba de longitud';
console.log(cadenaLongitud.length);

let cadenaM = 'cadena mayusculas';
console.log(cadenaM.toUpperCase());

let cadenaPrueba = 'prueba';
/*almacena la variable 'cadenaPrueba' en la variable 'cadenaMayus*/
let cadenaMayus = cadenaPrueba.toUpperCase(); 
console.log(cadenaMayus);

let cadenaMin = 'CALLENSE';
console.log(cadenaMin.toLowerCase());

/*Localizar posicion*/
console.log(cadenaLongitud.indexOf('de'));
/*Reemplaza un valor por otro*/
console.log(palabras.replace('mundo','youtube'));
/*Da los caracateres pedidos*/
console.log(palabras.substring(3,7));

/*Para eliminar los espacios de una cadena de texto*/
let linea = "           Hola chavales, estamos probando la castaña esta de JS";
console.log(linea);
console.log(linea.trim());

/*bucle de repeticion*/
let palabra = '8';
let palabra2 = '=';
let palabra3 = 'D';
console.log(palabra+palabra2.repeat(15)+palabra3);

/*Template Strings, para unir varias cadenas y sea mas facil e intuitivo*/
let nombre = 'benlli';
let apellido = 'mas';
let edad = 29;

console.log(`Hola ${nombre} ${apellido}. Tengo ${edad} años.`);