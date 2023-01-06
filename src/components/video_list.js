import VideoListItem from './video_list_item';

const VideoList = (props) => {
  const videoItem = props.videos.map((video, index) => {
    return (
        <VideoListItem key={index} index={index} video={video} currentlyActive={props.currentlyActive} />
    );
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItem}
    </ul>
  );
};

export default VideoList;