const { species } = require('../data/zoo_data');

function semParametro(options) { // essa função será chamada se 3 das opções de parametros forem passadas
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
  const acc = { NE: [], NW: [], SE: [], SW: [] };// essa função será chamada se 1 das opções for passada como parametro
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
  const acc = { NE: [], NW: [], SE: [], SW: [] };// essa função será chamada se 1 das opções for passada como parametro
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
// }
// if (opcao === { includeNames: true, sex: 'female' }) {
//   return ;
// }
// if (opcao === { includeNames: true, sex: 'female', sorted: true }) {
//   return ;
// }
// console.log(getAnimalMap({ sex: 'female', sorted: true })); // 1° return
// console.log(getAnimalMap({ sex: 'female' })); // 1° return
// console.log(getAnimalMap());// 1° return
// console.log(getAnimalMap({ includeNames: true })); // 2° return
console.log(getAnimalMap({ includeNames: true, sorted: true })); // 3° return
// console.log(getAnimalMap({ includeNames: true, sex: 'female' })); // 4° return
// console.log(getAnimalMap({ includeNames: true, sex: 'female', sorted: true })); // 5° return
module.exports = getAnimalMap;
// 1° return{
//   NE: [ 'lions', 'giraffes' ],
//   NW: [ 'tigers', 'bears', 'elephants' ],
//   SE: [ 'penguins', 'otters' ],
//   SW: [ 'frogs', 'snakes' ]
// }

// 2° return{
//   NE: [
//     { lions: ['Zena', 'Maxwell', 'Faustino', 'Dee'] },
//     { giraffes: ['Gracia', 'Antone', 'Vicky', 'Clay', 'Arron', 'Bernard'] },
//   ],
//   NW: [
//     { tigers: ['Shu', 'Esther'] },
//     { bears: ['Hiram', 'Edwardo', 'Milan'] },
//     { elephants: ['Ilana', 'Orval', 'Bea', 'Jefferson'] },
//   ],
//   SE: [
//     { penguins: ['Joe', 'Tad', 'Keri', 'Nicholas'] },
//     { otters: ['Neville', 'Lloyd', 'Mercedes', 'Margherita'] },
//   ],
//   SW: [
//     { frogs: ['Cathey', 'Annice'] },
//     { snakes: ['Paulette', 'Bill'] },
//   ],
// };
// 3° return{
//   NE: [
//     { lions: ['Dee', 'Faustino', 'Maxwell', 'Zena'] },
//     { giraffes: ['Antone', 'Arron', 'Bernard', 'Clay', 'Gracia', 'Vicky'] },
//   ],
//   NW: [
//     { tigers: ['Esther', 'Shu'] },
//     { bears: ['Edwardo', 'Hiram', 'Milan'] },
//     { elephants: ['Bea', 'Ilana', 'Jefferson', 'Orval'] },
//   ],
//   SE: [
//     { penguins: ['Joe', 'Keri', 'Nicholas', 'Tad'] },
//     { otters: ['Lloyd', 'Margherita', 'Mercedes', 'Neville'] },
//   ],
//   SW: [
//     { frogs: ['Annice', 'Cathey'] }, { snakes: ['Bill', 'Paulette'] },
//   ],
// };
// 4° return{
//   NE: [
//     { lions: ['Zena', 'Dee'] },
//     { giraffes: ['Gracia', 'Vicky'] },
//   ],
//   NW: [
//     { tigers: ['Shu', 'Esther'] },
//     { bears: [] },
//     { elephants: ['Ilana', 'Bea'] },
//   ],
//   SE: [
//     { penguins: ['Keri'] },
//     { otters: ['Mercedes', 'Margherita'] },
//   ],
//   SW: [
//     { frogs: ['Cathey', 'Annice'] },
//     { snakes: ['Paulette'] },
//   ],
// };
// 5° return{
//   NE: [
//     { lions: ['Dee', 'Zena'] },
//     { giraffes: ['Gracia', 'Vicky'] },
//   ],
//   NW: [
//     { tigers: ['Esther', 'Shu'] },
//     { bears: [] },
//     { elephants: ['Bea', 'Ilana'] },
//   ],
//   SE: [
//     { penguins: ['Keri'] },
//     { otters: ['Margherita', 'Mercedes'] },
//   ],
//   SW: [
//     { frogs: ['Annice', 'Cathey'] },
//     { snakes: ['Paulette'] },
//   ]
