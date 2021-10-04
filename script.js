var yugi = {
  nome: "yugi",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0,
  pontosIniciais: 0,
  imagem: "https://i1.sndcdn.com/artworks-000284304413-g8hghn-t500x500.jpg"
};

var kaiba = {
  nome: "kaiba",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0,
  pontosIniciais: 0,
  imagem: "https://maisplay.com/wp-content/uploads/2021/07/kaivaajpg.jpg"
};

function calculaPontos(jogador) {
  var calcPontos =
    jogador.vitorias * 3 + jogador.empates + jogador.pontosIniciais;
  return calcPontos;
}
yugi.pontos = calculaPontos(yugi);
kaiba.pontos = calculaPontos(kaiba);

if ((calculaPontos < yugi.pontos) | (calculaPontos < kaiba.pontos)) {
  console.log("Pontos validados incorretamente");
}

var jogadores = [yugi, kaiba];

function exibeJogadoresNaTela(jogadores) {
  var elemento = "";
  for (var i = 0; i < jogadores.length; i++) {
    elemento +=
      "<tr> <td>" +
      "<img class='imagem_jogadores' src=" +
      jogadores[i].imagem +
      "> </td>";
    elemento += "<td>" + jogadores[i].vitorias + "</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    elemento += "<td><button onClick='adicionarEmpate()'>Empate</button> </td>";
    elemento += "</tr>";
  }
  document.getElementById("tabelaJogadores").innerHTML = elemento;
}
exibeJogadoresNaTela(jogadores);

function adicionarVitoria(i) {
  jogadores[i].vitorias++;
  for (var j = 0; j < jogadores.length; j++) {
    if (jogadores[j] != jogadores[i]) {
      jogadores[j].derrotas++;
    }
  }
  jogadores[i].pontos = calculaPontos(jogadores[i]);
  exibeJogadoresNaTela(jogadores);
}
function adicionarEmpate() {
  yugi.empates++;
  kaiba.empates++;
  yugi.pontos = calculaPontos(yugi);
  kaiba.pontos = calculaPontos(kaiba);
  exibeJogadoresNaTela(jogadores);
}
//function adicionarDerrota(i) {
//if(yugi.vitorias++) {
//kaiba.derrotas++
//}
//if(kaiba.vitorias++) {
//yugi.derrotas++
//}
//jogadores[i].derrotas++;
//exibeJogadoresNaTela(jogadores);
//}