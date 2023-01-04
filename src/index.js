import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SearchBar from './components/search_bar';
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

    this.videoSearch = this.videoSearch.bind(this);
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

    // use axios to RETURN A PROMISE based on API response
    
    // Alternatively, to avoid hitting the rate limit with API calls (and therefore being locked out from accessing data) we can add 'dummy data' from the API response to a file (./public/data.json) and request from that
    
    // axios.get('./data.json')
    axios.get(url, { params: params })
      // Access data returned from API
      .then(response => {
        console.log(response);
        // ...then call this.setState to update model props. (don't forget to bind this!)
        this.setState({
          videos: response.data.items,
          selectedVideo: response.data.items[0]
        })
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    return (
      <div>
        <SearchBar onSearchTermChange={this.videoSearch} />
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
