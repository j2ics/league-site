import fire from "./fire";

class db {
  static getData = () => {
    return fire.database().ref().once('value').then(snapshot => snapshot.val());
  };

  static getDrivers = () => {
    return fire.database().ref("drivers")
  }
}

export default db;
