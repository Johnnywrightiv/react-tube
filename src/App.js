import React, {useState, useEffect} from 'react';
import './App.css'
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_details'
import VideoList from './components/video_list'
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';

import axios from 'axios';
const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

function App() {
  // call useEffect hook to change title of a create react app page on component mount (and when certian props or vars change if desired )
  useEffect(() => {
    document.title = "CatTube";
  }, []);

  // call useState hook to define stateful props and methods to update those props (see [videos, setVideos] for example)
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videoSearch = (term) => {
    const url = 'https://www.googleapis.com/youtube/v3/search';

    const params = {
      part: 'snippet',
      key: API_KEY,
      q: term,
      type: 'video'
    };
    
    // Un-comment to use API search
    // axios.get(url, { params: params })
    //   .then(response => {
    //     setVideos(response.data.items)
    //     setSelectedVideo(response.data.items[0])
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });

    // Un-comment to use JSON dummy data search (Cats!)
    axios.get('./data.json')
      .then(response => {
        setVideos(response.data.data.items)
        setSelectedVideo(response.data.data.items[0])
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className="container">
      <div className='row'>
        <img src="./cattube.jpg" className='col-4 offset-4' alt="" />
        <div className="col-8 offset-4 my-3"> <em>edit source code in index.js to enable 'normal' API (i.e. non-cat) search </em> </div>
        <div className="col-8 offset-3 mb-3"><em>all search terms will return the same set of cat videos unless axios API request is uncommented</em></div>
        <SearchBar videoSearch={videoSearch} />
        <VideoDetail video={selectedVideo} />
        <VideoList videos={videos} onVideoSelect={selectedVideo => setSelectedVideo(selectedVideo)} />
      </div>
  </div>
  );
}

export default App;