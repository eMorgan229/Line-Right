import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar';
import {useNavigate} from 'react-router-dom'

const NavBar = ({user, setUser}) => {
  const history = useNavigate()

  function handleLogout() {
    fetch('/logout', {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        setUser({})
        history('/login')
      }
    })
  }

  
    return(
            <Navbar className="color-nav" expand="lg">
            <Container >
                <Navbar.Brand className="logo">
                <img className="line-icon" alt="people in line" src='lineicon.ico'/>
                <span className="title">
                  Line-Right
                </span>
                </Navbar.Brand>

              {/* {user && user.username ? <div className="welcome">
                <div className="welcome-text">
                Welcome back , {user.name}!
                </div>
                {/* <div className="logout-button">              
                <Button className="button" onClick={handleLogout}>Log Out</Button>
                </div> */}
              {/* </div> : ""} */} 
              <Navbar.Toggle className="nav-toggle" aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                
                  <Nav.Link className="nav-link" href="/theatres">All Theatres</Nav.Link>
                  <Nav.Link className="nav-link" href="/my-waitlists">My Waitlists</Nav.Link>
                
            <Nav className="me-auto">
              {user && user.username ? <div className="welcome">
              <Nav.Link className="nav-link" onClick={handleLogout}>Log Out</Nav.Link>

              </div>: <div className="login">
                  <Nav.Link className="nav-link" href="/login">Login</Nav.Link>
                </div>}
            

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
       
    )
}
export default NavBar;