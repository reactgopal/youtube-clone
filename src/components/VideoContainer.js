import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constant";
import VideoCard, { AdsVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  const videoList = async () => {
    const response = await fetch(YOUTUBE_VIDEO_API);
    const json = await response.json();
    setVideos(json.items);
    // console.log(json.items);
  };
  useEffect(() => {
    videoList();
  }, []);
  return (
    <div className="flex flex-wrap">
      {videos[0] && <AdsVideoCard info={videos[0]} />}
      {videos.map((video) => {
        return (
          <Link to={`/watch?v=${video.id}`} key={video.id}>
            <VideoCard info={video} key={video.id} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
