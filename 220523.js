// PRIMER NIVEL

//1. Declare una variable llamada desafío y asígnele un valor inicial '30 días de JavaScript'.

let desafio = "30 dias de JavaScript";

// 2.Imprima la cadena en la consola del navegador usando console.log()

console.log(desafio);

// 3.Imprima la longitud de la cadena en la consola del navegador usando console.log()

console.log(desafio.length);

// 4.Cambie todos los caracteres de cadena a letras mayúsculas usando el método toUpperCase()

console.log(desafio.toUpperCase(desafio));

// 5.Cambie todos los caracteres de la cadena a letras minúsculas usando el método toLowerCase()

console.log(desafio.toLowerCase(desafio));

// 6.Corta (segmenta) la primera palabra de la cadena usando el método substr() o substring()

console.log(desafio.substring(0,2));

// 7. Corta la frase Days Of JavaScript de 30 Days Of JavaScript.

console.log(desafio.substring(2,21));

// 8.Verifique si la cadena contiene una palabra Script usando el método includes()

console.log(desafio.includes("Script"));

// 9.Divide la cadena en un array usando el método split()

console.log(desafio.split(" "));

// 10.Divida la cadena 30 días de JavaScript en el espacio usando el método split()

console.log(desafio.split(" "));

// 11.'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' divide la cadena en la coma y cámbiala a una matriz.

let string = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
let matriz = /Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon/gi;

console.log(string.match(matriz));

// 12.Cambie 30 días de JavaScript a 30 días de Python usando el método replace().

console.log(desafio.replace("JavaScript", "Python"));

// 13.¿Qué es el carácter en el índice 15 en la cadena '30 días de JavaScript'? Utilice el método charAt().

console.log(desafio.charAt(15));   

// 14.¿Cuál es el código de carácter de J en la cadena '30 días de JavaScript' usando charCodeAt()

console.log(desafio.charCodeAt(11));

// 15.Use indexOf para determinar la posición de la primera aparición de a en 30 días de JavaScript

console.log(desafio.indexOf("a")); 

// 16.Utilice lastIndexOf para determinar la posición de la última aparición de a en 30 días de JavaScript.

console.log(desafio.lastIndexOf("a"));

//17.Usa indexOf para encontrar la posición de la primera aparición de la palabra porque en la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'

let oracion = "No puedes terminar una oración con porque porque porque es una conjunción"
console.log(oracion.indexOf("porque"));

// 18. Usa lastIndexOf para encontrar la posición de la última aparición de la palabra porque en la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'

console.log(oracion.lastIndexOf("porque"));

// 19. Usa buscar para encontrar la posición de la primera aparición de la palabra porque en la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'

console.log(oracion.search("porque"));

// 20.Use trim() para eliminar cualquier espacio en blanco final al principio y al final de una cadena. Por ejemplo, '30 días de JavaScript'.

console.log(desafio.trim(" "));

// 21. Use el método startsWith() con la cadena 30 días de JavaScript y haga que el resultado sea verdadero

console.log(desafio.startsWith("3"));

//22.Use el método endsWith() con la cadena 30 días de JavaScript y haga que el resultado sea verdadero

console.log(desafio.endsWith("t"));

//23.Usa el método match() para encontrar todos los a en 30 días de JavaScript


let frase = "30 dias de JavaScript";

console.log(frase.match("a"));


let letra = /a/gi;
console.log(frase.match(letra)); 

//24.Use concat() y fusione '30 días de' y 'JavaScript' en una sola cadena, '30 días de JavaScript'

let oracion1 = '30 dias de'
let oracion2 = 'JavaScript'

console.log(oracion1.concat(" ",oracion2));

//25.Use el método repeat() para imprimir 30 días de JavaScript 2 veces

let desafio1 = "30 dias de JavaScript ";

console.log(desafio1.repeat(2));


// SEGUNDO NIVEL

//1. Usando console.log() imprima la siguiente declaración:

let frase1 = "The quote There is no exercise better for the heart than reaching down and lifting people up. by John Holmes teaches us to help one another."

console.log(frase1);

//2.Usando console.log() imprima la siguiente cita de la Madre Teresa:

let frase2 = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same with charity you give love, so don't just give money but reach out your hand instead."

console.log(frase2);

// 3. Compruebe si typeof '10' es exactamente igual a 10. Si no, hágalo exactamente igual.

let A = '10';
let B = 10;

console.log(typeof A);