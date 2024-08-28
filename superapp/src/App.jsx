import Header from './Header'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import Weather from './Weather'
import Home from './Home'
import Todolist from './Todolist'
import More from './More'
import Profile from './Profile'
import { useEffect } from 'react'
import Journey from './Journey'
import Parallaxt from './Parallax'

function App() {
  const location = useLocation();

  useEffect(() => {
    document.title = 'Super App';
  }, []);

  const appPropMap = {
    '/weather': '/ Weather',
    '/todolist': '/ Todo List',
    '/more': '/ More',
    '/profile': '/ Profile'
  };

  const appProp = appPropMap[location.pathname] || '';


  return (
    <>
      <Header title="Axios" app={appProp} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/weather' element={<Weather />} />
        <Route path='/todolist' element={<Todolist />} />
        <Route path='/more' element={<More />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/profile/journey' element={<Journey />} />
        <Route path='/parallax' element={<Parallaxt/>}/>
      </Routes>
    </>
  )
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
