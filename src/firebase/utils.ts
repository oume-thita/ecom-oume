import { initializeApp } from "firebase/app"
import { getFirestore, getDoc, doc, setDoc} from "firebase/firestore"
import { getAuth, GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { firebaseConfig } from "./config"

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const firestore = getFirestore(app)

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" })
export const signInWithGoogle = () => signInWithRedirect(auth, provider)

export const handleUserProfile = async (userAuth:any) => {
    if (!userAuth) return
    const {uid} = userAuth

    const userRef = doc(firestore, `users/${uid}`)
    console.log(userRef)
    const snapshot = await getDoc(userRef)
    console.log("Document data:", snapshot.data())
    console.log(snapshot)

    if(!snapshot.exists()) {
        const { displayName, email} = userAuth
        const timestamp = new Date()
        try {
            console.log("userauth",{userAuth})
            await setDoc(userRef, {displayName, email, createDate:timestamp})
        }   catch(err) {
            console.log(err)
        }
    }
    return userRef;
}