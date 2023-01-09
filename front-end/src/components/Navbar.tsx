import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import 'primeicons/primeicons.css';



function ProjectNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
      <Navbar.Brand href="/">
            <Logo/>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Item as={Link} to="/users-list" className='nav-link'>Users List</Nav.Item>
            <Nav.Item as={Link} to="/cat-http-code" className='nav-link'>Cat HTTP Code</Nav.Item>
            <Nav.Item as={Link} to="/random-dog" className='nav-link'>Random Dog</Nav.Item>
            <Nav.Item as={Link} to="/clients-list" className='nav-link'>Clients List (CRUD)</Nav.Item>
          </Nav>
        </Navbar.Collapse>
        
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text style={{marginRight: '10px'}}>
            <Nav.Link className='nav-link' href='https://eduardopontes.netlify.app/' target={'_blank'} >Eduardo Pontes</Nav.Link>
          </Navbar.Text>
          <Navbar.Text>
            <Nav.Link className='nav-link' href='https://github.com/eduardolpsss/desafio-sharenergy-2023-01' target={'_blank'} ><i className="pi pi-github"></i></Nav.Link>
          </Navbar.Text>
          </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ProjectNavbar;