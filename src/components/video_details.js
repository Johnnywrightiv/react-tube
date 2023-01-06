const VideoDetail = props => {
  if (!props.video) {
    return <div className="text-center" >Loading...</div>
  }

  console.log(props);

  const url = `https://www.youtube.com/embed/${props.video.id.videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="video-container embed-responsive embed-responsive-16by9">
        <iframe src={url} className="current-video embed-responsive-item" />
      </div>
      <div className="details">
        <div><b>{props.video.snippet.title}</b></div>
        <br />
        <div><b>Video Descripton: </b>{props.video.snippet.description}</div>
      </div>
      <div className="comments">
        <div> <b>Comments:</b> </div>
        <div className="comment">Welcome to the infamous comments section, you interwebs degenerate you.</div>
      </div>
    </div>
  );
};

export default VideoDetail;