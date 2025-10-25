# calculadora-curso-git
Una calculadora simple de consola desarrollada en JavaScript con cliente interactivo de uso para los trabajos prácticos del Curso de Git.

## 📋 Características

- ✅ Operaciones matemáticas básicas
- 📊 Operaciones con arreglos (promedio, máximo)
- 📈 Cálculo de porcentaje (X% de Y)
- 🧠 Memoria interna: guarda el último resultado y lo podés reutilizar en la próxima operación escribiendo `m`
- 🔄 Cliente interactivo con menú

## 🚀 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/victorjorgeuntdf/calculadora-curso-git-g1.git

# Navegar al directorio
cd calculadora-curso-git

# No requiere instalación de dependencias
# Solo necesitas tener Node.js instalado
```

## Participantes 👨🏻‍💻
Leandro Cardenas, Santiago Pisano, Federico Fuentes, Víctor Quispe

## 📦 Requisitos

- Node.js (versión 12 o superior)

## 💻 Uso

### Cliente Interactivo

Ejecuta el cliente interactivo que se encuentra en la carpeta "src":

```bash
node src/cliente.js

```

Verás un menú como este:

```
=================================
     CALCULADORA INTERACTIVA     
=================================
Memoria (último resultado): <valor>

1. Sumar
2. Restar
3. Multiplicar
4. Dividir
5. Potencia
6. Raíz Cuadrada
7. Promedio de un arreglo
8. Número máximo de un arreglo
9. Porcentaje (a es qué % de b)
10. Factorial
0. Salir
=================================
```

## 📂 Estructura del Proyecto

```
calculadora-curso-git-g1/
├── src/
│   ├── calculadora.js
│   ├── cliente.js
│   └── tests.js
├── README.md
├── CHANGELOG.md
└── .gitignore
```

## 🔧 Funciones Disponibles

| Función | Estado | Descripción |
|---------|--------|-------------|
| `sumar(a, b)` | ✅ Implementada | Suma dos números |
| `restar(a, b)` | ✅ Implementada | Resta dos números |
| `multiplicar(a, b)` | ✅ Implementada | Multiplica dos números |
| `dividir(a, b)` | ✅ Implementada | Divide dos números |
| `potencia(base, exp)` | ✅ Implementada | Eleva un número a una potencia |
| `raizCuadrada(num)` | ✅ Implementada | Calcula la raíz cuadrada |
| `promedioArreglo([n1, n2, ...])` | ✅ Implementada | Devuelve el promedio de todos los valores del arreglo |
| `numeroMaximoArreglo([...])` | ✅ Implementada | Devuelve el valor máximo dentro de un arreglo numérico |
| `porcentaje(a, b)` | ✅ Implementada | Calcula qué porcentaje representa a respecto de b |
| `factorial(num)` | ✅ Implementada | Calcula el factorial |
| `getMemoria()` | ✅ Implementada | Devuelve el último resultado calculado |