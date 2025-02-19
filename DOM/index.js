const render = document.getElementById('render');
const emojis = ['🤡','🗿','🍌','🥭','🍎','🐨'];
const button = document.getElementById('action');

function crearElemento(){
    let elemento = document.createElement('span')
    elemento.classList.add('carta')
    return elemento
}

function pintarElemento(){
    for(let i = 0; i < emojis.length; i++){
        let elemento = crearElemento();
        elemento.innerHTML = `${emojis[i]}`
        render.appendChild(elemento)
    }
}

button.addEventListener('click', () => {
    pintarElemento();
    render.classList.remove('hide')
    button.classList.add('hide')
    setTimeout(()=>{
        button.classList.add('hide')
        render.classList.remove('hide')
        location.reload();
    }, 5000)
})

