import React from 'react';

const VideoListItem = ({ video, onVideoSelect}) => {
  const imageURL = video.snippet.thumbnails.medium.url;

  return (
    <li>
      <div onClick={() => onVideoSelect(video)} role={'button'} className={"border border-1 border-dark text-center m-1 p-1"}>
        <div><b>{video.snippet.title}</b></div>
        <img src={imageURL} className={"sidebar-video"} alt="sidebar video thumbnail" />
      </div>
  </li>
  );
};

export default VideoListItem;