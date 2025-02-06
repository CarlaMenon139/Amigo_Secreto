//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.


const listaAmigos = [];
const listaElement = document.getElementById("listaAmigos");
const resultadoElement = document.getElementById("resultado");

// Função para adicionar amigos à lista
function adicionarAmigo() {
  const input = document.getElementById("amigo");
  const nome = input.value.trim();

  if (nome === "") {
    alert("Por favor, insira um nome válido.");
    return;
  }
  if (listaAmigos.includes(nome)) {
    alert("Esse nome já foi adicionado!");
    return;
  }

  listaAmigos.push(nome);
  input.value = "";
  atualizarLista();
}

// Função para atualizar a exibição da lista
function atualizarLista() {
  listaElement.innerHTML = "";
  listaAmigos.forEach((nome) => {
    const li = document.createElement("li");
    li.textContent = nome;
    listaElement.appendChild(li);
  });
}

// Função para sortear amigos sem repetir e sem que a pessoa tire a si mesma
function sortearAmigo() {
  if (listaAmigos.length < 2) {
    alert("Adicione pelo menos dois amigos para sortear.");
    return;
  }

  let sorteados = [...listaAmigos]; // Cópia da lista
  let embaralhado = [];

  while (sorteados.length > 0) {
    let indiceSorteado = Math.floor(Math.random() * sorteados.length);
    let nomeSorteado = sorteados[indiceSorteado];

    // Evita que a pessoa tire a si mesma
    if (listaAmigos[embaralhado.length] === nomeSorteado && sorteados.length === 1) {
      return sortearAmigo(); // Refaz o sorteio se o último par for inválido
    }

    embaralhado.push(nomeSorteado);
    sorteados.splice(indiceSorteado, 1);
  }

  // Exibir pares de sorteio na tela
  resultadoElement.innerHTML = "";
  for (let i = 0; i < listaAmigos.length; i++) {
    const li = document.createElement("li");
    li.textContent = `${listaAmigos[i]} → ${embaralhado[i]}`;
    resultadoElement.appendChild(li);
  }
}
