let questions = [
    {
        question: 'Em qual elemento HTML nós colocamos o javascript?',
        options: [
            'tag js',
            'tag script',
            'tag scripting',
            'tag javascript'
        ],
        answer: 1
    },
    {
        question: 'Onde é o local certo de colocar o javascript?',
        options: [
            'Na tag body',
            'Na tag head',
            'Tanto na tag body quanto a head estão corretas'
        ],
        answer: 2
    },
    {
        question: 'Qual a sintaxe correta para adicionar um arquivo javascript externo na tag script?',
        options: [
            'name="xxx.js"',
            'src="xxx.js"',
            'href="xxx.js"'
        ],
        answer: 1
    },
    {
        question: 'Um arquivo javascript externo precisa ter a tag script?',
        options: [
            'Verdade',
            'Falso'
        ],
        answer: 1
    },
    {
        question: 'Como você acessa a propriedade nome de um objeto chamado meuObjeto?',
        options: [
            'meuObjeto["nome"]',
            'meuObjeto->nome',
            'meuObjeto.nome()',
            'meuObjeto: nome'
        ],
        answer: 0
    },
    {
        question: 'Como escrever um "Olá Mundo" em um alertbox?',
        options: [
            'alertBox("Olá Mundo")',
            'msgBox("Olá Mundo")',
            'msg("Olá Mundo")',
            'alert("Olá Mundo")'
        ],
        answer: 3
    },
    {
        question: 'Como você cria uma função no Javascript?',
        options: [
            'function:minhaFuncao()',
            'function = minhaFuncao()',
            'function minhaFuncao()'
        ],
        answer: 2
    },
    {
        question: 'Como chamar uma função chamada "minhaFuncao"?',
        options: [
            'call minhaFuncao',
            'call function minhaFuncao',
            'minhaFuncao()'
        ],
        answer: 2
    },
    {
        question: 'Como escrever uma condicional IF no Javascript?',
        options: [
            'if i = 5',
            'if i == 5 then',
            'if (i == 5)',
            'if i = 5 then'
        ],
        answer: 2
    },
    {
        question: 'Como você adiciona um item ao final de um array chamado meuArray?',
        options: [
            'meuArray.add("novoItem")',
            'meuArray.push("novoItem")',
            'meuArray.insert("novoItem")',
            'meuArray.append("novoItem")'
        ],
        answer: 1
    },
    {
        question: 'Como fazer um if que executa um código caso "i" for diferente de 5?',
        options: [
            'if (i != 5)',
            'if (i <> 5)',
            'if i <> 5',
            'if i =! 5 then'
        ],
        answer: 0
    },
    {
        question: 'Como o loop while começa?',
        options: [
            'while (i <= 10)',
            'while (i <= 10; i++)',
            'while i = 1 to 10'
        ],
        answer: 0
    },
    {
        question: 'Qual dos seguintes métodos é usado para exibir mensagens no console do navegador?',
        options: [
            'alert("Olá Mundo")',
            'console.show("Olá Mundo")',
            'console.log("Olá Mundo")',
            'print("Olá Mundo")'
        ],
        answer: 2
    },
    {
        question: 'Como você cria uma variável em JavaScript?',
        options: [
            'let x = 10',
            'variable x = 10',
            'var x => 10',
            'const x <- 10'
        ],
        answer: 0
    },
    {
        question: 'Qual é a sintaxe correta de um operador ternário em JavaScript?',
        options: [
            'if (condição) ? valor1 : valor2',
            'condição ? valor1 : valor2',
            'condição : valor1 ? valor2',
            'condição ? valor1, valor2'
        ],
        answer: 1
    }
 
];

console.log(questions.length)