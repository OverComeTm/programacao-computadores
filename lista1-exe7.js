chefe()

function chefe(){
    var vetor = [] // declara o vetor
    exe7(vetor) // estamos passando o vetor como parâmetro - escopo global
    calculaMedia(vetor)
}

function exe7(vet){ // vet representa vetor -> o que fizermos com vet, será feito em vetor

    var numero = prompt(`Informe um numero`)
    do {

        // coloca o numero em vet
        vet.push(numero)
        numero = Number(prompt(`Informe outro numero, informe número negativo para encerrar`))
    }
    while (numero >= 0)

}
// calcula e mostra a média
function calculaMedia(vet){
    var soma = 0 
    for(var i=0; i < vet.lenght;i++){
        soma = soma + vet[i]
    }
    console.log(`A média é ${soma/vet.lenght}`)
}