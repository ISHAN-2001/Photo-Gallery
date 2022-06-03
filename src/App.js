import './App.css';
import UploadForm from './components/UploadForm'
import ImageList from './components/ImageList';

function App() {

  return (
    <div className="App">
      <h1 className="heading">My Photo Gallery</h1>
      <UploadForm  />
      <ImageList />
    </div>
  );
}

export default App;
