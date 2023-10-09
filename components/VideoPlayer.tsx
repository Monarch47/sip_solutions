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
      className="absolute w-full h-full object-cover top-0 left-0 z-[-1]"
    ></video>
  );
};

export default VideoPlayer;
