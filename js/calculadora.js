var caja = document.getElementById('pantalla'); //La caja sera el valor que se encuentre en pantalla, por el momento un string. Cada una de las funciones se encargan de convertirlo en un valor numerico

//FUNCION PARA INGRESAR VALORES Y SIGNOS
function mostrar(x) { //X es nuestro parametro, que dentro de esta funcion se convierte de string a valor numerico
    caja.value += x; //Se agrega cada valor uno depues del otro en pnatalla
    if(x === 'c'){
        caja.value = '';
    };
}

//FUNCION PARA MOSTRAR EL RESULTADO
function resultado() {
    x = caja.value;
    x = eval(x);
    caja.value = x;
}

//FUNCION PARA ELEVAR AL CUADRADO
function pwr() {
    x = caja.value;
    x = Math.pow(x, 2);
    caja.value = x;
}

//FUNCION PARA BORRAR
function eliminar(){
    x = caja.value;
    caja.value = x.substr(0, x.length - 1);
    if (x === 'undefined'){
        caja.value = '';
    };
}
