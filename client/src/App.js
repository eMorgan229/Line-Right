import './App.css';
import {useState, useEffect} from 'react'
import {Routes, Route} from "react-router-dom"
import Login from './components/Login';
import SignUp from './components/SignUp';
import Theatres from './components/Theatres';
import NavBar from './components/NavBar';
// import {Helmet} from "react-helmet";
import MyWaitlist from './components/MyWaitlist';

function App() {
  const [user, setUser] = useState({})
  const [myWaitlist, setMyWaitlist] = useState([])
  const[theatres, setTheatres] = useState([]);

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

  useEffect(() => {
    fetch('/my-waitlists')
    .then((r) => r.json())
    .then(w => setMyWaitlist(w))
}, [])
console.log(myWaitlist)

  function updateMyWaitlist(myWaitlist) {
    setMyWaitlist(myWaitlist)
  }
  console.log(myWaitlist)



  useEffect(() => {
      fetch('/theatres')
          .then((r) => r.json())
          .then((t) => {
            setTheatres(t)  
          })
  }, [])

   console.log(theatres)
   

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
        <Route exact path="/theatres"  element={<Theatres user={user} theatres={theatres} updateWaitlists={updateMyWaitlist}/>}/>
        <Route exact path="/my-waitlists" element={<MyWaitlist myWaitlist={myWaitlist} 
          // updateMyWaitlist={updateMyWaitlist}
          />}/>

        {/* <Route exact path="/waitlists/:id" element={<ViewShow/>}/> */}

      </Routes>
    </div>
  );
}

export default App;
