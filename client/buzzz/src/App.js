import Home from './components/dashboard/home';
import Test from './components/preferences/test';
import {Route,Routes,BrowserRouter} from "react-router-dom"
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        
         <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/test' element={< Test />}></Route>
          </Routes>
         
    </div>
      </BrowserRouter> 
  );
}

export default App;
