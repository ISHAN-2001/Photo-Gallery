import { projectFirestore } from "./config";
import { collection, addDoc } from "firebase/firestore";

const UseFireStore = async (url,filename) => {
    try {
        const docRef = await addDoc(collection(projectFirestore, "images"), {
            name:filename, 
            url: url,
            time:Date.now()
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}
export default UseFireStore;
