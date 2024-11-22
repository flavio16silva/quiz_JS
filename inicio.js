// inicio
let texto = document.querySelector('.texto')
let botao = document.querySelector('.botao')


//função
botao.addEventListener('click', function() {
    let nomeDigitado = texto.value
    console.log(nomeDigitado)

    if(nomeDigitado === ''){
        alert('Digite seu nome por favor!')
        window.location.href = 'inicio.html'
    } else {

        window.location.href = 'index.html'
        localStorage.setItem('nome', nomeDigitado)
    }



    // document.querySelector('.outro_texto').innerHTML = nomeDigitado
})

