import { useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import UploadForm from './UploadForm'
import ImageList from './ImageList'

function Home() {

    let navigate = useNavigate();

    useEffect(() => {
        
        let authToken = sessionStorage.getItem(process.env.REACT_APP_KEY)
        if (!authToken) {
            console.log("Not Auth return")
            navigate('/')
        }
        console.log("Auth")
    }, [])


  return (
      <div>
          <UploadForm />
          <ImageList />
    </div>
  )
}

export default Home