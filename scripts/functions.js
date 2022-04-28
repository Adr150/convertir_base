function convertir_a_decimal(numero, base){
    numero = numero.split('').reverse().join('');
    console.log(numero);
    var numero_decimal = 0;
    var longitud = numero.length;
    for(var i = 0; i < longitud; i++){

        if(parseInt(numero[i]) >= base){
            alert("La base es incorrecta");
            return false;   
        }

        numero_decimal += parseInt(numero[i]) * Math.pow(base, i);
    }
    return numero_decimal;

}

function convertir_basen(decimal, base){
    var DIGITOS = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
    var numero  = "";
    var resto = 0;

    while(decimal > 0){
        resto = decimal % base;
        numero += DIGITOS[resto];
        decimal = Math.floor(decimal / base);
    }

    return numero.split('').reverse().join('');
}