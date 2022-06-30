const sumar = require('./sumar')
const restar = require('./restar')
const dividir = require('./dividir')
const multiplicar = require('./multiplicar')


let calculadora = (n1,n2,operacion) => {
    console.log(operacion(n1,n2))
}

calculadora(2,'hol',sumar) 
calculadora(1,3,restar)
calculadora(1,5,multiplicar)
calculadora(3,2,dividir)