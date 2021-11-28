const { species } = require('../data/zoo_data');

function semParametro(options) {
  return species.reduce((acc, curr) => {
    if (!acc[curr.location]) {
      acc[curr.location] = [];
    }
    const myArr = curr.name;
    acc[curr.location].push(myArr);
    return acc;
  }, {});
}
function includeNames(options) {
  const acc = { NE: [], NW: [], SE: [], SW: [] };
  species.forEach((curr) => {
    if (options.sorted) {
      const myArr = curr.residents.map((elem) => elem.name).sort();
      acc[curr.location].push({ [curr.name]: myArr });
    } else {
      const myArr = curr.residents.map((elem) => elem.name);
      acc[curr.location].push({ [curr.name]: myArr });
    }
  });
  return acc;
}
function sexAnimals(options) {
  const acc = { NE: [], NW: [], SE: [], SW: [] };
  species.forEach((curr) => {
    const male = curr.residents.filter((el) => el.sex === options.sex);
    if (options.sorted) {
      const myArr = male.map((elem) => elem.name).sort();
      acc[curr.location].push({ [curr.name]: myArr });
    } else {
      const myArr = male.map((elem) => elem.name);
      acc[curr.location].push({ [curr.name]: myArr });
    }
  });
  return acc;
}
function getAnimalMap(options) {
  const opcao = options;
  if (!opcao) {
    return semParametro(options);
  }
  if (opcao.includeNames) {
    if (opcao.sex) {
      return sexAnimals(options);
    }
    return includeNames(options);
  }
  return semParametro(options);
}
module.exports = getAnimalMap;
