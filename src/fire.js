import fire from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCUqFLo5KX2dSiH27-mHwBCvpVG9yFfe0w",
  authDomain: "react-fire-auth-bf2f6.firebaseapp.com",
  projectId: "react-fire-auth-bf2f6",
  storageBucket: "react-fire-auth-bf2f6.appspot.com",
  messagingSenderId: "735756672456",
  appId: "1:735756672456:web:1c0eec6e7250b6589934fd",
};

export default fire.initializeApp(firebaseConfig);
