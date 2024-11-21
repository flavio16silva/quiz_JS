// ------------------ Dados Iniciais -------------
let questaoAtual = 0


mostrarQuestoes()


// ------------------ Funções --------------------
function mostrarQuestoes(){
    if(questions[questaoAtual]){ //acessando o arquivo questions.js para varrer o array e retornar as questoes
        let q = questions[questaoAtual]
        console.log(q.question)
    } else {
        //acaba as questões
    }
}