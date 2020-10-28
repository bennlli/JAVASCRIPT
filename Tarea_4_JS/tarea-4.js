/* 
estructuras secuenciales y repetitivas javascript
además del do..while están el while y el for

alumno:
fecha:
*/
  /* Declaracion de variables*/
  var hsm;
  var hst;

  /* Preguntas con prompt*/
  hsm=prompt('Horas de estudio por la mañana:','');
  hst=prompt('Horas de estudio por la tarde:','');

  /* Informacion volcada en la variable 'hsd', en este caso una suma*/
  if(hsm>=0 && hsm<=8 && hst>=0 && hst<=8){
      var hsd=parseInt(hsm)+parseInt(hst);
      /* Mensaje a imprimir con la condicion*/
      var mensaje='Ha estudiado '+hsd+' horas<br>(a lo largo del día)<br>';
      if (hsm>hst)
      {
      var mensaje2='Ha estudiado más por la mañana<br>';
      }
      else
      {
      var mensaje2='Por la tarde estudió al menos tanto como por la mañana <br>';
      }
  }else{
    var mensaje1='Te ha faltado día de estudios <br>';
  }
  
  var valor=1;
  do {
	  valor=prompt('Ingrese el nro. cero para mostrar el resultado:','');
  } while(valor!=0);
  
  document.getElementById("ubicacion1").innerHTML = mensaje+mensaje2+mensaje1;