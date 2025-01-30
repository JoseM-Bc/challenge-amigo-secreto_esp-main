// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let nombreObtenido = document.getElementById('amigo').value;    
    if (nombreObtenido !== '') {
        amigos.push(nombreObtenido);
        document.querySelector('#amigo').value = '';  
        agregarNombre();    
    } else {        
        alert('Por favor, inserte un nombre');      
    }         
    return;        
}

function agregarNombre() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i]; // Asignar el nombre del amigo
        lista.appendChild(li); // Agregar el <li> a la lista                    
    }
    return;
}

function sortearAmigo() {
    if (amigos.length !== 0) {
        let nombreSorteado = Math.floor(Math.random()*amigos.length);
        let resultado = amigos[nombreSorteado];
        let respuesta = document.querySelector('#resultado'); 
        respuesta.innerHTML = resultado;               
    } else {
        alert('Error, aun no has agregado ningun nombre a la lista');        
    }
    return;    
}

document.getElementById('sortear').onclick = sortearAmigo;
document.getElementById('agregar').onclick = agregarAmigo;
 
