import PortalLoader from "../../assets/PortalLoader.png";
import "../../main.css";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 bg-green-100 bg-opacity-50 flex justify-center items-center ">
      <img
        className="loader w-[50px] absolute"
        src={PortalLoader}
        alt="Loading..."
      />
    </div>
  );
};

export default Loader;
