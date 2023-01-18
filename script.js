let botonEncriptar = document.querySelector(".btn-encriptar");
let botonDesncriptar = document.querySelector(".btn-desencriptar");
let munieco = document.querySelector(".contenedor-munieco");
let mensaje = document.querySelector(".contenedor-mensaje");
let parrafo = document.querySelector(".contenedor-parrafo");
let textoNuevo = document.querySelector(".area-texto-nuevo");
let botonCopiar = document.querySelector(".btn-copiar");

botonEncriptar.onclick = encriptar;
botonDesncriptar.onclick = desencriptar;
botonCopiar.onclick = copiarPortapapeles;

function encriptar(){
    ocultarSeccion();
    recuperarTexto();
    textoNuevo.textContent = encriptarTexto(recuperarTexto());
}

function desencriptar(){
    ocultarSeccion();
    recuperarTexto();
    textoNuevo.textContent = desencriptarTexto(recuperarTexto());
}

function ocultarSeccion(){
    munieco.classList.add("ocultar");
    mensaje.classList.add("ocultar");    
    parrafo.classList.add("ocultar");
}

function recuperarTexto(){
    let area = document.querySelector(".area-texto");
    return area.value
}

function encriptarTexto(frase){
    //se podria usar la función replace pero se utiliza otro metodo
    //para tener una lógica de programación mas pensada
    let textoEncriptado = "";
    for (let i = 0; i < frase.length; i++) {
        switch (frase[i]) {
            case 'a':
                textoEncriptado = textoEncriptado + "ai";
                break;
            case 'e':
                textoEncriptado = textoEncriptado + "enter";
                break;
            case 'i':
                textoEncriptado = textoEncriptado + "imes";
                break;     
            case 'o':
                textoEncriptado = textoEncriptado + "ober";
                break;
            case 'u':
                textoEncriptado = textoEncriptado + "ufat";
                break;
            default:
                textoEncriptado = textoEncriptado + frase[i];
                break;
        }        
    }
    return textoEncriptado;
}

function desencriptarTexto(frase){
    //se podria usar la función replace pero se utiliza otro metodo
    //para tener una lógica de programación mas pensada
    let textoDesencriptado = "";
    for (let i = 0; i < frase.length; i++) {
        switch (frase[i]) {
            case 'a':
                textoDesencriptado = textoDesencriptado + "a";
                i=i+1;
                break;
            case 'e':
                textoDesencriptado = textoDesencriptado + "e";
                i=i+4;
                break;
            case 'i':
                textoDesencriptado = textoDesencriptado + "i";
                i=i+3;
                break;     
            case 'o':
                textoDesencriptado = textoDesencriptado + "o";
                i=i+3;
                break;
            case 'u':
                textoDesencriptado = textoDesencriptado + "u";
                i=i+3;
                break;
            default:
                textoDesencriptado = textoDesencriptado + frase[i];
                break;
        }        
    }
    return textoDesencriptado;
}

function copiarPortapapeles(){
    let contenido = textoNuevo.value
    navigator.clipboard.writeText(contenido);
}