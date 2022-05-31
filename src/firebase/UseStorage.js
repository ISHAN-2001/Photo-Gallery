import { useState, useEffect } from "react";
import { projectStorage, projectFirestore } from "./config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import { collection, addDoc } from "firebase/firestore";
import { async } from "@firebase/util";

const UseStorage = (file) => {
    const [progress, setprogress] = useState(0)
    const [error, seterror] = useState(null)
    const [url, seturl] = useState(null)

    useEffect(() => {

        const storageRef = ref(projectStorage, `${Date.now()}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            'state_changed',
            (snapshot) => {
                let percentage =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setprogress(percentage);
                //console.log(progress)
            },
            (err) => {
                seterror(err);
                //console.log(error)
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    seturl(url);

                    async function addData(url) {
                        try {
                            const docRef = await addDoc(collection(projectFirestore, "images"), {
                                url: url,
                                time:Date.now()
                            });
                            console.log("Document written with ID: ", docRef.id);
                        } catch (e) {
                            console.error("Error adding document: ", e);
                        }
                    }
                    addData(url);
                }
                );
            }
        );

    }, [file])

    return { progress, error, url }
}

export default UseStorage;