const data = require("../Data");
const Utilidades = require("../utilidades/Utilidades");
const Aleatorio = require("./Aleatorio");

class Tablero {
  #jugador1 = null;
  #jugador2 = null;
  #mapa = null;

  constructor(jugador1, jugador2) {
    this.#jugador1 = jugador1;
    this.#jugador2 = jugador2;
    this.#mapa = data;
  }

  

  get mapa () {return this.#mapa};
}

module.exports = Tablero;