const API_URL = "http://localhost:8080/contrato";

async function getContratos() {
  const response = await fetch(API_URL);
  const data = await response.json();

  let contador = 0;

  data.forEach(() => {
    contador++;
  });

  document.getElementById("contratos-ativos").textContent = contador;
}

getContratos();


async function getContratosLista() {
  const response = await fetch(API_URL);
  const data = await response.json();

  const lista = document.getElementById("lista-contratos");
  lista.innerHTML = ""; // limpa a lista antes

  data.forEach(contrato => {
    const li = document.createElement("li");
    li.classList.add("contrato-item");

    li.innerHTML = `
      <span>${contrato.nomeCliente}</span>
      <span>R$ ${contrato.valorTotal}</span>
    `;

    lista.appendChild(li);
  });
}

getContratosLista();

mesQuery = document
.getElementById("mes-select")
.addEventListener("change", (event) => {
  const mes = Number(event.target.value)
  getContratosMes(mes);
});



async function getContratosMes(mes) {

  const response = await fetch(`${API_URL}/${mes}`);
  const data = await response.json();
  console.log(mes);

  let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

  let mesAtual = meses[mes - 1];
  console.log(mesAtual)

  document.getElementById("mes-atual").textContent = mesAtual;
  document.getElementById("ganhos-valor").textContent = data;

  
}





function abrirMenu(){
  document.getElementById("drawer").classList.add("open");
  console.log("ativar");
}

function fecharMenu(){
  document.getElementById("drawer").classList.remove("open"); 
}