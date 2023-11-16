import React from "react";
import { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imagem: require("./img/biscoito.png"),
      frases: [
        "Quebre o biscoito e descubra sua sorte!!",
        "Tenha sorte!",
        "A vida é bela!",
        "Bons momentos estão chegando!",
        "Acredite em você mesmo e tudo será possível.",
        "O sucesso nasce do querer, da determinação e persistência.",
        "Seja a mudança que você deseja ver no mundo.",
        "O único lugar onde o sucesso vem antes do trabalho é no dicionário.",
        "A vida é como andar de bicicleta. Para ter equilíbrio, você precisa se manter em movimento.",
        "O importante não é vencer todos os dias, mas lutar sempre.",
        "Nossa maior fraqueza está em desistir. O caminho mais certo de vencer é tentar mais uma vez.",
        "Não espere por circunstâncias ideais. Elas nunca chegam.",
      ],
      fraseIndex: 0,
      fraseInicial: " ",
    };
    this.mudarImagem = this.mudarImagem.bind(this);
  }
  gerarIndiceAleatorio() {
    const novoIndice = Math.floor(Math.random() * this.state.frases.length);
    return novoIndice !== this.state.fraseIndex
      ? novoIndice
      : this.gerarIndiceAleatorio();
  }
  mudarImagem() {
    if (this.state.botaoPressionado) {
      this.setState({
        imagem: require("./img/biscoito.png"),
        botaoPressionado: false,
        fraseIndex: 0,
        fraseInicial: " ",
      });
    } else {
      this.setState({
        imagem: require("./img/biscoitoQuebrado.png"),
        fraseIndex: this.gerarIndiceAleatorio(),
        botaoPressionado: true,
        fraseInicial:" ",
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.imagemTamanho} source={this.state.imagem} />
        <Text style={styles.textoGeral}>
          {this.state.frases[this.state.fraseIndex]}
        </Text>
        <TouchableOpacity style={styles.botao} onPress={this.mudarImagem}>
          <Text style={styles.textoBotao}>{this.state.botaoPressionado ? "Reiniciar" : "Quebrar Biscoito"}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00FA9A",
    alignItems: "center",
    justifyContent: "center",
  },
  textoGeral: {
    fontSize: 25,
    color: "#0000CD",
    fontWeight: "bold",
    textAlign: "center",
  },
  botao: {
    borderWidth: 4,
    borderRadius: 15,
    backgroundColor: "#1E90FF",
    borderColor: "#1E90FF",
    height: 40,
    width: 175,
    alignItems: "center",
    margin: 30,
  },
  textoBotao: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  imagemTamanho: {
    height: 300,
    width: 300,
  },
});

export default App;
