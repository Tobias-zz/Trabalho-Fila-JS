const minhaFila = new Fila(5);

function adicionarElemento() {
    const nome = document.getElementById("txtNome");
    const cpf  = document.getElementById("txtCpf");
  
    if (nome.value.trim() === "" || cpf.value.trim() === "") {
        alert("Preencha o nome e o CPF antes de adicionar!");
        return;
    }

    const dataAtual = obterDataAtual();
    const horaAtual = obterHoraAtual();

    const atendimento = new Atendimento(nome.value, cpf.value, dataAtual, horaAtual);

    if (minhaFila.enqueue(atendimento)) {
        mostrarFila();
        nome.value = "";
        cpf.value  = "";
        nome.focus();
    } else {
        alert("Fila cheia!");
    }
}

function mostrarFila() {
    const filaElemento = document.getElementById("listFila");
    filaElemento.innerHTML = "";

    for (let item of minhaFila) {
        const listItem = document.createElement("li");
        listItem.className = "list-group-item";
        listItem.innerHTML =
            `<strong>${item.nome}</strong> &nbsp;|&nbsp; 
             CPF: ${item.cpf} &nbsp;|&nbsp; 
             Data: ${item.data} &nbsp;|&nbsp; 
             Hora: ${item.hora}`;
        filaElemento.appendChild(listItem);
    }
}

function removerElemento() {
    let removido = minhaFila.dequeue();
    
    if (removido === null) {
        alert("Fila vazia!");
    } else {
        const horaSaida = obterHoraAtual(); 
        
        const tempoEspera = calcularDiferencaHoras(removido.hora, horaSaida); 

        const textoAtendimento = `Próximo a ser atendido(a): ${removido.nome}, chegou às ${removido.hora} está sendo atendido(a) às ${horaSaida}. Tempo de espera: ${tempoEspera}`;

        const msgDiv = document.getElementById("mensagem-remocao");
        msgDiv.textContent = textoAtendimento;
        msgDiv.style.display = "block";

        localStorage.setItem('ultimoAtendido', removido.nome);

        mostrarFila();
    }
}

function buscarElemento() {
   
    const buscaCpf = document.getElementById("txtCpf").value.trim();
    let encontrado = false;

    
    for (let item of minhaFila) {
        if (item.cpf === buscaCpf) {
            alert(`✅ Encontrado na fila:\n${item.toString()}`);
            encontrado = true;
            break;
        }
    }

    if(!encontrado)
        alert("Pessoa não está na fila com este CPF.");
}