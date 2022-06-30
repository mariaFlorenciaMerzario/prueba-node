

const restar = (n1,n2) =>{
    if(isNaN (n1) || isNaN (n2)){
        return 'debe ingresar solo numeros'
    }
    return n1 - n2
};

module.exports = restar;