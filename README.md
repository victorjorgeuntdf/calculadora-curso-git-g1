# calculadora-curso-git
Una calculadora simple de consola desarrollada en JavaScript con cliente interactivo de uso para los trabajos prácticos del Curso de Git.

## 📋 Características

- ✅ Operaciones matemáticas básicas
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

Ejecuta el cliente interactivo que se encuentra en la carpeta "src" para usar la calculadora:

```bash
node cliente.js
```

Verás un menú como este:

```
=================================
     CALCULADORA INTERACTIVA     
=================================
1. Sumar
2. Restar
3. Multiplicar
4. Dividir
5. Potencia
6. Raíz Cuadrada
10. Factorial
11. Logaritmo Natural
12. Logaritmo Base 10
0. Salir
=================================
```

## 📂 Estructura del Proyecto

```
calculadora-curso-git/
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
| `factorial(num)` | ✅ Implementada | Calcula el factorial |
| `LogaritmoNatural(num)` | ✅ Implementada | Calcula el logaritmo natural |
| `LogaritmoBase10(num)` | ✅ Implementada | Calcula el logaritmo en base 10 |