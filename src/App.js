import './App.css';
import UploadForm from './components/UploadForm'
import ImageList from './components/ImageList';
import Fullview from './components/Fullview';
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import NotFound from './components/NotFound';

function App() {

  return (

    <Router>
      <div className="App">
        <Link to ="/" ><h1 className="heading">My Photo Gallery</h1></Link>
        <Routes>

          {/* react router v5 code */}
          {/* <Route exact path="/">
            <UploadForm />
            <ImageList />
          </Route>

          <Route path="/images/:id">
            <Fullview />
          </Route> */}

          {/* React router v6 code */}
          <Route path="/" element={<> <UploadForm /> <ImageList /> </>} />
          <Route path="/image/:id" element={< Fullview />} />
          <Route path="*" element={ NotFound }/>
          
          

        </Routes>
      </div>
    </Router>
  );
}

export default App;
