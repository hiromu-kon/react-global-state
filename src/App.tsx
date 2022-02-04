import './App.css';
/* components */
import { Todos } from './components/Todos';
import { Users } from './components/Users';

function App() {

  return (
    <div className="App">
      <Todos />
      <Users />
    </div>
  );
}

export default App;
