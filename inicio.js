// inicio
let texto = document.querySelector('.texto')
let botao = document.querySelector('.botao')


//função
botao.addEventListener('click', function() {
    let nomeDigitado = texto.value
    console.log(nomeDigitado)

    window.location.href = 'index.html'
    localStorage.setItem('nome', nomeDigitado)
    
    // document.querySelector('.outro_texto').innerHTML = nomeDigitado
})

