// ------------------ Dados Iniciais -------------
let questaoAtual = 0
let respostaCorretas = 0

mostrarQuestoes()

// -------------------- Eventos ------------------
//document.querySelector('.scoreArea button').addEventListener('click', resetar)


// ------------------ Funções --------------------
function mostrarQuestoes(){
    if(questions[questaoAtual]){ //acessando o arquivo questions.js para varrer o array e retornar as questoes
        let q = questions[questaoAtual]

        //porcentagem das questões
        let porcentagem = Math.floor((questaoAtual / questions.length) * 100)
        document.querySelector('.progress--bar').style.width = `${porcentagem}%`       
        
        //Quem irá aparecer
        document.querySelector('.scoreArea').style.display = 'none'
        document.querySelector('.questionArea').style.display = 'block'

        //Exibe a pergunta
        document.querySelector('.question').innerHTML = q.question
        //Monta as questoes e exibe as alternativas na tela:
        let opcaoHtml = ''
        for( let i in q.options){
            opcaoHtml += `<div data-op="${i}" class="option"><span>${parseInt(i)+1}</span> ${q.options[i]}</div>`
        }
        document.querySelector('.options').innerHTML = opcaoHtml //inserindo na tela

        /* Selecionando uma das questões com um evento de click na tela;
        Ouvindo pelo addEventListener;               
        */
       document.querySelectorAll('.options .option').forEach(item => {
            item.addEventListener('click', opcaoClickEvento)
       })
    } else {
        finalQuiz()
    }
}

//Pegando elemento especifico com o target
function opcaoClickEvento(e){
    let opcaoClick = parseInt(e.target.getAttribute('data-op')) //de string para inteiro
    if(questions[questaoAtual].answer === opcaoClick){
            respostaCorretas++
    }

    questaoAtual++
    mostrarQuestoes()

}

//Irá executar o oposto da função anterior. 
function finalQuiz(){
    let pontos = Math.floor((respostaCorretas / questions.length) * 100)

    //verificação da pontuação
    if(pontos < 30){
        document.querySelector('.scoreText1').innerHTML = 'Estude nas madrugadas!'
        document.querySelector('.scorePct').style.color = '#FF0000'
    } else if(pontos >=30 && pontos < 70){
        document.querySelector('.scoreText1').innerHTML = 'Muito Bom!!'
        document.querySelector('.scorePct').style.color = '#FFFF00'
    } else if (pontos >= 70) {
        document.querySelector('.scoreText1').innerHTML = 'Parabens pelos estudos!!'
        document.querySelector('.scorePct').style.color = '#0D630D'    
    }

    document.querySelector('.scorePct').innerHTML = `Acertou ${pontos}%`
    document.querySelector('.scoreText2').innerHTML = `Você respondeu ${questions.length} questões e acertou ${respostaCorretas}.`

    document.querySelector('.scoreArea').style.display = 'block'
    document.querySelector('.questionArea').style.display = 'none'
    document.querySelector('.progress--bar').style.width = '100%'
}

// function resetar(){
//     let questaoAtual = 0
//     let respostaCorretas = 0
//     mostrarQuestoes()

// }