import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { projectFirestore, projectStorage } from '../firebase/config';
import { doc, getDoc, deleteDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { ref, deleteObject } from "firebase/storage";


export default function Fullview() {

  const { id } = useParams()
  console.log(id)
  let navigate = useNavigate();

  const [photo, setphoto] = useState(null)
  const [Loading, setLoading] = useState(true)
  useEffect(() => {

    async function getdata() {
      const docRef = doc(projectFirestore, "images", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        //console.log("Document data:", docSnap.data());
        setphoto(docSnap.data())
        //console.log(photo.url)
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }

    getdata()

  }, [])

  async function handledelete() {

    setLoading(false)
    try {
      await deleteDoc(doc(projectFirestore, "images", id));

      const desertRef = ref(projectStorage, `${photo.name}`);
      await deleteObject(desertRef);
      console.log("deleted")
    } catch (error) {
      console.log(error)
    }
    setLoading(true)
    navigate("/")
  }



  return (
    <>
      {Loading && 
      <img src="/images/trash.svg" alt="add" className='trash' style={{ width: 35, height: 35, cursor: 'pointer' }}
      onClick={handledelete} /> }
      <div className='fullview'>
        {photo && <img src={photo.url} alt="pic" />}
      </div>
    </>
  )
}
