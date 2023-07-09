import axios from "axios";
import { any, string } from "prop-types";
import { useParams } from "react-router-dom";
export function Gmail() {
  const { code } = useParams();
  async function sendTocen() {
    const res = await axios.get("", { code });
    console.log(res);
  }
  sendTocen();
  return (
    <>
      <div style={{ background: "black" }}></div>
    </>
  );
}
