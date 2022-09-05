class Utilidades{
  static crearVectorCon(length, element){
    let vec = [];
    for (let i = 0; i < length; i++) {
      vec[i] = element;
    }

    return vec;
  }
}

module.exports = Utilidades