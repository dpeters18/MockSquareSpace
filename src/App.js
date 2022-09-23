import logo from './logo.svg';
import './App.css';
import Home from "./Components/Home"
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Templates from './Components/Templates';
import{Routes, Route} from 'react-router-dom';
import { useLocalState } from './utilities/UtilityMethods';
import UserProfile from './UserProfile';

function App() {
  let Component 
  switch (window.location.pathname) {
    case "/":
      Component =<Home />
      break;
    case "/login":
      Component =<Login />
      break;
    case "/signup":
      Component =<SignUp />
    break;
    case "/templates":
      Component =<Templates />
    break;
  } 

  return (

    <div className='App'>
      <Routes>
       <Route path='/' element={<Home />}></Route>
       <Route path='/login' element={<Login />}></Route>
       <Route path='/signup' element={<SignUp/>}></Route>
       <Route path='/templates' element={<Templates/>}></Route>
       <Route path='/user' element={<UserProfile/>}></Route>
      </Routes>
    </div>
  )
}

export default App;
