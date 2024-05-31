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
  // call useEffect hook to change title on component mount
  useEffect(() => {
    document.title = "CatTube";
  }, []);

  // call useState hook to define stateful props and methods to update those props
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
    
    axios.get(url, { params: params })
      .then(response => {
        setVideos(response.data.items)
        setSelectedVideo(response.data.items[0])
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className="container">
      <div className='row'>
        <img src="./cattube.jpg" className='col-4 offset-4' alt="" />
        <div className="text-center my-3"> it's like YouTube, but with a cat logo</div>
        <SearchBar videoSearch={videoSearch} />
        <VideoDetail video={selectedVideo} />
        <VideoList videos={videos} onVideoSelect={selectedVideo => setSelectedVideo(selectedVideo)} />
      </div>
  </div>
  );
}

export default App;