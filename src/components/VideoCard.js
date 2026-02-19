const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { title, thumbnails, channelTitle } = snippet;

  return (
    <div className="m-2 p-2 w-64  shadow-lg rounded-lg bg-gray-50">
      <img className="rounded-lg" src={thumbnails?.medium.url} alt={title} />
      <h3 className="font-bold mt-2">{title}</h3>
      <p>{channelTitle}</p>
      <p>{statistics?.viewCount} views</p>
    </div>
  );
};
export const AdsVideoCard = ({ info }) => {
  return (
    <div className="border border-red-500 p-2 m-2">
      <span className="absolute bg-gray-600 px-2 m-2 text-white rounded-lg ">
        ads
      </span>
      <VideoCard info={info} />
    </div>
  );
};
export default VideoCard;
