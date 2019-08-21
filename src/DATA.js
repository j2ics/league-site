import Faker from "faker";

const cars = [
  "BMW M6 GTLM",
  "Ford GT LM",
  "Porsche 911 RSR",
  "Ferrari 488 GTLM",
  "Corvette C7.R GTE"
];

const getRace = () => {
    const newRace = {};
    newRace.location = `${Faker.address.country()}`;
    newRace.circuit = `${Faker.address.city()} Circuit`;
    newRace.duration = `${Math.floor(Math.random()*93)} laps`;
    newRace.date = `${Faker.date.future().toDateString()}`
    return newRace;
}

const getCar = () => {
  const car = {};
  car.model = cars[Math.floor(Math.random() * cars.length)];
  car.make = car.model.split(" ")[0];
  return car;
};

const getSchedule = n => {
    const races = [];
    for (let i = 1; i <= n; i++) {
      const race = getRace();
      races.push(race);
    }
    return races;
}

const getArticle = () => {
  let article = {};
  article.author = `${Faker.name.firstName()} ${Faker.name.lastName()}`;
  article.title = `${Faker.name.lastName()} wins ${Faker.address.country()} GTE`;
  article.content = `${Faker.lorem.paragraphs()}`;
  article.date = `${Faker.date.recent()}`;
  article.image = `${Faker.image.transport()}`;
  return article;
};

const getDriver = () => {
  let driver = {};
  driver.name = `${Faker.name.firstName()} ${Faker.name.lastName()}`;
  driver.country = `${Faker.address.countryCode()}`;
  driver.image = `${Faker.image.avatar()}`
  driver.car = getCar();
  driver.points = Math.floor(Math.random() * 236);
  return driver;
};

const getDrivers = n => {
  const drivers = [];
  for (let i = 1; i <= n; i++) {
    const driver = getDriver();
    drivers.push(driver);
  }
  return drivers;
};

class Data {
  static getData = () => {
    return {
      articles: [getArticle(), getArticle(), getArticle(), getArticle()],
      drivers: getDrivers(14),
      schedule: getSchedule(18)
    };
  };
}

export default Data;
