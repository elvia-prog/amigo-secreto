let amigos = [];
function agregarAmigo() {
    const input = document.querySelector('#amigo');
    const nombre = input.value.trim();

    if (nombre) {
        amigos.push(nombre);
        actualizarLista();
        input.value = ''; 
    } else {
        alert('Por favor, ingresa un nombre.');
    }
}

function actualizarLista() {
    const listaAmigos = document.querySelector('#listaAmigos');
    listaAmigos.innerHTML = ''; // Limpiar la lista actual

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay amigos para sortear.');
        return;
    }

    const indice = Math.floor(Math.random() * amigos.length);
    const amigoSeleccionado = amigos[indice];
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = `<li>Amigo secreto: ${amigoSeleccionado}</li>`;
}