// ------------------ Dados Iniciais -------------
let questaoAtual = 0


mostrarQuestoes()


// ------------------ Funções --------------------
function mostrarQuestoes(){
    if(questions[questaoAtual]){ //acessando o arquivo questions.js para varrer o array e retornar as questoes
        let q = questions[questaoAtual]
        
        document.querySelector('.scoreArea').style.display = 'none'
        document.querySelector('.questionArea').style.display = 'block'

        document.querySelector('.question').innerHTML = q.question
        //Mostrando as alternativas na tela:
        let opcaoHtml = ''
        for( let i in q.options){
            opcaoHtml += `<div data-op="${i}" class="option"><span>${parseInt(i)+1}</span> ${q.options[i]}</div>`
        }
        document.querySelector('.options').innerHTML = opcaoHtml


    } else {
        //acaba as questões
    }
}