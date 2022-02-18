import "./App.scss";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import CurrentEvent from "./components/CurrentEvents";
import FutureEvents from "./components/FutureEvents";

function App() {
  return (
    <div className="App">
      <Navigation />
      <h1>All Tournaments</h1>
      <div className="listArea">
        <CurrentEvent />
        <FutureEvents />
      </div>
      <Footer />
    </div>
  );
}

export default App;
