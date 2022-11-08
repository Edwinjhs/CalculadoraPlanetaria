var masa_tierra = prompt("¿Cual es tu peso? "); 
masa_tierra = parseFloat(masa_tierra);
var planeta = (prompt("Escoge en que planeta quieres saber cuanto pesas \n1- Marte 🌒\n2- Neptuno 🌌"));
planeta = parseInt(planeta);
var grav_marte = 3.721;
var grav_nept = 11.15;
var grav_tierra = 9.807;
var nombre_planeta;
var resultado_peso_marte = (masa_tierra / grav_tierra) * grav_marte;
var resultado_peso_nept = (masa_tierra / grav_tierra) * grav_nept;
resultado_peso_marte = parseInt(resultado_peso_marte);
resultado_peso_nept = parseInt(resultado_peso_nept);
if (planeta == 1){
    nombre_planeta = "Marte"; 
    document.getElementById("resp").innerHTML= "Mi peso en  <strong>"+ nombre_planeta+" 🌒es de "+ resultado_peso_marte+ " kilogramos</strong>";
    //document.write("Mi peso en  <strong>", nombre_planeta," 🌒es de ", resultado_peso_marte, " kilogramos</strong>"); -->
    }
else if (planeta == 2){ 
    nombre_planeta = "Neptuno";
    document.getElementById("resp").innerHTML= "Mi peso en  <strong>"+ nombre_planeta+" 🌌es de "+ resultado_peso_nept+ " kilogramos</strong>";
    //document.write("Mi peso en  <strong>", nombre_planeta," 🌌es de ", resultado_peso_nept, " kilogramos </strong");
    }
else{
    document.getElementById('resp').innerHTML= "<strong> Debes seleccionar entre el planeta 1🌌 o 2🌒</strong>";
    }

    
    //muestra un error 
    //console.error ("esto es un error"); 