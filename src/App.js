import './App.css';
import './helloworld.scss';
import Landing from './Landing.js';
import bg2 from './web_no_console.png';

function App() {
  return (
    <div className="App" style={{
      backgroundImage: `url(${bg2})`
    }}>
      <Landing />
    </div>
  );
}

export default App;
