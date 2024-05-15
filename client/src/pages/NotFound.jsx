import { useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex flex-col gap-2 items-center justify-center">
      <div className="text-3xl">Page Not Found</div>
      <div
        className="text-1xl hover:underline cursor-pointer flex flex-row items-center gap-2"
        onClick={() => navigate(-1)}
      >
        <FaArrowLeftLong />
        Go Back
      </div>
    </div>
  );
};

export default NotFound;
