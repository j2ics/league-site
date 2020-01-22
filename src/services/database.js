import fire from "../fire";

class db {
  static getData = () => {
    return fire
      .database()
      .ref()
      .once("value")
      .then(snapshot => snapshot.val());
  };

  //Drivers
  static getAllDrivers = () => {
    return fire
      .database()
      .ref("drivers")
      .once("value")
      .then(snapshot => snapshot.val());
  };
  static getDriver = key => {
    console.log("driver key", key)
    return fire
      .database()
      .ref(`drivers/${key}`)
      .once("value")
      .then(snapshot => snapshot.val());
  };
  static addNewDriver = driver => {
    fire
      .database()
      .ref("drivers")
      .push(driver);
  };
  static updateDriver = driver => {
    fire
      .database()
      .ref(`drivers/${driver.key}`)
      .update(driver);
  };
  static removeDriver = key => {
    let driverRef = fire.database().ref("drivers/" + key);
    driverRef.remove();
  };

  //teams
  static getAllTeams = () => {
    return fire
      .database()
      .ref("teams")
      .once("value")
      .then(snapshot => snapshot.val());
  };
  static getTeam = key => {
    return fire
      .database()
      .ref(`teams/${key}`)
      .once("value")
      .then(snapshot => snapshot.val());
  };
  static addNewTeam = team => {
    fire
      .database()
      .ref("teams")
      .push(team);
  };
  static updateTeam = team => {
    fire
      .database()
      .ref(`teams/${team.key}`)
      .update(team);
  };
  static removeTeam = key => {
    let teamRef = fire.database().ref("team/" + key);
    teamRef.remove();
  };

  //articles
  static getAllArticles = () => {
    return fire
      .database()
      .ref("articles")
      .once("value")
      .then(snapshot => snapshot.val());
  };
  static getArticle = key => {
    return fire
      .database()
      .ref(`articles/${key}`)
      .once("value")
      .then(snapshot => snapshot.val());
  };
  static addNewArticle = article => {
    fire
      .database()
      .ref("articles")
      .push(article);
  };
  static updateArticle = article => {
    fire
      .database()
      .ref(`articles/${article.key}`)
      .update(article);
  };
  static removeArticle = key => {
    let articleRed = fire.database().ref("articles/" + key);
    articleRed.remove();
  };
}

export default db;
