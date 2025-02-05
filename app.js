// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigoElegido = [];
console.log(amigoElegido);
amigoElegido.length;

function agregarAmigo() {
    let amigoEscrito = document.getElementById('amigo').value;

    if (amigoEscrito === '') {
        alert('Por favor, inserte un nombre');
    }
    else {
        amigoElegido.push(amigoEscrito);
        document.getElementById('listaAmigos').innerHTML = amigoElegido.join('<br>');
        limpiarCampo();
    }
    return;
};

function limpiarCampo() {
    document.getElementById('amigo').value = '';
    return;
};

function sortearAmigo() {
    let amigoSecreto = Math.floor(Math.random() * amigoElegido.length);
    document.getElementById('resultado').innerHTML = `El amigo secreto sorteado es: ${amigoElegido[amigoSecreto]}`;
    document.getElementById('listaAmigos').innerHTML = '';
    return;
};