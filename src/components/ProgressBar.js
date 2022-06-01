import React ,{useEffect } from 'react'
import UseStorage from '../firebase/UseStorage'
import UseFireStore from '../firebase/UseFirestore'

export default function ProgressBar({ file, setfile }) {
    
    const { progress, error, url,filename } = UseStorage(file)
    
    useEffect(() => {
        if (url) {
            setfile(null)
            UseFireStore(url, filename)
        } 
    }, [url,setfile])
    
  return (
      <div className='Progress' style={{ width: progress + '%' }}></div>
  )
}
