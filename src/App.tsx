import { useState } from 'react';
import './App.css'
import Home from './Modules/Home/Component/Home';
import NavBar from './Modules/NavBar/Component/NavBar';
import SideBar from './Modules/SideBar/Component/SideBar';

function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <NavBar setShowSidebar={setShowSidebar}/>
      <SideBar showSidebar={showSidebar}/>
      <Home />
    </>
  )
}

export default App
