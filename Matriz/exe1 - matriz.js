chefe()

function chefe(){
    //declara a matriz
    let matriz = [] // uma matriz é um vetor 
    //vamos criar o vetor de alunos
    let vetor = []
    cadastra(matriz, vetor) // cadastra 3 alunos
    consultaMediaAlunos(matriz, vetor) // calcula a média das notas
    calculaMediaProvas(matriz)
    calculaMaiorNotaProva(matriz, vetor)
}

function calculaMaiorNotaProva(mat, vet){
    for(let j=0;j<4;j++){ // para cada prova
        let maiorNota = mat[0][j] // assumo que a maior nota é do primeiro 
        let nomeMaiorNota = vet[j].nome // assumo que o nome do aluno com maior nota é o 1.o bimestre
        for(let i=0;i<3;i++){
            if (mat[i][j] > maiorNota){
                maiorNota = mat[i][j] //atualiza nota 
                nomeMaiorNota = vet[j].nome //atualiza nome
            }
        }
        console.log(`A prova ${j+1} tem a maior nota ${maiorNota} do aluno ${nomeMaiorNota}`)
    }
}

function calculaMediaProvas(mat){
    for(let j=0;j<4;j++){
        let media = 0
        for(let i=0;i<3;i++){
            media = media + mat[i][j]
        }
        console.log(`A média da prova ${j+1} é ${media/3}`)
    }
}
// mat representa a matriz na função chefe()
// vet representa a matriz na função chefe()
function cadastra(mat, vet){ // mat representa a matriz na função chefe()
    for(let i=0; i<3; i++){ // sao 3 alunos
        var objeto = new Object ()
        objeto.nome = prompt(`Informe o nome`)
        objeto.rg = prompt(`Informe o RG`)
        objeto.media = 0 // vamos considerar que no cadastro a média do aluno é 0
        // insere o objeto em vet
        vet.push(objeto)
        mat[i] = [] // cada linha da matriz é um vetor
        alert(`Informe 4 notas do aluno ${objeto.nome}`)
        for(let j=0; j<4; j++){ // sao 4 notas
            mat[i][j] = Number(prompt(`Informe a nota ${j+1}`))
        }
    }
}

function consultaMediaAlunos(mat, vet){// mat representa a matriz na função chefe()
    for(let i=0; i<3; i++){ // para cada alunos
        for(let j=0; j<4; j++){ // para cada nota
            // soma no vetor na posição i
            vet[i].media = vet[i].media + mat[i][j]
        }
        // acabaram as notas do alunos i
        vet[i].media = vet[i].media / 4
    }
    // acabaram os alunos
    console.log(vet)
}