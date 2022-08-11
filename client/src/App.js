import './App.css';
import {useState, useEffect} from 'react'
import {Routes, Route} from "react-router-dom"
import Login from './components/Login';
import SignUp from './components/SignUp';
import AllWaitlists from './components/AllWaitlists';
import ViewShow from './components/ViewShow';
import NavBar from './components/NavBar';
// import {Helmet} from "react-helmet";
import MyWaitlist from './components/MyWaitlist';

function App() {
  const [user, setUser] = useState({})

  // this persists user session
  useEffect(() => {
    fetch('/me').then((res)=> {
      if (res.ok) {
        res.json().then((user) => setUser(user))
      }
    })
  },[])

  function handleLogin(user) {
    setUser(user)
  }

  return (
    <div className="App">
       {/* <Helmet>
        <meta charSet="utf-8" />
        <title>Grocery List</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="Grocery List Organizer Application" />
      </Helmet> */}

      <NavBar user={user} setUser={setUser}/>
      <Routes>
        <Route exact path="/login" element={<Login onLogin={handleLogin}/>}/>
        <Route exact path="/signup" element={<SignUp onLogin={handleLogin}/>}/>
        <Route exact path="/waitlists" element={<AllWaitlists />}/>
        <Route exact path="/my-waitlists" element={<MyWaitlist/>}/>

        {/* <Route exact path="/waitlists/:id" element={<ViewShow/>}/> */}

      </Routes>
    </div>
  );
}

export default App;
