var config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.PROJECT_ID+".firebaseapp.com",
  databaseURL: "https://"+process.env.PROJECT_ID+".firebaseio.com",
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.PROJECT_ID+".appspot.com",
  messagingSenderId: process.env.MESSAGE_ID
};

firebase.initializeApp(config);
