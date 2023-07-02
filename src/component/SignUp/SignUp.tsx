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
function SignUp() {
  //   const Navigate = useNavigate();

  //   password
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    console.log(typeof event);

    event.preventDefault();
  };
  const [password, setPassword] = useState<string>();
  const [password2, setPassword2] = useState<string>();
  const [email, setEmail] = useState<string>();
  // user Name
  const [userName, setUserName] = useState<string>();

  const sendUserNameAndPassword = async () => {
    const res = await axios.post("http://87.248.150.136:3020/user/register", {
      firstName: "hossein",
      email,
      userName,
      password,
    });
    console.log(res.data);
    // Navigate("/chatPage");
    console.log(userName);
    console.log(password);
    console.log(password2);
  };
  return (
    <div className="login">
      <div className="bg"></div>
      <div className="input_login" dir="ltr">
        {/* user Name */}
        <TextField
          onChange={(event) => setUserName(event.target.value)}
          id="input-with-icon-textField_UserName"
          label="نام کاربری خود را وارد کنید"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
        <TextField
          onChange={(event) => setEmail(event.target.value)}
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
        {/* password */}
        <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">
            رمز خود را وارد کنید
          </InputLabel>
          <Input
            id="standard-adornment-password"
            onChange={(event) => setPassword2(event.target.value)}
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
        <button
          className="btn btn-primary w-100 btn_signUp"
          onClick={sendUserNameAndPassword}
        >
          ثبت نام{" "}
        </button>
      </div>
    </div>
  );
}
export default SignUp;
