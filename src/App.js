import React from "react";
import Application from "./components/application";


import FirebaseConfig from './components/firebase/firebase.config';

import { useAuthState } from 'react-firebase-hooks/auth';

import { useCollectionData } from 'react-firebase-hooks/firestore';

import UserProvider from "./components/providers/userProvider.jsx";


const App = () => {

  // const [user] = useAuthState(Auth);

  return (
    <UserProvider>
      <Application />
    </UserProvider>
  
);}

export default App;
