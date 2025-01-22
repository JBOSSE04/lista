export function Login(){
    var titulo = "flipado";
    var contenido;
    var estaLogueado = false;
    if (estaLogueado){
        contenido =       <h1>Este es un login</h1>
        } else {
            contenido =       <h1>Esto no es un login</h1>
    }
    return(
      <>
      <h1>{titulo}</h1>
      {contenido}
    </> 
    )
    
    }

