import "./App.css";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";


function App() {
  return (
    <div>
    <div id="wrapper">
      <Sidebar/>
      <div id="content-wrapper" className="d-flex flex-column">
        <Topbar/>
        <Footer/>
      </div>
      </div>
    </div>
  );
}

export default App;
