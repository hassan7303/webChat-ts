import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SendIcon from "@mui/icons-material/Send";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import { useState, useRef } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

function Main() {
  interface Message {
    id: string;
    message: string;
    date: string;
    dateTime: string;
  }
  const options: string[] = ["پاسخ", "کپی", "پین", "فروارد", "حذف"];

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [currentMessageId, setCurrentMessageId] = useState<string>("");
  const open = Boolean(anchorEl);
  const handleClick = (
    event: React.MouseEvent<HTMLSpanElement>,
    messageId: string
  ) => {
    setAnchorEl(event.currentTarget);
    setCurrentMessageId(messageId);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const fullDate = new Date();

  const typeDate: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  };
  const persianDate = fullDate.toLocaleDateString("fa-IR", typeDate);
  const hours = fullDate.getHours().toString().padStart(2, "0");
  const minutes = fullDate.getMinutes().toString().padStart(2, "0");

  const inputFile = useRef<HTMLInputElement>(null);
  const [allMessage, setAllMessage] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState<string>("");

  const onButtonClick = () => {
    if (inputFile.current) {
      inputFile.current.click();
    }
  };

  const messageHandel = () => {
    setAllMessage([
      ...allMessage,
      {
        id: "qwertyu" + Math.floor(Math.random() * 10000000) + 1,
        message: newMessage,
        date: persianDate,
        dateTime: hours + ":" + minutes,
      },
    ]);
  };

  const deleteMessage = (id: string) => {
    const updateMessage = allMessage.filter((message) => message.id !== id);
    setAllMessage(updateMessage);
  };

  const handleClickOptions = (option: string, messageId: string) => {
    switch (option) {
      case "حذف":
        deleteMessage(messageId);
        break;
      case "فروارد":
        console.log("فروارد");
        break;
      case "پین":
        console.log("پین");
        break;
      case "پاسخ":
        console.log("پاسخ");
        break;
      default:
        console.log("کپی");
    }
    setAnchorEl(null);
  };

  return (
    <div className="bg_main">
      <div className="main_body" dir="rtl">
        <div className="container_main">
          {allMessage.map((messageObj) => (
            <div className="container_message_send" key={messageObj.id}>
              <div className="message_send">
                <div>
                  <span onClick={(event) => handleClick(event, messageObj.id)}>
                    {messageObj.message}
                  </span>
                  <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                    {options.map((option) => (
                      <MenuItem
                        key={option}
                        selected={option === "Pyxis"}
                        onClick={() =>
                          handleClickOptions(option, currentMessageId)
                        }
                      >
                        {option}
                      </MenuItem>
                    ))}
                  </Menu>
                </div>
              </div>
            </div>
          ))}

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
