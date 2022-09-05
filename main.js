const Dado = require("./models/Dado");
const Jugador = require("./models/jugador");
const SerpientesYEscaleras = require("./models/SerpientesYEscaleras");
const Tablero = require("./models/tablero");

const tablero = new Tablero(1, 2);
const dado = new Dado();

const jugador1 = new Jugador("Juan", dado, tablero);
const jugador2 = new Jugador("Pedro", dado, tablero);

const Juego = new SerpientesYEscaleras(
  jugador1,
  jugador2,
  tablero,
  dado
);

Juego.iniciar();