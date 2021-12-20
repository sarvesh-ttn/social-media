import Login from './pages/login';
import {Route,Routes,BrowserRouter} from "react-router-dom"
import './App.css';
import Feeds from './pages/feeds';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        
         <Routes>
                 <Route exact path='/' element={< Login />}></Route>
                 <Route exact path='/test' element={< Feeds />}></Route>
          </Routes>
         
    </div>
      </BrowserRouter> 
  );
}

export default App;
