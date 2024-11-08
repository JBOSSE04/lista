window.onload = function () {
    let nombre = document.getElementById("firstName");
    let apellido = document.getElementById("lastName");
    let email = document.getElementById("email");
    let telefono = document.getElementById("phone");
    let contraseña = document.getElementById("password");
    let confirmar = document.getElementById("confirmPassword");



    function correos (string){
        if(string.match(/^[a-z0-9.]+@[a-z0-9-]+\.[a-z0-9-.]+$/)){
            return true;
        }
        else{
            return false;
        }
    }

    function nombres (string){
        if(string.match(/^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/)){
            return true;
        }
        else{
            return false;
        }
    }

    function apellidos (string){
        if(string.match(/^[A-Za-zÁÉÍÓÚáéíóúÑñ]+(\s[A-Za-zÁÉÍÓÚáéíóúÑñ]+)?$/)){
            return true;
        }
        else{
            return false;
        }
    }

    function telefonos (string){
        if(string.match(/^\d{9}$/)){
            return true;
        }
        else{
            return false;
        }
    }

    function contraseñas (string){
        if(string.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)){
            return true;
        }
        else{
            return false;
        }
    }

    nombre.addEventListener("blur" , () =>{
        if(nombres(nombre.value) !== true){
            nombre.value = "";
            nombre.placeholder = "The first name is invalid";
            nombre.style.backgroundColor = "lightcoral";
        }
        else {
            nombre.style.backgroundColor = "";
        }
    })

    apellido.addEventListener("blur" , () =>{
        if(apellidos(apellido.value) !== true){
            apellido.value = "";
            apellido.placeholder = "The last name are invalid";
            apellido.style.backgroundColor = "lightcoral";
        }
        else {
            apellido.style.backgroundColor = "";
        }
    })

    email.addEventListener("blur" , () =>{
        if(correos(email.value) !== true){
            email.value = "";
            email.placeholder = "The email is invalid";
            email.style.backgroundColor = "lightcoral";
        }
        else {
            email.style.backgroundColor = ""; 
        }
    })

    telefono.addEventListener("blur" , () =>{
        if(telefonos(telefono.value) !== true){
            telefono.value = "";
            telefono.placeholder = "The phone is invalid";
            telefono.style.backgroundColor = "lightcoral";
        }
        else {
            telefono.style.backgroundColor = "";
        }
    })

    contraseña.addEventListener("blur" , () =>{
        if(contraseñas(contraseña.value) !== true){
            contraseña.value = "";
            contraseña.placeholder = "The password is invalid";
            contraseña.style.backgroundColor = "lightcoral";
        }
        else {
            contraseña.style.backgroundColor = "";
        }
    })

    confirmar.addEventListener("blur" , () =>{
        if(confirmar.value != contraseña.value){
            confirmar.value = "";
            confirmar.placeholder = "The passwords are diferent";
            confirmar.style.backgroundColor = "lightcoral";
        }
        else {
            confirmar.style.backgroundColor = "";
        }
    })
}