chefe()

function chefe(){

    //vetor de escopo local
    let vendedores = []
    do {
        let opcao = Number(prompt(`Escolha \n [1]. Cadastrar vendedor \n [2]. Cadastrar venda \n [3]. Maior venda do mes \n [4]. Funcionario que mais vendeu \n [5]. Vendedor que mais vendeu no mês \n [6]. Mês que mais vendeu \n [7]. Sair`))
        switch (opcao){
            case 1: cadastraVendedor(vendedores)
                    break
            case 2: cadastraVendas(vendas, vendedores)
                    break
            case 3: consultaVendasFuncionarioMes(vendas)
                    break
            case 4: consultaVendasFuncionario(vendas)
                    break
            case 5: consultaVendedorMes(vendas)
                    break
            case 6: consultaMes(vendas)
                    break
            case 7: console.log(`Tchau`)
            default: console.log(`Tente Novamente...`)
        }
    }
    while(opcao != 7)
    cadastraVendedor(vendedores) // essa passagem é por referência e torna o vetorde escopo global
}

function consultaMes(vdas){
    let meses = [0,0,0,0,0,0,0,0,0,0,0,0]
    // vamos preenchendo o vetor com as somas
    for(let i=0; i<vdas.length;i++){
        let posicao = vdas[i].mes -1 // descubro a posição para colocar
        meses[posicao] = meses[posicao] + vdas[i].valor // acumula o valor
    }
    let maiorValor = meses[0] //assumo que é janeiro
    for(let i=0; i < meses.length; i++){
        if(meses[i] > maiorValor){
            maiorValor = meses[i]
        }
    }
    //encontramos a posição do maior valor vendido
    let posicao = meses.indexOf(maiorValor)
    console.log(`O mês que mais vendeu ${posicao+1}`)
}

function consultaVendedorMes(vdas){
    let mes = Number(prompt("Informe o mês"))
    let maiorVenda = 0 
    let vendedorMaisVendeu = 0
    for(let i=0; i < vdas.length; i++){
        if (vdas[i].mes == mes){
            if(vdas[i].valor > maiorVenda){
                maiorVenda = vdas[i].valor
                vendedorMaisVendeu = vdas[i].vendedor
            }
        }
    }
    console.log(`Vendedor com mais vendas ${vendedorMaisVendeu} e valor ${maiorVenda}`)
}

function consultaVendasFuncionario(vdas){
    let vendedor = Number(prompt(`Informe o código do vendedor`))
    //percorre o vetor de vendas
    let soma = 0
    for(let i = 0; i < vdas.length;i++){
        if ((vdas[i].vendedor == vendedor)){ //encontrei a venda do vendedor
            soma = soma + vdas[i].valor
        }
    }
    console.log(`A soma das vendas é ${soma}`)
}

function consultaVendasFuncionarioMes(vdas){
    let vendedor = Number(prompt(`Informe o código do vendedor`))
    let mes = Number(prompt(`Informe o mês da venda`))
    //percorre o vetor de vendas
    for(let i = 0; i < vdas.length;i++){
        // recupera somente o Mês da data -> getMonth()
        if((vdas[i].vendedor == vendedor) && (vdas[i].mes.getMonth() == mes)){ // encontrei a venda do vendedor naquele mes
            console.log(`Valor da vendas ${vdas[i].valor}`)
            return // sai da função
        }
    }
    console.log(`Não existe venda para este funcionário neste mês`)
}

function cadastraVendedor(vended){
    let objeto = new Object()
    objeto.codigo = Number(prompt(`Informe o código do vendedor`))
    objeto.nome = prompt(`Informe o nome do vendedor`)
    // verificando se o código ja existe
    for(let i = 0; i < vended.length; i++){
        if(vended[i].codigo == objeto.codigo){
            console.log(`Cadastro cancelado pois já existe um vendedor com esse código`)
            return 0 // sai da função
        }
    }
    // insere no vended, mas na verdade insere no vetor vendedores
    vended.push(objeto)
}
function cadastraVendas(vdas, vdes) { // vdas representa o vetor vendas e vdes representa o vetor vendedores

    let objeto = new Object()
    objeto.codigo = Number(prompt(`Informe o código da venda`))
    objeto.vendedor = Number(prompt(`Informe o código do vendedor`))
    objeto.mes = Number(prompt(`Informe o mês da venda`))
    objeto.valor = Number(prompt(`Informe valor da venda`))
    //verifica se o vendedor existe
    //percorre o vetor de vendedores (vdes)
    for(let i=0;i<vdes.length;i++){
        if(objeto.vendedor == vdes[i].codigo){// achamos o vendedor
            //verifica se existe venda para este vendedor no mesmo mês - não podemos registrar venda
            //percorre o vetor de vendas
            for(let j=0; j < vdas.lenght; i++){
                if((objeto.mes == vdas[i].mes)&&(objeto.vendedor == vdas[i].vendedor)){
                    console.log(`Não podemos registrar a venda`)
                    return 0 // sai da função
                }
            }
        }
        //já percorreu e não achou, então vamos inserir
        //insere a venda em vdas, que na verdade é vendas
        vdas.push(objeto)
        console.log(`Venda Registrada!`)
        return 0 //sai da função
    }
    console.log(`Vendedor não existe.`)
}