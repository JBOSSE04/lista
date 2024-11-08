    function validarMayuscula(texto) { return /[A-Z]/.test(texto); }
    
    function validarCaracteresEspeciales(texto) {
         return /[!@#$%^&]/.test(texto); 

    }
    
    function validarCorreo(texto) { 
        return /^[\\w\\.-]+@[a-zA-Z\\d\\.-]+\\.[a-zA-Z]{2,}$/.test(texto); 
    }
    
    function validarTarjetaCredito(texto) { return /^\\d{4} \\d{4} \\d{4} \\d{4}$/.test(texto); }
    
    function validarLongitud(texto) { return texto.length >= 8; }
    
    function validarNumero(texto) { return /\\d/.test(texto); }
    
    function validarNombreUsuario(texto) {
        return /^(?=.\\d)(?=.[!@#$%^&*(),.?":{}|<>])(?=.{8,})/.test(texto);
    }

    document.querySelectorAll('#registrationForm input').forEach(input => {
        input.addEventListener('blur', (event) => {
            const field = event.target;
            let isValid = false;

            switch(field.id) {
                case 'nombre':
                case 'apellidos':
                    isValid = validarMayuscula(field.value);
                    break;
                case 'email':
                    isValid = validarCorreo(field.value);
                    break;
                case 'username':
                    isValid = validarNombreUsuario(field.value);
                    break;
                case 'tarjeta':
                    isValid = validarTarjetaCredito(field.value);
                    break;
                case 'telefono':
                    isValid = validarNumero(field.value) && validarLongitud(field.value);
                    break;
                case 'dni':
                    isValid = validarLongitud(field.value);
                    break;
            }

            field.className = isValid ? 'success' : 'error';
        });
    });
