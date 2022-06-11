const elementoResposta = document.querySelector("#resposta");
const respostas = [
  "Não.",
  "Sim.",
  "Provavelmente.",
  "Talvez.",
  "Certeza.",
  "Não tenho Certeza.",
  "Concentre-se mais um pouco e pergunte novamente.",
  "Sinais apontam que sim.",
  "Melhor não te dizer isso agora!",
  "Tem que ta vendo ",
  "Possívelmente",
  "Você pode contar com isso"
]
const inputPergunta = document.querySelector("#inputPergunta");

//Clicar em fazer pergunta
function fazerPergunta(){

  if(inputPergunta.value == ""){
    alert("Digite sua pergunta")
    return
  }
    const pergunta =`<div> ${inputPergunta.value}</div>`
  //Gerar um numero aleatório
    const totalRespostas = respostas.length  
    const numeroAleatorio = Math.floor(Math.random() * totalRespostas);

   
    elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio];


  //Sumir a reposta  depois e 2 segundos
  setTimeout(function(){  
      location.reload();
  },2000);
}
