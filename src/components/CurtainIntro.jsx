import { useRef } from "react";
import musicFile from "../assets/music.mp3";

const CurtainIntro = ({ onOpen }) => {
  const audioRef = useRef(null);

  const handleOpen = () => {
    audioRef.current.play(); // start music on click
    onOpen();
  };

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <audio ref={audioRef} src={musicFile} loop />

      <button
        onClick={handleOpen}
        className="px-10 py-4 bg-white text-red-600 font-bold rounded-full animate-pulse"
      >
        🎭 Open Curtains 🎵
      </button>
    </div>
  );
};

export default CurtainIntro;
