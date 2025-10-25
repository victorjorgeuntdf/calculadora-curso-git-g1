class Calculadora {
  sumar(a, b) {
    return a + b;
  }

  restar(a, b) {
    return a - b;
  }

  multiplicar(a, b) {
    return a * b;
    // TODO: Implementar multiplicación
  }

  dividir(a, b) {
    if( b == 0)
    {
     return Infinity;
    }
    return a/b;
  }

  potencia(base, exponente) {
    return base ** exponente;
  }

  raizCuadrada(numero) {
    //Devolver NaN si el numero es negativo
    if(numero < 0)
    {
      return NaN;
    }
    return Math.sqrt(numero);
  }

  promedioArreglo(arr) {
    if  (arr.length === 0) {
      return 0;
    }
    const suma = arr.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
    return suma / arr.length;
  }

  numeroMaximoArreglo(arr) {
    if (arr.length === 0) {
      return undefined;
    }
    return Math.max(...arr);
  }

factorial(numero) {
  if (numero < 0) {
    return "Error: no existe factorial de un número negativo";
  }

  let resultado = 1;
  for (let i = 1; i <= numero; i++) {
    resultado *= i;
  }
  return resultado;
}

logNatural(numero) {
  if (numero <= 0) {
    return "Error: logaritmo no definido para valores ≤ 0";
  }
  return Math.log(numero); // Math.log() = log base e
}




}

// Exportar para usar en tests
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Calculadora;
}

// Para usar en consola de Node.js
const calc = new Calculadora();

console.log('=== Calculadora Simple ===');
console.log('Ejemplo de uso:');
console.log('\ncalc.sumar(5, 3):', calc.sumar(5, 3));
console.log('calc.restar(10, 5):', calc.restar(10, 5));
console.log('calc.multiplicar(10, 2):', calc.multiplicar(10, 2));
console.log('calc.potencia(2, 3):', calc.potencia(2, 3));
console.log('calc.promedioArreglo([1, 2, 3, 4, 5]):', calc.promedioArreglo([1,2,3,4,5]));
console.log('calc.numeroMaximoArreglo([1, 9, 3, 5]):', calc.numeroMaximoArreglo([1, 9, 3, 5]));
console.log('calc.factorial(5):', calc.factorial(5));
console.log(' calc.logNatural(100):', calc.logNatural(100));
console.log('\nFunciones disponibles:');
console.log('- calc.sumar(a, b)');
console.log('- calc.restar(a, b)');
console.log('- calc.multiplicar(a, b)');
console.log('- calc.dividir(a, b)');
console.log('- calc.potencia(base, exponente)');
console.log('- calc.raizCuadrada(numero)');
console.log('- calc.promedioArreglo(arreglo)');
console.log('- calc.numeroMaximoArreglo(arreglo)');
console.log('- calc.factorial(numero)');
console.log('- calc.logNatural(numero)');