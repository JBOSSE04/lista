window.onload = function () {
    let numeroTarjeta = document.getElementById("card-number");
    let propietario = document.getElementById("card-holder");
    let cvv = document.getElementById("cvv");


    function numeros (string){
        if(string.match(/^[0-9]{16}$/)){
            return true;
        }
        else{
            return false;
        }
    }

    function titulares (string){
        if(string.match(/^[a-zA-Z]+\s+[a-zA-Z]+/)){
            return true;
        }
        else{
            return false;
        }
    }

    function codigos (string){
        if(string.match(/^[0-9]{3}$/)){
            return true;
        }
        else{
            return false;
        }
    }

    numeroTarjeta.addEventListener("blur" , () =>{
        if(numeros(numeroTarjeta.value) !== true){
            numeroTarjeta.value = "";
            numeroTarjeta.placeholder = "El numero de tarjeta es invalido";
        }
    })

    propietario.addEventListener("blur" , () =>{
        if(titulares(propietario.value) !== true){
            propietario.value = "";
            propietario.placeholder = "El nombre de propietario es invalido";
        }
    })

    cvv.addEventListener("blur" , () =>{
        if(codigos(cvv.value) !== true){
            cvv.value = "";
            cvv.placeholder = "CVV invalido";
        }
    })
}