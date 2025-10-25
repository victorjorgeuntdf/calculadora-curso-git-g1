class Calculadora {
  constructor() {
    // Guarda el último resultado numérico calculado
    this.memoria = null;
  }

  _guardarEnMemoria(valor) {
    this.memoria = valor;
    return valor;
  }

  getMemoria() {
    return this.memoria;
  }

  sumar(a, b) {
    return this._guardarEnMemoria(a + b);
  }

  restar(a, b) {
    return this._guardarEnMemoria(a - b);
  }

  multiplicar(a, b) {
     return this._guardarEnMemoria(a * b);
    // TODO: Implementar multiplicación
  }

  dividir(a, b) {
    if( b == 0)
    {
      return this._guardarEnMemoria(Infinity);
    }
    this._guardarEnMemoria(a / b);
  }

  potencia(base, exponente) {
    return this._guardarEnMemoria(base ** exponente);
  }

  raizCuadrada(numero) {
    //Devolver NaN si el numero es negativo
    if(numero < 0)
    {
      return this._guardarEnMemoria(NaN);
    }
    return this._guardarEnMemoria(Math.sqrt(numero))
  }

  promedioArreglo(arr) {
    if  (arr.length === 0) {
      return this._guardarEnMemoria(0);
    }
    const suma = arr.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
    return this._guardarEnMemoria(suma / arr.length);
  }

  numeroMaximoArreglo(arr) {
    if (arr.length === 0) {
      return this._guardarEnMemoria(undefined);
    }
    return this._guardarEnMemoria(Math.max(...arr));
  }

  factorial(numero) {
  if (numero < 0) {
    return this._guardarEnMemoria(NaN);
  }

  let resultado = 1;
  for (let i = 1; i <= numero; i++) {
    resultado *= i;
  }
  return this._guardarEnMemoria(resultado);
  }

  //TP2-Ej1 b) Añadir la función de porcentaje de a sobre b.
  porcentaje(a, b) {
    const resultado = (a / 100) * b;
    return this._guardarEnMemoria(resultado);
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
console.log('calc.porcentaje(30, 60):', calc.porcentaje(30, 60));
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
console.log('- calc.porcentaje(a, b)');