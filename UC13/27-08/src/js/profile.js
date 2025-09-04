// Função para carregar dados do usuário
async function carregarPerfil() {
  const token = localStorage.getItem("token"); // pega token do localStorage

  if (!token) {
    document.getElementById("mensagem").textContent = "Usuário não autenticado!";
    document.getElementById("mensagem").style.color = "red";
    return;
  }

  try {
    const resposta = await fetch("http://localhost:3000/users/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token // envia token
      }
    });

    if (!resposta.ok) {
      const erro = await resposta.text();
      throw new Error(erro);
    }

    const user = await resposta.json();

    // Preenche os campos com os dados retornados
    document.getElementById("nome").value = user.name || "";
    document.getElementById("email").value = user.email || "";

  } catch (erro) {
    console.error("Erro:", erro);
    document.getElementById("mensagem").textContent = "Erro ao carregar perfil: " + erro.message;
    document.getElementById("mensagem").style.color = "red";
  }





}

//DELETAR
async function deletarPerfil() {
   const token = localStorage.token; // pega token do localStorage

  if (!token) {
    document.getElementById("mensagem").textContent = "Usuário não autenticado!";
    document.getElementById("mensagem").style.color = "red";
    return;
  }

  try {
    const resposta = await fetch("http://localhost:3000/users/", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token // envia token
      }
    });

    if (!resposta.ok) {
      const erro = await resposta.text();
      throw new Error(erro);
    }

    document.getElementById("mensagem").textContent = "Usuário deletado!: "
    document.getElementById("mensagem").style.color = "red";

  } catch (erro) {
    console.error("Erro:", erro);
    document.getElementById("mensagem").textContent = "Erro ao deletar perfil: " + erro.message;
    document.getElementById("mensagem").style.color = "red";
  }
}




//Atualizar
async function atualizarPerfil() {
  const token = localStorage.token; // pega token do localStorage

  if (!token) {
    document.getElementById("mensagem").textContent = "Usuário não autenticado!";
    document.getElementById("mensagem").style.color = "red";
    return;
  }
  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const senha = document.getElementById('senha').value;

  dadosParaAtualizar = {};

  if (nome) dadosParaAtualizar.name = nome;
  if (email) dadosParaAtualizar.email = email;
  if (senha) dadosParaAtualizar.password = senha;

  if (!dadosParaAtualizar.nome && !dadosParaAtualizar.email && !dadosParaAtualizar.senha) {
    document.getElementById("mensagem").textContent = "Nenhum campo para atualizar!";
    document.getElementById("mensagem").style.color = "red";
    return;
  }

  const resposta = await fetch(`http://localhost:3000/users/me`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + token,
    },
    body: JSON.stringify(dadosParaAtualizar)
  });
  if (!resposta.ok) {
    const erro = await resposta.text();
    throw new Error(erro);
  }








}


// Carrega o perfil assim que a página é aberta
window.addEventListener("DOMContentLoaded", carregarPerfil);
