import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import {
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { AccountCircle } from "@mui/icons-material";
import TextField from "@mui/material/TextField";
import axios from "axios";

function Login() {
  // const navigate = useNavigate();

  //   password
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const [password, setPassword] = useState<string>();

  // user Name
  const [userName, setUserName] = useState<string>();
  const sendUserNameAndPassword = async () => {
    // navigate("/chatPage");
    const res = await axios.post("http://87.248.150.136:3020/user/register", {
      userName,
      password,
    });
    console.log(res);
    console.log(userName);
    console.log(password);
  };
  return (
    <div className="login">
      <div className="bg"></div>
      <div className="input_login" dir="ltr">
        {/* user Name */}
        <TextField
          onChange={(event) => setUserName(event.target.value)}
          id="input-with-icon-textField_UserName"
          label="ایمیل خپود را وارد کنید"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
        {/* password */}
        <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">
            رمز خود را وارد کنید
          </InputLabel>
          <Input
            id="standard-adornment-password"
            onChange={(event) => setPassword(event.target.value)}
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <div className="btns">
          <button
            className="btn btn-primary"
            // onClick={() => navigate("/signup")}
          >
            ثبت نام
          </button>

          <button
            className="btn btn-primary btn_login"
            onClick={sendUserNameAndPassword}
          >
            ورود
          </button>
        </div>
      </div>
    </div>
  );
}
export default Login;
