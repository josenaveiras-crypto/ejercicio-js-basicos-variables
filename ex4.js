/**
 * ¡LA ADIVINADORA!
 * 
 * Crea 4 variables para almacenar los siguientes valores:
 * 
 * 1. Número de gatos (ya está creada e inicializada)
 * 2. Tu pareja o próxima pareja
 * 3. Un país donde te gustaría vivir
 * 4. Un trabajo de ensueño
 * 
 * A cada variable, asígnale un valor adecuado (piensa si tiene que ser un número o u
 * na cadena de texto)
 * 
 * Finalmente, por pantalla, la Adivinadora debe pronosticar tu fut
 * uro deseado de esta manera
 * 
 * "Tú estarás en {pais} trabajando de {trabajo} y tu pareja será {pareja} y tendréis {numeroGatos} gatos" 
 * 
 */

let numeroGatos = 10;
let tuPareja = "Cruz";
let paisVivir = "Dinamarca";
let trabajoDeseado = "Multimillonario"

let futuro = "tendréis " + numeroGatos + " gatos"; // <-- Vas a tener que modificar esta línea
console.log(futuro);

futuro = "Tú estarás en " + paisVivir + " trabajando de " + trabajoDeseado + " y tu pareja será " + tuPareja + " y tendréis " + numeroGatos + " gatos.";
console.log(futuro);