function CrearCookie(identificador, valor, fechaExpiracion) {
    if (fechaExpiracion) {
        const d = new Date(fechaExpiracion)
        document.cookie = `${identificador}=${encodeURIComponent(valor)};expires=${d.toUTCString()};path=/`
    } else {
        document.cookie = `${identificador}=${encodeURIComponent(valor)};path=/`
    }
}

function LeerCookie(identificador) {
    const nombreEQ = identificador + "="
    const cookies = document.cookie.split(';')
    for (let i = 0; i < cookies.length; i++) {
        let c = cookies[i].trim()
        if (c.indexOf(nombreEQ) === 0) {
            return decodeURIComponent(c.substring(nombreEQ.length, c.length))
        }
    }
    return null
}

function BorrarCookie(identificador) {
    document.cookie = `${identificador}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`
}

function verificarUsuario() {
    const nombre = LeerCookie("nombreUsuario")
    if (nombre) {
        document.getElementById("mensaje").textContent = `Bienvenido, ${nombre}!`
        mostrarConfiguracion()
        aplicarEstilo()
    } else {
        const nombreUsuario = prompt("Introduce tu nombre:")
        if (nombreUsuario) {
            CrearCookie("nombreUsuario", nombreUsuario, new Date(Date.now() + 5 * 60 * 1000))
            document.getElementById("mensaje").textContent = `Bienvenido, ${nombreUsuario}!`
            mostrarConfiguracion()
        }
    }
}

function mostrarConfiguracion() {
    document.getElementById("configuracion").style.display = "block"
}

function cerrarSesion() {
    BorrarCookie("nombreUsuario")
    BorrarCookie("colorFondo")
    BorrarCookie("colorTexto")
    BorrarCookie("tamanoLetra")
    location.reload()
}

function actualizarEstilo() {
    const colorFondo = document.getElementById("colorFondo").value
    const colorTexto = document.getElementById("colorTexto").value
    const tamanoLetra = document.getElementById("tamanoLetra").value + "px"
    
    document.body.style.backgroundColor = colorFondo
    document.body.style.color = colorTexto
    document.body.style.fontSize = tamanoLetra

    CrearCookie("colorFondo", colorFondo, new Date(Date.now() + 5 * 60 * 1000))
    CrearCookie("colorTexto", colorTexto, new Date(Date.now() + 5 * 60 * 1000))
    CrearCookie("tamanoLetra", tamanoLetra, new Date(Date.now() + 5 * 60 * 1000))
}

function aplicarEstilo() {
    const colorFondo = LeerCookie("colorFondo") || "#ffffff"
    const colorTexto = LeerCookie("colorTexto") || "#000000"
    const tamanoLetra = LeerCookie("tamanoLetra") || "16px"
    
    document.body.style.backgroundColor = colorFondo
    document.body.style.color = colorTexto
    document.body.style.fontSize = tamanoLetra

    document.getElementById("colorFondo").value = colorFondo
    document.getElementById("colorTexto").value = colorTexto
    document.getElementById("tamanoLetra").value = parseInt(tamanoLetra)
}

document.addEventListener("DOMContentLoaded", verificarUsuario)
