
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';



const Topnav=()=>{

return(
    <>
    
    
    



        

          <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">CYBROM</Navbar.Brand>
          <Nav className="me-auto">
           <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link as={Link} to="about">About</Nav.Link>
            <Nav.Link as={Link} to="service">Service</Nav.Link>
            <Nav.Link as={Link} to="join">Join Us</Nav.Link>
    
           
          </Nav>
        </Container>
      </Navbar>
        
    


    </>
)

}
export default Topnav;