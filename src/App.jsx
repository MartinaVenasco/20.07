import MainContent from './components/MainContent';
import Navbar from './components/Navbar';
import './App.css';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <MainContent />
      <Footer/>
    </div>
  );
}

export default App;