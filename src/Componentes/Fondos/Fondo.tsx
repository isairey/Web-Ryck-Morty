import fondo from "../../assets/Fondo.mp4";

const VideoFondo: React.FC = () => {
  return (
    <div className="w-screen h-screen absolute">
      <video autoPlay loop muted className="w-full h-full object-cover">
        <source src={fondo} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoFondo;
