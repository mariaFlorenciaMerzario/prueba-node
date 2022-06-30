
const verificarNumeros = require('./verificarNumeros')

const sumar = (n1,n2) =>{
    if(!verificarNumeros(n1,n2)){
        console.log('debe ingresar numeros')
    }
    return n1 + n2
};

module.exports = sumar;
