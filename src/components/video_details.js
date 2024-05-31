import React from 'react';
import userIcon from '../1144760.png'

const VideoDetails = ({ video }) => {
  if (!video) {
    return <div className="text-center" >Enter a term to search videos...</div>
  }

  const url = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="video-container embed-responsive embed-responsive-16by9">
        <iframe src={url} className="current-video embed-responsive-item" />
      </div>
      <div className="details">
        <div><b>{video.snippet.title}</b></div>
        <br />
        <div><b>Descripton: </b>{video.snippet.description}</div>
      </div>
      <div className="comments ">
        <div className='mb-3'><b>Comments:</b></div>
        <div className="card mb-3">
  <div className="card-body">
    <img src={userIcon} style={{ width: '32px', height: '32px', marginRight: '10px' }} alt="users photo" />
    <span>Welcome to the comments section! No one really wants to be here.</span>
  </div>
</div>

<div className="card mb-3">
  <div className="card-body">
    <img src={userIcon} style={{ width: '32px', height: '32px', marginRight: '10px' }} alt="users photo" />
    <span>Wow, I really love {video.snippet.title}</span>
  </div>
</div>

<div className="card mb-3">
  <div className="card-body">
    <img src={userIcon} style={{ width: '32px', height: '32px', marginRight: '10px' }} alt="users photo" />
    <span>This comment is unrelated...</span>
  </div>
</div>

<div className="card mb-3">
  <div className="card-body">
    <img src={userIcon} style={{ width: '32px', height: '32px', marginRight: '10px' }} alt="users photo" />
    <span>Wow, I really hate {video.snippet.title}</span>
  </div>
</div>

      </div>

    </div>
  )
};

export default VideoDetails;