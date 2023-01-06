const VideoListItem = ({video, currentlyActive, index}) => {
  const handleNewVideoClick = () => {
    currentlyActive(index);
  }

  return (
    <li>
      <div onClick={handleNewVideoClick} role={'button'} className={"border border-1 border-dark text-center m-1 p-1"}>
        <div><b>{video.snippet.title}</b></div>
        <img src={video.snippet.thumbnails.medium.url} className={"sidebar-video"} alt="sidebar video thumbnail" />
      </div>
    </li>
  )
}

export default VideoListItem;