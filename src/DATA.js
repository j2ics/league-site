import Faker from "faker";

const getArticle = () => {
  let article = {};
  article.author = `${Faker.name.firstName()} ${Faker.name.lastName()}`;
  article.title = `${Faker.lorem.sentence()}`
  article.content = `${Faker.lorem.paragraphs()}`;
  article.date = `${Faker.date.past()}`;
  article.image = `${Faker.image.sports()}`
  return article;
};

class Data {
  static getData = () => {
    return {
      articles: [getArticle(), getArticle(), getArticle(), getArticle()]
    };
  };
}

export default Data;
