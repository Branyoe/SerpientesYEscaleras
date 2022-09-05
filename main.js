const Dado = require("./models/Dado");
const Jugador = require("./models/jugador");
const Tablero = require("./models/tablero");

const table = new Tablero(1, 2);
const dado = new Dado();

const jugador1 = new Jugador("Juan", dado,table);
jugador1.validarPosicion(1);

// console.table(table.mapa);