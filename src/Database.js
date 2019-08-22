import fire from "./fire";

class db {
  static getData = () => {
    return fire.database().ref().once('value').then(snapshot => snapshot.val());
  };
}

export default db;
