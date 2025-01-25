import './App.css';
import Header from "../src/components/Header";
import SideBar from "../src/components/SideBar";
import NavBar from "../src/components/NavBar";
import CreateTask from "./components/CreateTask";

function App() {
  return (
    <div>
      <Header/>
      <div className="container">
        <SideBar/>
        <NavBar/>
        <CreateTask/>
      </div>
    </div>
  );
}

export default App;
