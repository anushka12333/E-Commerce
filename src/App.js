import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';

import HomePage from './Pages/HomePage';

function App() {
  return (
    <div>
      <Navigation/>
      <div>
        <HomePage/>
      </div>
    </div>
  );
}

export default App;
