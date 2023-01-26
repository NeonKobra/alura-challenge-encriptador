function encrypt() {
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    
    var txtCifrado = texto.replace(/e/igm, "enter");
    var txtCifrado = txtCifrado.replace(/o/igm, "ober");
    var txtCifrado = txtCifrado.replace(/i/igm, "imes");
    var txtCifrado = txtCifrado.replace(/a/igm, "ai");
    var txtCifrado = txtCifrado.replace(/u/igm, "ufat");

    document.getElementById("muneco").style.display = "none";
    document.getElementById("text").style.display = "none";
    document.getElementById("output").innerHTML = txtCifrado;
    document.getElementById("copy").style.display = "show";
    document.getElementById("copy").style.display = "inherit"
}

function desEncrypt() {
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    
    var txtCifrado = texto.replace(/enter/igm, "e");
    var txtCifrado = txtCifrado.replace(/ober/igm, "o");
    var txtCifrado = txtCifrado.replace(/imes/igm, "i");
    var txtCifrado = txtCifrado.replace(/ai/igm, "a");
    var txtCifrado = txtCifrado.replace(/ufat/igm, "u");

    document.getElementById("muneco").style.display = "none";
    document.getElementById("text").style.display = "none";
    document.getElementById("output").innerHTML = txtCifrado;
    document.getElementById("copy").style.display = "show";
    document.getElementById("copy").style.display = "inherit"
}

function copy() {
    let contenido = document.querySelector('#output').innerHTML;
    navigator.clipboard.writeText(contenido)

}

document.getElementById("btn-encriptar").addEventListener("click", encrypt);