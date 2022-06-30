const multriplicar = (n1,n2) =>{
    if(isNaN (n1) || isNaN (n2)){
        return 'debe ingresar solo numeros'
    }
    if((n1 === 0) || (n2 === 0)){
        return 'no se puede multiplicar por 0'
    }
    return n1 * n2
};

module.exports = multriplicar;