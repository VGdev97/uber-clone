import {initializeApp} from 'firebase/app'
import {GoogleAuthProvider, getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAP2SwS73GhNdgsMID2ZD7ehsw9DfbACRs",
    authDomain: "uber-clone-a8050.firebaseapp.com",
    projectId: "uber-clone-a8050",
    storageBucket: "uber-clone-a8050.appspot.com",
    messagingSenderId: "370031665027",
    appId: "1:370031665027:web:98b1df3690bc1e5d2220b6",
    measurementId: "G-NPMHJ911ZE"
  };

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth()

export {app, provider, auth}