import './App.css';
import About from './components/about';
import Hero from './components/hero';
import Kendrick from './components/kendrick';
import Merch from './components/merch';
import Music from './components/music';
import Footer from './components/footer';
function App() {
  
  return (
    <div className="App">
      <Hero/>
      <Music/>
      <Merch/>
      <Kendrick/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
