function mostrar(botao) {

    // Remove animação dos botões principais
    let botoesPrincipais = document.querySelectorAll(".desejado");
    botoesPrincipais.forEach(btn => btn.classList.remove("animando"));

    // Ativa animação no botão clicado
    botao.classList.add("animando");

    // Mostra área de serviços
    document.getElementById("conteudo").classList.remove("escondido");

    // 🔥 RESETA O FORMULÁRIO
    document.getElementById("formulario").classList.add("escondido");

    // Remove seleção de serviço anterior
    let servicos = document.querySelectorAll(".servico");
    servicos.forEach(btn => btn.classList.remove("ativo"));
}


function selecionarServico(botao) {

    // Remove marcação dos outros serviços
    let botoes = document.querySelectorAll(".servico");
    botoes.forEach(btn => btn.classList.remove("ativo"));

    // Marca o clicado
    botao.classList.add("ativo");

    // Mostra formulário
    document.getElementById("formulario").classList.remove("escondido");
}