
import './App.css';
import Header from './Header';
import Searchbar from './Searchbar';
function App() {
  return (
    <div className='app'>
      <div className="header">
        <Header />
      </div>
      <div className="search">
        <Searchbar />
      </div>
    </div>
    
  );
}

export default App;
