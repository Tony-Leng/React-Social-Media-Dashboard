import './App.css';
import Navbar from './components/Navbar';
import Alltime from './components/Alltime';
import Today from './components/Today';

function App() {
  return (
    <div>
      <Navbar />
      <Alltime />
      <Today />
    </div>
  );
}

export default App;
