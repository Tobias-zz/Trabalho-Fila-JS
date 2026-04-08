function atualizarUltimoAtendimento() {
    const ultimo = localStorage.getItem('ultimoAtendido');
    
    const painel = document.getElementById('ultimoAtendimento');
    
    if (ultimo) {
        painel.textContent = ultimo;
    } else {
        painel.textContent = "Aguardando...";
    }
}

atualizarUltimoAtendimento();

setInterval(atualizarUltimoAtendimento, 1000);