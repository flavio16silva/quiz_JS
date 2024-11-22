// ------------------ Dados Iniciais -------------
let questaoAtual = 0         //variavel que armazena o valor da questao atual
let respostaCorretas = 0     //variavel que armazena as opções corretas




mostrarQuestoes()            //chama a função que mostra as questões

// -------------------- Eventos ------------------
//localiza o botao de reset e adiciona a ele um evento de click atrelado a função reset
document.querySelector('.scoreArea button').addEventListener('click', resetar) 


// ------------------ Funções --------------------
function mostrarQuestoes(){
    if(questions[questaoAtual]){                 //acessando o arquivo questions.js para varrer o array e retorna de acordo com indice
        let q = questions[questaoAtual]          //variavel que armazena a questão atual

        //porcentagem das questões
        let porcentagem = Math.floor((questaoAtual / questions.length) * 100)
        //localiza a barra de progresso e inseri nela a porcentagem em progresso
        document.querySelector('.progress--bar').style.width = `${porcentagem}%`       
        
        //localiza a area que exibe a pontuação e esconde
        document.querySelector('.scoreArea').style.display = 'none'
        //localiza a area que exibe as questões e exibe
        document.querySelector('.questionArea').style.display = 'block'

        //localiza a area das questoes e adiciona a ela as questoes
        document.querySelector('.question').innerHTML = q.question
        //Monta as questoes e exibe as alternativas na tela - armazena o vazio em opções:
        let opcaoHtml = ''
        for( let i in q.options){                //lopp que ler as opções da questao e adiciona na variavel questao
            //adiciona a variavel de opções o texto do html com as informaçoes
            opcaoHtml += `<div data-op="${i}" class="option"><span>${parseInt(i)+1}</span> ${q.options[i]}</div>`
        }
        document.querySelector('.options').innerHTML = opcaoHtml //localiza a area de opções e adiciona a ela todas as opções carregada a variavel

        /* Selecionando uma das questões com um evento de click na tela;
        Ouvindo pelo addEventListener;               
        */
       document.querySelectorAll('.options .option').forEach(item => {
            item.addEventListener('click', opcaoClickEvento)
       })
    } else {
        finalQuiz()                                          //chama a função de finalizar o quiz
    }
}

//Pegando elemento especifico com o target - função que adiciona as funções de click
function opcaoClickEvento(e){
    //variavel que armazena o valor que foi clicado
    let opcaoClick = parseInt(e.target.getAttribute('data-op'))  //de string para inteiro
    if(questions[questaoAtual].answer === opcaoClick){           //verifica se questao clicada é a questão correta
            respostaCorretas++                                   //incrementa a variavel de questões certas 
    }

    questaoAtual++                                               //incrementa mais um na variavel para chamar proxima questão
    mostrarQuestoes()                                            //função que chama que a proxima questão

}

//função responsavel por encerrar  
function finalQuiz(){
    let pontos = Math.floor((respostaCorretas / questions.length) * 100) //variavel que armazena os pontos corretos em porcentagem

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

    document.querySelector('.scorePct').innerHTML = `Acertou ${pontos}%` //localizar a area dos pontos de acertos
     //localiza a area de colocar o texto de quantas questoes acertou de um total de questões
    document.querySelector('.scoreText2').innerHTML = `Você respondeu ${questions.length} questões e acertou ${respostaCorretas}.`

    document.querySelector('.scoreArea').style.display = 'block'        //mostra a area
    document.querySelector('.questionArea').style.display = 'none'      //esconde a area
    document.querySelector('.progress--bar').style.width = '100%'       //localizar a barra de progresso e coloca 100% no seu valor de largura
}

//Função para resetar o quiz, acionada pelo botão
function resetar(){
    respostaCorretas = 0                                              //zerando variavel de respostas corretas
    questaoAtual = 0                                                  //zerando variavel das questões
    mostrarQuestoes()                                                 //chama a função para mostrar as questões  

}


// Pegando nome e passando para outra tela:
let nomeDigitado = localStorage.getItem('nome')
if (nomeDigitado) {
    document.querySelector('.retorno_nome').innerHTML = nomeDigitado
}