import "./App.css";
import About from "./components/about";
import Hero from "./components/hero";
import Kendrick from "./components/kendrick";
import Merch from "./components/merch";
import Music from "./components/music";
import Footer from "./components/footer";
import Loader from "./components/loading";
import { useState, useEffect } from "react";
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <Loader/>
      ) : (
        <div className="App-Container">
          <Hero />
          <Music />
          <Merch />
          <Kendrick />
          <About />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
