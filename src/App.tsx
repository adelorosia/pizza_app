import { Outlet } from "react-router-dom";
import MainMenu from "./components/MainMenu";

const App = () => {
  return (
    <div className="wrapper bg-FOREGROUND min-h-screen">
      <header className=" bg-BACKGROUND py-2 text-FOREGROUND">
      
        <MainMenu />
      </header>
      <main className="w-full min-h-screen">
        <Outlet />
      </main>
    </div>
  );
};

export default App;
