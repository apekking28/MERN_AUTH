import "./activetelayout.css";
import { useNavigate } from "react-router-dom";

const ActivateLayout = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="activate">
      <p>
        ready to login ? 👉🏻 <span onClick={handleClick}>Here</span>
      </p>
    </div>
  );
};

export default ActivateLayout;
