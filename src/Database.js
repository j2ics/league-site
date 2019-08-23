import fire from "./fire";

class db {
  static getData = () => {
    return fire
      .database()
      .ref()
      .once("value")
      .then(snapshot => snapshot.val());
  };

  static getDrivers = () => {
    return fire.database().ref("drivers");
  };

  static postArticle = article => {
    fire
      .database()
      .ref("articles")
      .push(article);
  };
}

export default db;
