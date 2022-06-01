import React from 'react'
//import Getdata from '../firebase/GetData'
import { useState,useEffect } from 'react'
import { projectFirestore } from '../firebase/config';
import { doc, onSnapshot, collection,query, orderBy } from "firebase/firestore";

export default function ImageList() {

    // Listening to realtime updates...
    const [data, setdata] = useState([])
    useEffect(() => {
        
        const q =query(collection(projectFirestore, "images"),orderBy("time","desc"))
        const unsub = onSnapshot(q, (snapshot) => {
            let books=[]
            snapshot.docs.forEach((doc) => {
                books.push({...doc.data(),id:doc.id})
            })
            setdata(books)
        });
    
      return () => {
          unsub();
      }
    }, [])
    

    return (
        <div>
            <p>This is image list</p>

            <div className="image-list">
                {data &&
                    data.map(record =>
                    (
                        <div className="pic" key={record.id}>
                            <img src={record.url} alt="error" />
                        </div>
                    )
                    )}
            </div>
        </div>
    )
}
