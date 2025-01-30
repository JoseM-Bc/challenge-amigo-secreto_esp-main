// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let nombreObtenido = document.getElementById('amigo').value;
    console.log(nombreObtenido);  
    if (nombreObtenido !== '') {
        amigos.push(nombreObtenido);
        document.querySelector('#amigo').value = '';   
        console.log(amigos);  
        return nombreObtenido;                  
    } else {        
        alert('Por favor, inserte un nombre');      
    }         
    return;        
}
document.getElementById('agregar').onclick = agregarAmigo;
