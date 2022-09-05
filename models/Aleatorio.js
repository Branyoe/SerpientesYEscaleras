class Aleatorio{
  static generar(inicio, fin){
    let x = Math.floor(Math.random() * fin ) + inicio; 
    return x;
  }
}

module.exports = Aleatorio;