import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SearchBar from './components/search_bar';
import reportWebVitals from './reportWebVitals';
const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
const axios = require('axios');

const App = () => {
  // Passing (search) term to axios API request
  const videoSearch = term => {
    // define base url
    const url = 'https://www.googleapis.com/youtube/v3/search';

    // define params object of url variables for API request
    const params = {
      part: 'snippet',
      key: API_KEY,
      q: term,
      type: 'video',
    };

    // use axios to RETURN A PROMISE based on API response
    axios.get(url, { params: params })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <SearchBar onSearchTermChange={videoSearch} />
    </div>
  )

};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
