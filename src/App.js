import './App.css';
import Header from "../src/components/Header";
import SideBar from "../src/components/SideBar";
import NavBar from "../src/components/NavBar";
import TaskInformation from "../src/components/TaskInformation";

function App() {
  return (
    <div>
      <Header/>
      <div className="container">
        <SideBar/>
        <NavBar/>
        <TaskInformation/>
      </div>
    </div>
  );
}

export default App;
