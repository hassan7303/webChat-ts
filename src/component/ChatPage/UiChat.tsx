import Header from "./Headers/HeaderChat";
import Main from "./main/mainChat";
import MenuChat from "./sideBar/menuChat";
import SearchAppBar from "./sideBar/searchAppBar";

import "./UiChat.css";
import { ReactElement } from "react";

interface SidebarProps {
  children: ReactElement;
}

function Sidebar(props: SidebarProps) {
  return <div>{props.children}</div>;
}

interface MyComponentProps {
  sidebar: ReactElement;
}

function UiChat(props: MyComponentProps) {
  return (
    <div className="container_chat_ui">
      <header className="container_header">
        <Header />
      </header>
      <main>
        <Main />
      </main>

      {props.sidebar}
      <Sidebar>
        <SearchAppBar />
        <MenuChat />
      </Sidebar>
    </div>
  );
}
// function UiChat(props: MyComponentProps) {
//   return (
//     <>
//       <div className="container_chat_ui">
//         <header className="container_header">
//           <Header />
//         </header>
//         <main>
//           <Main />
//         </main>
//         <Sidebar>
//           <SearchAppBar />
//           <MenuChat />
//         </Sidebar>
//       </div>
//     </>
//   );
// }
export default UiChat;
