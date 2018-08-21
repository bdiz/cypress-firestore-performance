import { firebase } from "@firebase/app";
import "@firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyAXdQHfe5Xr_xWbFX6qPMd3xKovGxoCogQ",
  databaseURL: "https://cypress-firestore-25e5d.firebaseio.com",
  projectId: "cypress-firestore-25e5d"
});

const firestore = firebase.firestore();
firestore.settings({ timestampsInSnapshots: true });

export default firestore;
