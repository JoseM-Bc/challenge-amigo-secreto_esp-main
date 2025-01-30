// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let nombreObtenido = document.getElementById('amigo').value;
    console.log(nombreObtenido);  
    if (nombreObtenido !== '') {
        amigos.push(nombreObtenido);
        document.querySelector('#amigo').value = '';  
        agregarNombre();
        console.log(amigos);  
        return nombreObtenido;                  
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

document.getElementById('agregar').onclick = agregarAmigo;
 
