function enviarWhats(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const mensagem = document.getElementById("mensagem").value;
  const telefone = "5527992658275";

  const texto = `Olá! Me chamo ${nome}. ${mensagem}`;
  const msgFormatada = encodeURIComponent(texto);

  const url = `https://wa.me/${telefone}/?text=${msgFormatada}`;

  window.open(url, "_blank");
}

// Abrir proj. formulário
function abrirProjeto1() {
  window.open("https://dyuwellem.github.io/login-system/index.html", "_blank");
}
