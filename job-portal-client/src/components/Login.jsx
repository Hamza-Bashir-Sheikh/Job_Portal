// import React from 'react'
// import { GoogleAuthProvider } from "firebase/auth";
// import app from '../firebase/firebase.config';

// import { getAuth } from "firebase/auth";

// const Login = () => {
//   const auth = getAuth();
//   const googleProvider = new GoogleAuthProvider();
//   const handleLogin = () => {
//     signInWithPopup(auth, googleProvider).then((result) => {

//       const user = result.user;

//     }).catch((error) => {
//       const errorMessage = error.message;
//       // The email of the user's account used.
//       const email = error.customData.email;
//       // The AuthCredential type that was used.
//       const credential = GoogleAuthProvider.credentialFromError(error);
//       // ...
//     });
//   }
//   return (
//     <div className='h-screen w-full flex item-center justify-center'>
//       <button className='bg-blue px-8 py-2 text-white' onClick={handleLogin}>Login</button>
//     </div>
//   )
// }

// export default Login

import React from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config";

const Login = () => {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  const handleLogin = () => {
    console.log("Login button clicked");
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log("User logged in:", user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        const email = error.customData?.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.error("Error during sign in:", errorMessage, email, credential);
      });
  };

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <button
        className="bg-blue px-8 py-2 text-white"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
