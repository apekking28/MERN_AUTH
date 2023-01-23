import Reset from "../../components/Reset/Reset";
import "./resetlayout.css";
import { useNavigate } from "react-router-dom";

const ResetLayout = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="authlayout">
      {/* logo */}
      <div className="authlayout_logo">
        <img src="../../assets/img/shuttle.svg" alt="logo" />
      </div>
      {/* form */}
      <Reset />
      {/* actions */}
      <p className="reset_p" onClick={handleClick}>
        login ?
      </p>
    </div>
  );
};

export default ResetLayout;
