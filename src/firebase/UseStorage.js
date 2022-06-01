import { useState, useEffect } from "react";
import { projectStorage } from "./config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"

const UseStorage = (file) => {
    const [progress, setprogress] = useState(0)
    const [error, seterror] = useState(null)
    const [url, seturl] = useState(null)
    const filename = Date.now();

    useEffect(() => {

        const storageRef = ref(projectStorage, `${filename}`);
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
                }
                );
            }
        );

    }, [file])

    return { progress, error, url,filename }
}

export default UseStorage;