import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { MdVisibility } from "react-icons/md";
import { MdVisibilityOff } from "react-icons/md";
import Input from "../input/Input";
import "./login.css";

const Login = () => {
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(!visible);
  };

  return (
    <form className="login">
      <Input type="email" text="Email" />
      <Input
        type={visible ? "text" : "password"}
        icon={visible ? <MdVisibility /> : <MdVisibilityOff />}
        text="Password"
        handleClick={handleClick}
      />
      <div className="login_btn">
        <button>login</button>
        <button className="btn-alt">
          sign in <FcGoogle />
        </button>
      </div>
    </form>
  );
};

export default Login;
