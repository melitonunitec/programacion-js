/*
    Cree un algoritmo  que permita determinar 
    la calificación en letras de un alumno

    la nota es 100 
    Si la nota es 80
    Si la nota es 59
 */
    function calcularNota(nota){

        let notaLetra = '';
        
        if (nota >= 90) {
            notaLetra = 'A';
        } else if (nota >= 80) {
            notaLetra = 'B';
        } else if (nota >= 70) {
            notaLetra = 'C';
        } else if (nota >= 60) {
            notaLetra = 'D';
        } else {
            notaLetra = 'F';
        }
        console.log(nota +' es igual a '+ notaLetra);
            }
        calcularNota(90);
        calcularNota(80);
        calcularNota(59);



