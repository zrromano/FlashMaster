import app from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.database();
  }

  createUser = (email, password) => {
    return this.auth.createUserWithEmailAndPassword(email, password);
  };

  login = (email, password) => {
    return this.auth.signInWithEmailAndPassword(email, password);
  };

  logout = () => {
    return this.auth.signOut();
  };

  // Add password reset at some point

  createCollection = (userID, name, cards) => {
    let reference = this.db.ref(
      config.projectId + "/userCollections/" + userID + "/" + name
    );
    console.log(reference);
    reference.put(cards);
  };
}

export default Firebase;
