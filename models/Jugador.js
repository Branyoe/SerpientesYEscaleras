class Jugador{
  #posicion = 0;
  #nombre = '';
  #dado = null;
  #tablero = [];

  constructor(nombre, dado, tablero){
    this.#nombre = nombre;
    this.#dado = dado;
    this.#posicion = 0;
    this.#tablero = tablero;
  }

  ejecutarTurno(){
    let nPasos = this.#dado.lanzar();

    this.#posicion += nPasos;
    console.log(`Jugador ${this.#nombre} en: ${this.#posicion}`);
  }

  validarPosicion(posicionActual){
      let element = this.#tablero.mapa.find((e) => e.posicion === posicionActual);
      console.log(element)
      return element;
  }

  //getter, setters
  get nombre(){ return this.#nombre; };
  set posicion(valor){ this.#posicion = valor}
}

module.exports = Jugador;