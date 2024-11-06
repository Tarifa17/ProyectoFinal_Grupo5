import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import './Layout.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Layout() {
    return (
        <div className='container'>
        <header>
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand className='Iconex' href="/">Mi proyecto Final</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href= "/">Home</Nav.Link>
                        <Nav.Link href="/aboutUs">About Us</Nav.Link>
                        <NavDropdown  title="Proyectos" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/juegoPhaser">Juego Phaser</NavDropdown.Item>
                            <NavDropdown.Item href="/gestorBillerera"> Gestor de Billeteras</NavDropdown.Item>                                                     
                            <NavDropdown.Item href="/juego">Desafio Matematico</NavDropdown.Item>
                            <NavDropdown.Item href="/calcularIMC">Calculadora IMC</NavDropdown.Item>                            
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </header>
<main className='container-fluid'>
    <Outlet></Outlet>
</main>
        <footer>
            <div className='footer'>
            <p> &copy; 2024 Derechos Reservados para el GRUPO 5 FPW2024 </p>    
            <div href="" className='social-media'> 
            <a href="#">Facebook</a>   
            <a href="#">Instagram</a> 
            <a href="#">GitHub</a> 
            </div>             
            </div>
        </footer>
        </div>
    )
}
export default Layout;