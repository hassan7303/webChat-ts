import axios from "axios";
import { useParams } from "react-router-dom";
export function Gmail() {
  const { code } = useParams();
  async function sendToken() {
    const res = await axios.get(`https://?code=${code}`);
    console.log(res);
    localStorage.setItem("code", code);
  }
  sendToken();
  return (
    <>
      <div style={{ background: "black" }}></div>
    </>
  );
}
