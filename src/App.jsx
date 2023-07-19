
import { useEffect } from "react";
import "./styles/Home.css";
import 'semantic-ui-css/semantic.min.css'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from './pages/Home';
import Navigator from './components/Navigator';
import SidebarMenu from './components/SidebarMenu';
import { GLOBAL } from "./redux";

const App = () => {
  var SideMenu = GLOBAL('SideMenu')
  return (
    <>
      <Navigator />
      <div className="flex">
        {SideMenu && (
        <SidebarMenu />
        )}
        <div className={`bg-[#FFF] border-0 ${SideMenu ? 'w-full' : 'w-full'} px-10 border-0 rounded-lg mx-auto transform translate-y-[7rem] `}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;