chefe()

function chefe(){

    //vetor de escopo local
    let vendedores = []
    do {
        let opcao = Number(prompt(`Escolha \n [1]. Cadastrar vendedor \n [2]. Cadastrar venda \n [3]. Sair`))
        switch (opcao){
            case 1: cadastraVendedor(vendedores)
                    break
            case 2: cadastraVendas(vendas, vendedores)
                    break
            case 3: console.log(`Tchau`)
            default: console.log(`Tente Novamente...`)
        }
    }
    while(opcao != 3)
    cadastraVendedor(vendedores) // essa passagem é por referência e torna o vetorde escopo global
}

function cadastraVendedor(vended){
    let objeto = new Object()
    objeto.codigo = Number(prompt(`Informe o código do vendedor`))
    objeto.nome = prompt(`Informe o nome do vendedor`)
    // verificando se o código ja existe
    for(let i = 0; i < vended.lenght; i++){
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
    for(let i=0;i<vdes.lenght;i++){
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