import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { getFirestore, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";


const firebaseConfig = {
  apiKey: "AIzaSyCRSvq_NOfPeg3JgmFhGCPT7_abpT1gCRs",
  authDomain: "chat-app-gs-54113.firebaseapp.com",
  projectId: "chat-app-gs-54113",
  storageBucket: "chat-app-gs-54113.firebasestorage.app",
  messagingSenderId: "959466756780",
  appId: "1:959466756780:web:2bac65987af1d650d49d09",
};

//Initialize Firebase 
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (username,email,password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth,email,password);
    const user = res.user;
    //to save this data for firestone database 
    await setDoc(doc(db, "users",user.uid),{
      id:user.uid,
      username:username.toLowerCase(),
      email,
      name:"",
      avatar:"",
      bio:"Hey, There i am using chat app",
      lastSeen:Date.now()
    })
    await setDoc(doc(db, "chats", user.id), {
      chatData:[]
    })
  } catch (error) {
    console.error(error)
    toast.error(error.code)
  }
}

export { signup };
