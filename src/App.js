import Landing from "./components/landing";
import "./App.css";
import TopNavigation from "./topnav.js";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="App">
      <div>
        <TopNavigation />
      </div>
      <Landing />
      <div>
        <Footer />
      </div>
    </div>
  );
};
export default App;
