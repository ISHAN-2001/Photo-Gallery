import React from 'react'
//import Getdata from '../firebase/GetData'
import { useState,useEffect } from 'react'
import { projectFirestore } from '../firebase/config';
import { onSnapshot, collection, query, orderBy } from "firebase/firestore";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


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
            
            <div className="image-list">
                {data &&
                    data.map(record =>
                    (
                        <motion.div className="pic" key={record.id} layout>
                            <Link to={`/image/`+record.id}>
                                <img src={record.url} alt="error" />
                            </Link>
                        </motion.div>
                    )
                    )}
            </div>
        </div>
    )
}
