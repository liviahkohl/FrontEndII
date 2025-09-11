const input = document.querySelector('input')
const p = document.querySelector('p')
const prodAdd = document.querySelector('#prodAdd')
const manga = document.querySelector('#Manga')
const lista = document.querySelectorAll('li')
const lista_esquerda = document.querySelector('#lista_esquerda')


manga.addEventListener('mouseover', () => {
    manga.style.backgroundColor = 'red'
})

manga.addEventListener('mouseout', () => {
    manga.style.backgroundColor = ''
})

input.addEventListener('change', () => {
    console.log(input.value)
    p.textContent = "Sua busca: " + input.value
})

// prodAdd.addEventListener('mousemove', () => {
//     //alert('Mexeu no carrinho')
//     let r = parseInt (Math.random() * 255);
//     let g = parseInt (Math.random() * 255);
//     let b = parseInt (Math.random() * 255);
//     let cor = `rgb(${r}, ${g}, ${b})`
//     console.log(cor);
//     prodAdd.style.backgroundColor = cor;
// });

console.log(lista)

lista.forEach((elemento) => {
    elemento.addEventListener('click', (ev) => {
        const li = ev.target;
        const ul = li.parentElement;

        if (ul === lista_esquerda) {
            prodAdd.appendChild(li);
        } else{
            lista_esquerda.appendChild(li)
        }
    })})