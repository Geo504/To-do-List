import './App.css';

import { PrincipalTitle } from './components/Title/Title';
import { ListTask } from './components/ListTask/ListTask';

function App() {
  return (
    <div className="container m-auto">
      <div className='container-List'>
        <PrincipalTitle text='To Do List'/>
        <ListTask />
      </div>
    </div>
  );
}

export default App;
