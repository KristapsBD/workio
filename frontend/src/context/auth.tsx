import React, { useState, useEffect, useContext, createContext } from "react";

import firebase, { firestore } from "@/firebase";

type User = {
  id: string;
  displayName: string;
  avatarUrl: string;
} | null;

type ContextState = { loading: boolean; user: User };

const FirebaseAuthContext = createContext<ContextState | undefined>(undefined);

function FirebaseAuthProvider({ children }) {
  const [user, setUser] = useState<User>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const value = { loading, user };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(async (authUser) => {
      if (!authUser) {
        setUser(null);
        setLoading(false);
        return;
      }

      const doc = await firestore.collection("users").doc(authUser.uid).get();

      if (!doc.exists) {
        doc.ref.set({
          avatarUrl: authUser.photoURL,
          displayName: authUser.displayName,
        });
      }

      const data = doc.data();
      const user = {
        id: authUser.uid,
        displayName: data.displayName || authUser.displayName,
        avatarUrl: data.photoURL || authUser.photoURL,
      };

      setUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return (
    <FirebaseAuthContext.Provider value={value}>
      {children}
    </FirebaseAuthContext.Provider>
  );
}

export function useFirebaseAuth() {
  const context = useContext(FirebaseAuthContext);

  if (!context) {
    throw new Error(
      "useFirebaseAuth must be used within a FirebaseAuthProvider"
    );
  }

  return context;
}

export default FirebaseAuthProvider;
