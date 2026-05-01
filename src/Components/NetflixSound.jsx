import { Component } from "react";

class NetflixSound extends Component {
  playSound = () => {
    const audio = new Audio("./public/Audio/netflix.mp3");
    audio.volume = 0.5;

    audio
      .play()
      .then(() => {
        console.log("Ta-dum!");
        window.removeEventListener("click", this.playSound);
      })
      .catch((err) => {
        console.log(
          "Riproduzione bloccata: l'utente deve interagire con la pagina.",
          err,
        );
      });
  };

  componentDidMount() {
    window.addEventListener("click", this.playSound);
  }

  render() {
    return null;
  }
}

export default NetflixSound;
