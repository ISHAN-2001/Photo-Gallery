import { projectFirestore, projectStorage } from '../firebase/config';
import { ref, deleteObject } from "firebase/storage";
import { deleteDoc,doc } from 'firebase/firestore'
import { useState } from 'react';


const UseDeleteImg = async (photo) => {
    const [success, setsuccess] = useState(null)

    try {
        await deleteDoc(doc(projectFirestore, "images", photo.id));

        const desertRef = ref(projectStorage, `images/${photo.name}`);
        await deleteObject(desertRef);

        setsuccess(true)
        console.log("deleted")
    } catch (error) {
        console.log(error);
        setsuccess(false)
    }
    


    return success;
}
export default UseDeleteImg;

// async function deleteImg() {

//     await deleteDoc(doc(projectFirestore, "images", id));

//     const desertRef = ref(projectStorage, `images/${photo.name}`);

//     deleteObject(desertRef).then(() => {
//       // File deleted successfully
//       console.log("file deleted")

//     }).catch((error) => {
//       // Uh-oh, an error occurred!
//       console.log(error);
//     });
//   }