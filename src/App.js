import "./Styles/main.css";
import { Navbar } from "./components/Navbar";
import WoW from "./components/WoW";
import BdayView from "./components/BdayView";

function App() {
  return (
    <>
      <Navbar />
      <WoW />
      <BdayView />
    </>
  );
}

export default App;
