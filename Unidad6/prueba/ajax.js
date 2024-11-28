window.onload =()=>{
    document.getElementById("btn").addEventListener("click", peticionAJAXmoderna)
    document.getElementById("contador").addEventListener("click", cargarMas)
}
    // setInterval(peticionAJAXmoderna, 5000);
// }
// function peticionAJAX(){
//         var xhttp = new XMLHttpRequest();
//         xhttp.onreadystatechange = function() {
//           if (this.readyState == 4 && this.status == 200) {
//           console.log(this.responseText);
//           respuesta = JSON.parse(this.responseText);
//           document.getElementById("titulo").innerHTML = "HE RECIBIDO "+ respuesta.usuarios.length
//           let lista = document.createElement("li");
            
//           for(usuario of respuesta.usuarios){
//             crearlista();
//           }
//         }
          
//         };
//         xhttp.open("GET", "json.json", true);
//         xhttp.send();
        
// }
// function crearlista(objeto){
//     let lista = document.createElement("li");
//     respuesta.usuarios.forEach(objeto => {
//         lista.innerText = usuario.nombre;
//         document.getElementById("añadir").appendChild(lista);
//     });
// }

function peticionAJAXmoderna(){
    let pelibuscar = document.getElementById("cajatexto").value;
    // let contador = parseInt(document.getElementById("contador").value) + 1;
    // document.getElementById("contador").value = contador;
    // document.getElementById("añadir").innerHTML = "";
    fetch("https://www.omdbapi.com/?i=tt3896198&apikey=35a3c92a&s="+ pelibuscar + "&page=" + contador, {method:"GET"})
    .then((res)=>res.json())
    .then((datosRecibidos)=>{
        document.getElementById("titulo").innerHTML = "HE RECIBIDO "+ datosRecibidos;
        datosRecibidos.Search.forEach(Search=>{
            let lista = document.createElement("li");
            lista.innerText = Search.Title;
            document.getElementById("añadir").appendChild(lista);
            let img = document.createElement("img");
            img.src = Search.Poster;
            document.getElementById("añadir").appendChild(img);

        });
        console.log(datosRecibidos);

    }).catch((err)=>console.error("Error:", err));



}
//Funcion para cargar mas mas resultados
function cargarMas(){
    let contador = parseInt(document.getElementById("contador").value) + 1;
    document.getElementById("contador").value = contador;
    peticionAJAXmoderna();
    }


    

//hacer que cuando clickemos en la foto muestre por consola los detalles del pelicula
// function mostrarDetalles(){
URL = 
