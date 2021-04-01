const dados = document.querySelector('#tabelaJogadores');

let rafa = {
    nome: 'Rafa',
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
}

let paulo = {
    nome: 'Paulo',
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
}

let gui = {
    nome: 'Gui',
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
}

function calcularPontos(jogador){
    return jogador.vitorias * 3 + jogador.empates
}

rafa.pontos = calcularPontos(rafa);
paulo.pontos = calcularPontos(paulo);

let jogadores = [rafa, paulo, gui];
function screenWrite(){
  for(let i=0; i<jogadores.length; i++){
      mostrarNaTela(jogadores[i],i)
}
}


function mostrarNaTela(jogadores, indice){
    
    const tela = ("<tr><td>"+jogadores.nome+"</td>"+
                    "<td>"+jogadores.vitorias+"</td>"+
                    "<td>"+jogadores.empates+"</td>"+
                    "<td>"+jogadores.derrotas+"</td>"+
                    "<td>"+jogadores.pontos+"</td>"+
                    "<td><button onClick='adicionarVitoria("+indice+")'>Vitória</button></td><td><button onClick='adicionarEmpate("+indice+")'>Empate</button></td><td><button onClick='adicionarDerrota("+indice+")'>Derrota</button></td></tr>");
    dados.innerHTML += tela
}

screenWrite();

function limparTela(){
  dados.innerHTML = '';
}


function adicionarVitoria(indice){
  jogadores[indice].vitorias += 1;
  jogadores[indice].pontos += 3;
  limparTela();
  screenWrite();
}

function adicionarDerrota(indice){
  jogadores[indice].derrotas += 1;
  limparTela();
  screenWrite();
}

function adicionarEmpate(indice){
  jogadores[indice].empates += 1;
  jogadores[indice].pontos += 1;
  limparTela();
  screenWrite();
}

function ranckear(){
  
    for(let x=0; x<2; x++){
      for(let i=0; i<jogadores.length-1; i++){
        if(jogadores[i].pontos<jogadores[i+1].pontos){
          let temp = jogadores[i];
          jogadores[i] = jogadores[i+1]
          jogadores[i+1] = temp
    }

}
}

  limparTela();
  screenWrite();
}