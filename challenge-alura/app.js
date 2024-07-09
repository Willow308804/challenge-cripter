function encriptar() {
    const inputText = document.getElementById('ingresarTexto').value;
    let encryptedText = inputText.replace(/e/g, 'enter')
                                 .replace(/i/g, 'imes')
                                 .replace(/a/g, 'ai')
                                 .replace(/o/g, 'ober')
                                 .replace(/u/g, 'ufat');
    document.getElementById('mostrarTexto').value = encryptedText;
    document.querySelector('.resultado h2').style.display = 'none';
    document.querySelector('.boton3').style.visibility = 'visible';
    document.querySelector('.resultado h3').style.visibility = 'visible';
}

function desencriptar() {
    const inputText = document.getElementById('ingresarTexto').value;
    let decryptedText = inputText.replace(/enter/g, 'e')
                                 .replace(/imes/g, 'i')
                                 .replace(/ai/g, 'a')
                                 .replace(/ober/g, 'o')
                                 .replace(/ufat/g, 'u');
    document.getElementById('mostrarTexto').value = decryptedText;
    document.querySelector('.boton3').style.visibility = 'hidden';
}

function copiar() {
    const outputText = document.getElementById('mostrarTexto');
    outputText.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
}

document.getElementById('segundaFuncion').addEventListener('click', function() {
    var imagen = document.getElementById('imgoculta');
    imagen.classList.toggle('oculto');
})


