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
    console.log(`*Jugador ${this.#nombre} en: ${this.#posicion}`);

    let modificadorEncontrado = this.#validarPosicion(this.#posicion);
    if(modificadorEncontrado){
      console.log(`  Jugador ${this.#nombre} callló en ${modificadorEncontrado.movimiento < 0 ? 'serpientes' : 'escaleras'}`);
      this.#posicion += modificadorEncontrado.movimiento;
      console.log(`  posicion actualizada: ${this.#posicion}`);
    }
  }

  #validarPosicion(posicion){
      let element = this.#tablero.mapa.find((e) => e.posicion === posicion);
      // console.log(element)
      return element;
  }

  //getter, setters
  get getNombre(){ return this.#nombre; };
  get getPosicion(){ return this.#posicion; };

  set posicion(valor){ this.#posicion = valor}
}

module.exports = Jugador;