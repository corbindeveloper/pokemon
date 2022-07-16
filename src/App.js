import './App.css';
import Roster from './components/Roster';
import AxiosRoster from './components/AxiosRoster';

function App() {
  return (
    <div className="App">
        <h1>Pokemon Roster!</h1>
        {/* <Roster></Roster> */}
        <AxiosRoster></AxiosRoster>
    </div>
  );
}

export default App;
