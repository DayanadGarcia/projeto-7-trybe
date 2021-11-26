const { prices } = require('../data/zoo_data');

const calcPessoas = (accPessoas, currPessoa) => {
  const acc = accPessoas;
  if (currPessoa.age >= 18 && currPessoa.age < 50) {
    acc.adult += 1;
  } else if (currPessoa.age < 18) {
    acc.child += 1;
  } else if (currPessoa.age >= 50) {
    acc.senior += 1;
  }
};
function countEntrants(entrants) {
  return entrants.reduce((accPessoas, currPessoa) => {
    calcPessoas(accPessoas, currPessoa);
    return accPessoas;
  }, { child: 0, adult: 0, senior: 0 });
}
function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) { return 0; }
  const myObj = countEntrants(entrants);
  const crianca = (myObj.child) * prices.child;
  const adulto = (myObj.adult) * prices.adult;
  const idoso = (myObj.senior) * prices.senior;
  return crianca + adulto + idoso;
}
module.exports = { calculateEntry, countEntrants };
