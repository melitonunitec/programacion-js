/*Crea un algoritmo que te permita determinar la calificacion en letras 
de un alumno 
si su promedio es 100 a 90=A
                  80 a 89=B
                  70 a 79=C
                  60 a 69=D
                  50 a 59=F  
*/
let nota= 88;
let laLetra='';
if (nota >=90) {
    laLetra = 'A';
} else if (nota >= 80) {
    laLetra = 'B';
} else if (nota >= 70) {
    laLetra = 'C';
} else if (nota >= 60) {
    laLetra = 'D';
} else {
    laLetra = 'F';
}
console.log(nota+'es igual a'+laLetra);
/*
let dia = 5;
 
 
if (dia === 1) {
    console.log ('Es lunes');
} else if 
    (dia === 2) {
    console.log ('Es martes');
} else if  (dia === 3) {
    console.log ('Es miercoles');
} else if 
    (dia === 4) { 
    console.log ('Es jueves');
} else if 
    (dia === 5) { 
    console.log ('Es viernes');
} else if 
    (dia === 6) { 
    console.log ('Es sabado');
} else if 
    (dia === 0) { 
    console.log ('Es domingo');
} else{
 console.log('el dia ingreasdo no esta permitido');
}*/




