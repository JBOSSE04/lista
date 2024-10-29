// const btn = document.getElementsByTagName("button");
// function saltaalert(){
//  console.log(e);
//  alert("has CLICKADO")
// }
// btn[0].addEventListener("mouseout",()=>  document.body.style.backgroundColor = "red");

// btn[0].addEventListener("mouseover",()=>  document.body.style.backgroundColor = "white");

// btn[0].addEventListener("click",()=> saltaalert());
// btn[1].addEventListener("click",()=> btn[0].removeEventListener("click",saltaalert));


// const textBox = document.querySelector("#textBox");
// const output = document.querySelector("#output");
// textBox.addEventListener("keydown", (event) =>{output.textContent = `"${event.key}".`});

    
//29/10/2024

// const btn = document.querySelector("#btn");

window.onload = ()=>
{
    //MAIN
    let btn = document.getElementById("btnCambiar");
    let btnDeOtroModo = document.getElementsByTagName("button")[0]
    btn.addEventListener("click", cambiarH1);
}


function cambiarH1(e)
{
    let cajaTexto = document.getElementById("text");
    let tituloh1 = document.getElementById("titH1"); 
    if(cajaTexto.value !=""){
    tituloh1.innerText = cajaTexto.value;

    }
}