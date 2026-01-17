import React from "react";
import collage from "../assets/collage.MP4";

const VideoCollage = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-black">
      <div className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
        <video
          src={collage}
          autoPlay
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default VideoCollage;
