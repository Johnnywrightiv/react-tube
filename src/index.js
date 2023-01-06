import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_details'
import VideoList from './components/video_list'
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      videos: [],
      selectedVideo: null,
    };

    this.videoSearch = this.videoSearch.bind(this)
    this.currentlyActive = this.currentlyActive.bind(this);
  }

  currentlyActive(index) {
    this.setState({selectedVideo: this.state.videos[index]})
    // Quick attmempt at filtering sidebar results based on active video (removing from recommended vids)...
    // this.setState({videos: this.state.videos.map().filter(video => video != this.state.selectedVideo)});
  }


  // Passing (search) term to axios API request
  videoSearch(term) {
    // define base url
    const url = 'https://www.googleapis.com/youtube/v3/search';

    // define params object of url variables for API request
    const params = {
      part: 'snippet',
      key: API_KEY,
      q: term,
      type: 'video'
    };

    // >> UNCOMMENT LINES 45 - 54 TO USE YOUTUBE API SEARCH <<
    // use axios to RETURN A PROMISE based on API response   
    // axios.get(url, { params: params })
    //   .then(response => {
    //     this.setState({
    //       videos: response.data.items,
    //       selectedVideo: response.data.items[0]
    //     })
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });

    // >> UNCOMMENT LINES 58 - 69 TO USE DUMMY DATA JSON SEARCH <<
    // Alternatively, to avoid hitting the rate limit with API calls (and therefore being locked out from accessing data) we can add 'dummy data' from the API response to a file (./data.json) and request from that. REMEMBER TO HIDE API KEY IN data.json with
    axios.get('./data.json')
      // Access data returned from API
      .then(response => {
        // ...then call this.setState to update model props. (don't forget to bind this!)
        this.setState({
          videos: response.data.data.items,
          selectedVideo: response.data.data.items[0]
        })
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    return (
      <div className="container">
        <div className='row'>
          <img src="./cattube.jpg" className='col-4 offset-4' alt="" />
          <div className="col-8 offset-4 my-3"> <em>edit source code in index.js to enable 'normal' (i.e. non-cat) search </em> </div>
          <div className="col-8 offset-3 mb-3"><em>all search terms will return the same set of cat videos unless axios API request is uncommented</em></div>
          <SearchBar onSearchTermChange={this.videoSearch} />
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList videos={this.state.videos} currentlyActive={this.currentlyActive} />
        </div>
      </div>
    );
  }
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
