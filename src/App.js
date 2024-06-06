import './App.css';
import AppLayout from './components/layouts/AppLayout';
import {AppWrapper} from './store/context'

function App() {
  
  return (
    <div className="App">
      <AppWrapper>
        <AppLayout />      
      </AppWrapper>
    </div>
  );
}

export default App;
