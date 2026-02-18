import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_VIDEO_CATEGORY_API } from "../utils/constant";

export const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const videoId = searchParams.get("v");

  const videoCategories = async () => {
    const response = await fetch(YOUTUBE_VIDEO_CATEGORY_API);
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    dispatch(closeMenu());
    videoCategories();
  }, []);

  return (
    <>
      <iframe
        className="p-5"
        width="1200"
        height="700"
        src={`https://www.youtube.com/embed/${videoId} `}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </>
  );
};
