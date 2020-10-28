let nombre=prompt("Ingrese el nombre:","");
let edad=prompt("Ingrese la edad:","");

alert("Procesando informacion ...");
textoExterno="<h2>Los datos han sido recogidos correctamente:</h2> <br> Su nombre es: "+nombre+" y su edad es de "+edad+" años.";
document.getElementById("textoExterno").innerHTML = textoExterno;

//Otra forma de hacer una concatenacion, estilo al 'to String'
textoExterno = (`Hola ${nombre}. Tengo ${edad} años.`);
document.getElementById("textoExterno").innerHTML = textoExterno;

