import { Button } from '@mui/material';
import './App.css';
import Counter from './components/counter/Counter';
import Users from './components/users/Users';


function App() {
  

  return (
    <div>
      <Button variant="contained" color="success">
        Success
      </Button>
      <Users />
      <Counter />
    </div>
  );
}

export default App;
