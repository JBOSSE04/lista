window.onload= ()=>{
    document.getElementById("btn").addEventListener("click", ()=>{
        let contenido = document.getElementById("input").value;
        document.getElementById("input").value;
        document.getElementById("titulo").innerHTML = contenido;


        // let nueva = "descarga.jpeg";
        // let nuevaImagen = document.createElement("img");
        // nuevaImagen.src = nueva
        
        // document.body.appendChild(nuevaImagen);
        let nuevaEntradali = document.createElement("li");
        nuevaEntradali.innerHTML = contenido;
        document.getElementById("lista").appendChild(nuevaEntradali);

        



    } );

    document.getElementById("lista").addEventListener("click", (e)=>{
        if(e.target.tagName === "li"){
            e.target.remove();
            }
            });


}