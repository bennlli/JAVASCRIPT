let hsm;
let hst;
hsm = prompt('Horas de estudio por la mañana:','');
hst = prompt('Horas de estudio por la tarde:','');

//Sumamos la variables pedidas por el 'prompt'
let hsd=parseInt(hsm)+parseInt(hst);

//Otra forma de hacer una concatenacion, estilo al 'to String'
texto = (`Ha estudiado ${hsd} horas a lo largo del día.`);
document.getElementById("texto").innerHTML = texto;