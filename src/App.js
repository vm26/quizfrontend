import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import CreateQuestion from './components/CreateQuestion';
import EditQuestion from './components/EditQuestion';
import Navbar from './components/Navbar';
import Cards from './components/Cards';

function App() {
  return (
    <div className="App">
      <Navbar/>
     <Routes>
     <Route path="/" element={<Cards/>}/>
      <Route path="/createquestion" element={<CreateQuestion/>}/>
      <Route path="/editquestion" element={<EditQuestion/>}/>
     </Routes>
    </div>
  );
}

export default App;
