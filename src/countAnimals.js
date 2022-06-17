const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  const myObj = {};
  if (!animal) {
    species.forEach((elem) => {
      myObj[elem.name] = elem.residents.length;// forma de popular objeto
    });
    return myObj;
  }
  const returnTotal = species.filter((el) => el.name.includes(animal.specie)); // retorna array de obj com todos os dados da especie e total de residentes
  if (animal.specie && animal.sex) {
    const returnSex = returnTotal[0].residents.filter((elem) => elem.sex === animal.sex); // retorna array de objeto com os dados do animal, nome, sexo e idade
    return returnSex.length; // retorna o total de animais no array
  }
  if (animal.specie) {
    const totalAnimais = returnTotal[0].residents.length;
    return totalAnimais;
  }
}
countAnimals({ specie: 'elephants', sex: 'male' });
module.exports = countAnimals;
