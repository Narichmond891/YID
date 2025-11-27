import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db, isConfigured } from '../firebase/config';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  // If Firebase is not configured, skip auth and just show UI
  if (!isConfigured) {
    useEffect(() => {
      setLoading(false);
    }, []);

    const value = {
      currentUser: null,
      userProfile: null,
      signup: () => Promise.reject(new Error('Firebase not configured')),
      login: () => Promise.reject(new Error('Firebase not configured')),
      signInWithGoogle: () => Promise.reject(new Error('Firebase not configured')),
      logout: () => Promise.resolve(),
      updateUserProfile: () => Promise.reject(new Error('Firebase not configured'))
    };

    return (
      <AuthContext.Provider value={value}>
        {!loading && children}
      </AuthContext.Provider>
    );
  }

  // Sign up with email and password
  async function signup(email, password, displayName) {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Update display name
    await updateProfile(user, { displayName });

    // Create user profile in Firestore
    await setDoc(doc(db, 'users', user.uid), {
      uid: user.uid,
      email: user.email,
      displayName: displayName,
      pseudonym: null,
      bio: '',
      languages: [],
      regionsOfInterest: [],
      photoURL: null,
      role: 'user',
      badges: [],
      createdAt: new Date(),
      contributionCount: 0,
      followingCount: 0,
      followerCount: 0
    });

    return user;
  }

  // Sign in with email and password
  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  // Sign in with Google
  async function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    const userCredential = await signInWithPopup(auth, provider);
    const user = userCredential.user;

    // Check if user profile exists, if not create it
    const userDoc = await getDoc(doc(db, 'users', user.uid));
    if (!userDoc.exists()) {
      await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        pseudonym: null,
        bio: '',
        languages: [],
        regionsOfInterest: [],
        photoURL: user.photoURL,
        role: 'user',
        badges: [],
        createdAt: new Date(),
        contributionCount: 0,
        followingCount: 0,
        followerCount: 0
      });
    }

    return user;
  }

  // Logout
  function logout() {
    return signOut(auth);
  }

  // Update user profile
  async function updateUserProfile(updates) {
    if (!currentUser) return;

    await setDoc(doc(db, 'users', currentUser.uid), updates, { merge: true });
    setUserProfile({ ...userProfile, ...updates });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);

      if (user) {
        // Fetch user profile from Firestore
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        if (userDoc.exists()) {
          setUserProfile(userDoc.data());
        }
      } else {
        setUserProfile(null);
      }

      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    userProfile,
    signup,
    login,
    signInWithGoogle,
    logout,
    updateUserProfile
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
