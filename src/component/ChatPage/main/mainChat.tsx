import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SendIcon from "@mui/icons-material/Send";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import { useState, useRef } from "react";
import { any, number, string } from "prop-types";
import { Message } from "@mui/icons-material";
function Main() {
  interface setNewMessageTs {
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
    target: EventTarget;
    value: string;
  }
  interface setAllMessageTs {
    allMessage: string[];
    id: number;
    Message: string;
  }
  const inputFile = useRef<any>(null);
  const [allMessage, setAllMessage] = useState<setAllMessageTs[]>();
  const [newMessage, setNewMessage] = useState<number | string>();
  const onButtonClick = () => {
    inputFile.current.click();
  };
  let id = 0;
  const messageHandel = () => {
    setAllMessage([
      ...allMessage,
      {
        id: id++,
        message: newMessage,
      },
    ]);
  };
  return (
    <div className="bg_main">
      <div className="main_body" dir="rtl">
        <div className="container_main">
          {/* {allMessage.map((messageObj) => (
            <div className="container_message_send">
              <div className="message_send">{messageObj.message}</div>
            </div>
          ))} */}

          <div className="container_message_receive">
            <div className="message_receive">
              <p> سلام خوبم تو خوبی </p>
            </div>
          </div>
        </div>
        <footer>
          <Paper
            component="div"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              // width: 400,
              borderRadius: "36px",
              width: "42vw",
            }}
          >
            <input
              type="file"
              id="file"
              ref={inputFile}
              style={{ display: "none" }}
            />

            <IconButton
              sx={{ p: "10px", color: "white", transform: "rotate(45deg)" }}
              aria-label="menu"
              onClick={onButtonClick}
            >
              <AttachFileIcon />
            </IconButton>

            <InputBase
              sx={{ ml: 1, flex: 1, color: "white" }}
              placeholder="پیام"
              onChange={(event) => setNewMessage(event.target.value)}
            />

            <IconButton
              type="button"
              sx={{ p: "10px", color: "white" }}
              aria-label="search"
            >
              <InsertEmoticonIcon />
            </IconButton>
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton
              color="primary"
              sx={{ p: "10px", transform: "rotate(180deg)" }}
              aria-label="directions"
              onClick={messageHandel}
            >
              <SendIcon />
            </IconButton>
          </Paper>
        </footer>
      </div>
    </div>
  );
}
export default Main;
