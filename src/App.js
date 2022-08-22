import './App.css';
import {Header} from './components/Header';
import {Banner} from './components/Banner';
import {MovieList} from './components/MovieList';

function App() {
  return (
    <div className="App bg-black">
      <Header />
      <Banner />
      <MovieList /> 
    </div>
  );
}

export default App;
