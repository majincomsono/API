document.getElementById("btnPesquisar").addEventListener("click", () => {
    const ano = document.getElementById("inputAno").value;
    
    if (ano) {
        fetchFeriados(ano);
    } else {
        alert("Por favor, insira um ano válido!");
    }
});

function fetchFeriados(ano) {
    const url = `https://brasilapi.com.br/api/feriados/v1/${ano}`;
    
    fetch(url)
        .then(response => response.json())
        .then(feriados => {
            displayFeriados(feriados);
        })
        .catch(error => {
            console.error("Erro ao buscar os feriados:", error);
            alert("Ocorreu um erro ao buscar os feriados.");
        });
}

function displayFeriados(feriados) {
    const lista = document.getElementById("feriados-lista");
    lista.innerHTML = ""; // Limpa a lista antes de adicionar os novos feriados
    
    if (feriados.length > 0) {
        feriados.forEach(feriado => {
            const item = document.createElement("div");
            item.classList.add("feriado-item");
            item.innerHTML = `<strong>${feriado.date}</strong> - ${feriado.name}`;
            lista.appendChild(item);
        });
    } else {
        lista.innerHTML = "<p>Nenhum feriado encontrado para o ano especificado.</p>";
    }
}