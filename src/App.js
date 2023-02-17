import React, { Component } from "react";
import "./styles.css";
import dois from "./imagens/2.png";
import tres from "./imagens/3.png";
import quatro from "./imagens/4.png";
import cinco from "./imagens/5.png";
import seis from "./imagens/6.png";
import sete from "./imagens/7.png";

class App extends Component {
  state = {
    desenhos: [
      { titulo: "Bruxa", imagem: `${dois}` },
      { titulo: "Fantasma", imagem: `${tres}` },
      { titulo: "Vampiro", imagem: `${quatro}` },
      { titulo: "Zumbi", imagem: `${cinco}` },
      { titulo: "fada", imagem: `${seis}` },
      { titulo: "pirata", imagem: `${sete}` }
    ]
  };
  render() {
    return (
      <>
        {this.state.desenhos.map((item) => (
          <div>
            <img src={item.imagem} alt="" />
            <h1>{item.titulo}</h1>
          </div>
        ))}
      </>
    );
  }
}
export default App;
