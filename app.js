//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Array para armazenar os amigos
let amigos = [];

// Função para adicionar amigos
function adicionarAmigo() {
    console.log("Função chamada!");  // Verifica se a função é chamada
    let amigoInput = document.getElementById('amigo');
    let amigo = amigoInput.value.trim();

    // Verifica se o campo está vazio
    if (amigo === '') {
        alert('Por favor, insira um nome válido.');
        return;
    }

    // Verifica se o amigo já foi adicionado
    if (amigos.includes(amigo)) {
        alert('Este nome já foi adicionado. Tente outro.');
        return;
    }

    amigos.push(amigo);  // Adiciona o nome do amigo à lista
    amigoInput.value = '';  // Limpa o campo de entrada
    atualizarListaAmigos();  // Atualiza a lista exibida no HTML
}

// Função para atualizar a lista de amigos na tela
function atualizarListaAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';  // Limpa a lista existente

    console.log(amigos);  // Verifica o conteúdo da lista

    // Adiciona cada amigo à lista no HTML
    amigos.forEach(function(amigo) {
        let li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Função para sortear os amigos secretos
function sortearAmigo() {
    console.log("Função de sorteio chamada!");  // Verifica se o sorteio está sendo iniciado
    if (amigos.length < 2) {  // Verifica se há pelo menos 2 amigos
        alert('É necessário pelo menos 2 amigos para o sorteio.');
        return;
    }

    let sorteio = {};
    let amigosSorteados = [...amigos];  // Cria uma cópia da lista de amigos

    amigos.forEach(function(amigo) {
        let sorteado;

        // Garante que ninguém seja sorteado para si mesmo
        do {
            sorteado = amigosSorteados[Math.floor(Math.random() * amigosSorteados.length)];
        } while (sorteado === amigo);

        sorteio[amigo] = sorteado;

        // Remove o sorteado da lista para evitar que alguém seja sorteado mais de uma vez
        amigosSorteados = amigosSorteados.filter(a => a !== sorteado);
    });

    // Exibe o resultado
    exibirResultado(sorteio);
}

// Função para exibir o resultado na tela
function exibirResultado(sorteio) {
    let resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '';  // Limpa os resultados existentes

    // Exibe cada sorteio na tela
    for (let amigo in sorteio) {
        let li = document.createElement('li');
        li.textContent = `${amigo} vai presentear ${sorteio[amigo]}`;
        resultadoDiv.appendChild(li);
    }
}
