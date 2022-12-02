const dataPeople = [
  { name: "Pera", lastname: "Peric", house: "Zmaj Jovina 1a", company: "", jmbg: 1108978097812 }, //1
  { name: "Zika", lastname: "Peric", house: "Zmaj Jovina 1a", company: "", jmbg: 1308986097823 },
  { name: "Mika", lastname: "Peric", house: "Zmaj Jovina 1a", company: "", jmbg: 1508989097804 },
  { name: "Jovo", lastname: "Peric", house: "Zmaj Jovina 1b", company: "", jmbg: 2108994097844 }, //4
  { name: "Aco", lastname: "Peric", house: "Zmaj Jovina 1b", company: "", jmbg: 3008997097851 },
  { name: "Sima", lastname: "Peric", house: "Zmaj Jovina 1b", company: "", jmbg: 1208970097869 },
  { name: "Zoran", lastname: "Peric", house: "Zmaj Jovina 1a", company: "", jmbg: 2908002097879 }, //7
];

const dataCompanies = [
  { name: "Apple", people: { id: [1108978097812, 2108994097844, 2908002097879] } },
  {
    name: "Microsoft",
    people: { id: [1308986097823, 1508989097804, 3008997097851, 1208970097869] },
  },
];

const dataHouses = [
  { location: "Zmaj Jovina 1a", people: [] },
  { location: "Zmaj Jovina 1b", people: [] },
];

function mapCompaniesIntoPeople(people, companies) {
  let newDataPeople = people.map((a) => {
    // Making deep copy of object
    return JSON.parse(JSON.stringify(a));
  });
  for (let i = 0; i < people.length; i++) {
    for (let y = 0; y < companies.length; y++) {
      if (companies[y].people.id.includes(people[i].jmbg)) {
        newDataPeople[i].company = companies[y].name;
      }
    }
  }
  return newDataPeople;
}

function mapPeopleIntoHouses(people, houses) {
  let newDataHouses = houses.map((a) => {
    // Making deep copy of object
    return JSON.parse(JSON.stringify(a));
  });
  for (let i = 0; i < people.length; i++) {
    for (let y = 0; y < houses.length; y++) {
      if (houses[y].location === people[i].house) {
        newDataHouses[y].people.push(people[i].jmbg);
      }
    }
  }
  return newDataHouses;
}

console.log(mapCompaniesIntoPeople(dataPeople, dataCompanies));
console.log(mapPeopleIntoHouses(dataPeople, dataHouses));
