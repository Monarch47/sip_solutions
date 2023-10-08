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
      className="absolute w-auto  
      min-w-full min-h-full max-w-full"
    ></video>
  );
};

export default VideoPlayer;
