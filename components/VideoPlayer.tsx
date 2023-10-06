import React from "react";

type Props = {
  source: string;
};

const VideoPlayer = (props: Props) => {
  return (
    <video
      src={props.source}
      autoPlay
      muted
      loop
      preload=""
      className="w-full min-h-screen md:h-full"
    ></video>
  );
};

export default VideoPlayer;
