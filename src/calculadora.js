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
console.log('\nFunciones disponibles:');
console.log('- calc.sumar(a, b)');
console.log('- calc.restar(a, b)');
console.log('- calc.multiplicar(a, b)');
console.log('- calc.dividir(a, b)');
console.log('- calc.potencia(base, exponente)');
console.log('- calc.raizCuadrada(numero)');