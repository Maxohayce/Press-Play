import firebase from "firebase/app";
import FirebaseConfig from "./firebase.config";
import "firebase/auth";
import "firebase/firestore";
import { setAuthedUser } from "../authedUser";

firebase.initializeApp(FirebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// export const fetchAllUsers = async => {
//   try {
//     const usersRef = firestore.collection('users');
//     console.log(`USERS: ${usersRef}`);
//     // return usersRef.doc;
//   } catch (error) {
//     console.error("Error fetching users", error);
//   }
// };

// const getUserDocument = async uid => {
//     if (!uid) return null;
//     try {
//       const userDocument = await firestore.doc(`users/${uid}`).get();
//       return {
//         uid,
//         ...userDocument.data()
//       };
//     } catch (error) {
//       console.error("Error fetching user", error);
//     }
//   };

export const createUserWithEmailAndPasswordHandler = async (authData) => {
  // event.preventDefault();

  const { email, username, password } = authData;

  const usersRef = firestore.collection("users");

  usersRef
    .where("username", "==", username)
    .get()
    .then((snapshot) => {
      if (snapshot.empty) {
        return auth.createUserWithEmailAndPassword(email, password);
      } else {
        throw new Error("username already taken");
      }
    })
    .then((createdUser) => {
      console.log(createdUser);
      //Create the user doc in the users collection
      firestore
        .collection("users")
        .doc(createdUser.user.uid)
        .set({
          userId: createdUser.user.uid,
          email: email,
          username: username,
        })
        .then((res) => {
          // if (createdUser) Auth.setLoggedIn(true);
        });
    })
    .catch((err) => {
      console.log("Error: ", err);
    });
};

export const signInWithEmailAndPasswordHandler = async (authData) => {
  // event.preventDefault();

  const { email, username, password } = authData;

  auth
    .signInWithEmailAndPassword(email, password)
    .then((res) => {
      // if (res.user) Auth.setLoggedIn(true);
    })
    .catch((e) => {
      console.log(e.message);
    });
};

export const checkIfAuthed = () =>
  auth.onAuthStateChanged((user) => user && setAuthedUser(user));
