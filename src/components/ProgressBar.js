import React ,{useEffect } from 'react'
import UseStorage from '../firebase/UseStorage'

export default function ProgressBar({ file, setfile }) {
    
    const { progress, error, url } = UseStorage(file)
    
    useEffect(() => {
        if (url) {
            setfile(null)
        } 
    }, [url])
    
  return (
      <div className='Progress' style={{ width: progress + '%' }}></div>
  )
}
