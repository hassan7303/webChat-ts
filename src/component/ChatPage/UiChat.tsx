import Header from "./Headers/HeaderChat";
import Main from "./main/mainChat";
import MenuChat from "./sideBar/menuChat";
import SearchAppBar from "./sideBar/searchAppBar";

import "./UiChat.css";
function UiChat() {
  return (
    <>
      <header className="container_header">
        <Header />
        <SearchAppBar />
      </header>
      <main>
        <Main />
      </main>
      <menu>
        <MenuChat />
      </menu>
    </>
  );
}
export default UiChat;
