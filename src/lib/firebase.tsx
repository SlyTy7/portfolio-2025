import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const projectsFirebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const blogFirebaseConfig = {
    apiKey: import.meta.env.VITE_BLOG_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_BLOG_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_BLOG_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_BLOG_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_BLOG_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_BLOG_FIREBASE_APP_ID,
}; 

const projectsApp =
  getApps().find((app) => app.name === "projects") ||
  initializeApp(projectsFirebaseConfig, "projects");

const blogApp =
  getApps().find((app) => app.name === "blog") ||
  initializeApp(blogFirebaseConfig, "blog");

const db = getFirestore(projectsApp);
const blogDb = getFirestore(blogApp);

export { db, blogDb };
