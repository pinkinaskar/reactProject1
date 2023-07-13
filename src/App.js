
import './App.css';
import Header from "./components/header";
import TopLeft from "./components/top-left"; 
import BottomLeft from "./components/bottom-left";  
import TopRight from "./components/top-right"; 
import BottomRight  from "./components/bottom-right";  

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="App-body">
      <TopLeft/>
      <BottomLeft/>
      <TopRight/>
      <BottomRight/>
      </div>
    </div>
  );
}

export default App;
