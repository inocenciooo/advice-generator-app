document.getElementById(`button-advice`).addEventListener("click", () => {
  mostrarFraseId();
});

async function acessarApi() {
  const response = await fetch(`https://api.adviceslip.com/advice`);
  return await response.json();
}

async function gerarTexto() {
  const ApiAcessada = await acessarApi();
  const textoGerado = ApiAcessada.slip.advice;
  document.getElementById(`advice-text`).innerHTML = textoGerado;
}

async function gerarID() {
  const ApiAcessada = await acessarApi();
  const idGerado = ApiAcessada.slip.id;
  document.getElementById(`advice-id`).innerHTML = idGerado;
}

async function mostrarFraseId() {
  await gerarTexto();
  await gerarID();
}

mostrarFraseId();
