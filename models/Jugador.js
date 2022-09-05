class Jugador{
  #posicion = 0;

  constructor(nombre, dado, tablero){
    this.#nombre = nombre;
    this.#dado = dado;
    this.#posicion = posicion;
    this.#tablero = tablero;
  }

  ejecutarTurno(){
    let nPasos = this.#dado.lanzar();

    this.#posicion += nPasos;
    console.log(`Jugador ${this.#nombre} en: ${this.#posicion}`);
  }

  #validarPosicion(posicionActual){
    if(posicionActual )
  }

  //getter, setters
  get nombre(){ return this.#nombre; };
  set posicion(valor){ this.#posicion = valor}
}