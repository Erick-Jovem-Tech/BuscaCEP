function Coletarcep() {

    let cep = document.getElementById("cep").value;
    console.log(cep);
    Dados(cep);
}

// 

async function Dados(cep) {

    let dados = await fetch (`https://viacep.com.br/ws/${cep}/json/`).then(response => response.json())
    console.log(dados)
    dadosTela(dados)
    dadosTela(dados)

}

function dadosTela(dados) {

    document.querySelector("#Endereco").innerHTML = "Endereço: " + dados.logradouro
    document.querySelector("#Bairro").innerHTML= "Bairro: " + dados.bairro
    document.querySelector("#Cidade").innerHTML= "Cidade: " + dados.localidade
    document.querySelector("#Estado").innerHTML= "Estado: " + dados.uf
    document.querySelector("#Regiao").innerHTML= "Regiao: " + dados.regiao
}

function Limpar() {

    document.querySelector("#cep").value = "Digite o CEP: "
    document.querySelector("#Endereco").innerHTML = "Endereço: "
    document.querySelector("#Bairro").innerHTML= "Bairro: "
    document.querySelector("#Cidade").innerHTML= "Cidade: "
    document.querySelector("#Estado").innerHTML= "Estado: "
    document.querySelector("#Regiao").innerHTML= "Regiao: "
}