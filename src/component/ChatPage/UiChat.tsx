import Header from "./Headers/HeaderChat";
import Main from "./main/mainChat";
import MenuChat from "./sideBar/menuChat";
import SearchAppBar from "./sideBar/searchAppBar";
function UiChat() {
  return (
    <>
      <header className="container_header">
        <Header />
      </header>
      <main>
        <Main />
      </main>
      <menu>
        <p>hassan</p>
      </menu>
      <sidebar>
        <SearchAppBar />
        <MenuChat />
      </sidebar>
    </>
  );
}
export default UiChat;
