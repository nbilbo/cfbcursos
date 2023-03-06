// importando variavel default de outro modulo (percebam a auxencia das chaves).
import Usuario from "./modelos.js";

// importando uma variavel nao default de outro modulo (percebam a utilização das chaves).
import { Publicacao } from "./modelos.js";
import { somar, subtrair, multiplicar, dividir } from "./calculos.js";

// importando todas as variaveis do modulo.
import * as alertas from "./alertas.js"


console.log(Usuario)
console.log(Publicacao)
console.log(somar)
console.log(subtrair)
console.log(multiplicar)
console.log(dividir)
console.log(alertas.alerta_sucesso)
console.log(alertas.alerta_perigo)