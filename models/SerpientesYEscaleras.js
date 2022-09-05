class SerpientesYEscaleras {
  #jugador1 = null;
  #jugador2 = null;

  constructor(jugador1, jugador2, tablero, dado){
    this.#jugador1 = jugador1;
    this.#jugador2 = jugador2;
  }

  iniciar(){
    do{
      this.#jugador1.ejecutarTurno();
      this.#jugador2.ejecutarTurno();
      console.log();
    }while(this.#jugador1.getPosicion < 100 && this.#jugador2.getPosicion < 100);

    if (this.#jugador1.getPosicion >= 100 && this.#jugador2.getPosicion >= 100) {
      console.log('************* Empate *************');
    }else if(this.#jugador1.getPosicion >= 100){
      console.log(`\n******** Ganador ${this.#jugador1.getNombre} ********`);
    }else{
      console.log(`\n******** Ganador ${this.#jugador2.getNombre} ********`);
    }
  }
}

module.exports = SerpientesYEscaleras;