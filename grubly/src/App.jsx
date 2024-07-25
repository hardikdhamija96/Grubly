import Header from "./components/layout/header/Header";
import Body from "./components/Body";
import { Outlet } from "react-router-dom";
import Footer from "./components/layout/footer/Footer";


function App() {
  return (
    <div className="bg-white h-full w-full">
      <Header />
      <Outlet />
      <Footer/>
    </div>
  );
}

export default App;
