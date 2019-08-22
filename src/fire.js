import firebase from 'firebase/app'
import 'firebase/database'

var config = {
  apiKey: "AIzaSyBfec12ZkAzOAUFGI0cpacAvFjXjrQoZPU",
  authDomain: "j2ics-1511f.firebaseapp.com",
  databaseURL: "https://j2ics-1511f.firebaseio.com",
  projectId: "j2ics-1511f",
  storageBucket: "j2ics-1511f.appspot.com",
  messagingSenderId: "343907244182",
  appId: "1:343907244182:web:f2db32231ac7be32"
};
var fire = firebase.initializeApp(config);
export default fire;
