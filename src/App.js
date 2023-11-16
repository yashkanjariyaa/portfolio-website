import './App.css';
import About from './components/about';
import Hero from './components/hero';
import Kendrick from './components/kendrick';
import Merch from './components/merch';
import Music from './components/music';
function App() {
  return (
    <div className="App">
      <Hero/>
      <Music/>
      <Merch/>
      <Kendrick/>
      <About/>
    </div>
  );
}

export default App;
