import { createContext, useEffect, useState } from "react";

import { auth, firebase } from '../services/firebase';

import { useRouter } from 'next/router';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState();
  const [loadingUser, setLoadingUser] = useState(true);

  const router = useRouter();

  async function signInWithGoogle() {
    setLoadingUser(true);

    const provider = new firebase.auth.GoogleAuthProvider();

    const result = await auth.signInWithPopup(provider);

    if (result.user) {
      const { displayName, photoURL, uid } = result.user;

      if (!displayName || !photoURL) {
        throw new Error('Missing information from Google Account.');
      }

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL
      });

      setLoadingUser(false);

      router.push('/');
    }
  }

  async function createUserWithEmail(email, password, showError) {
    try {
      const result = await auth.createUserWithEmailAndPassword(email, password);

      const { uid } = result.user;

      setUser({
        id: uid,
      });

      router.push('/');

    } catch (error) {
      showError(error.message);
    }
  }

  async function signInWithEmail(email, password, showError) {
    try {
      const result = await auth.signInWithEmailAndPassword(email, password);

      const { uid } = result.user;

      setUser({
        id: uid,
      });

      router.push('/');

    } catch (error) {
      showError(error.message);
    }
  }

  async function logout() {
    await auth.signOut();

    router.push('/login');
  }

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setLoadingUser(true);

      if (user) {
        const { displayName, photoURL, uid } = user;

        // if (!displayName || !photoURL) {
        //   throw new Error('Missing information from Google Account.');
        // }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL
        });
      }

      setLoadingUser(false);
    });

    return () => {
      unsubscribe();
    }
  }, []);

  return (
    <AuthContext.Provider value={{
      signInWithGoogle,
      user,
      loadingUser,
      logout,
      createUserWithEmail,
      signInWithEmail,
    }}>
      {children}
    </AuthContext.Provider>
  );
}