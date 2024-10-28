import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
function Layout() {
    return (
        <>
        <header>
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">Mi proyecto Final</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/aboutUs">About Us</Nav.Link>
                        <NavDropdown title="Proyectos" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/juegoPhaser">juego Phaser</NavDropdown.Item>
                            <NavDropdown.Item href="/gestorBillerera">
                               gestor de Billeteras
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/juego">juego</NavDropdown.Item>
                            <NavDropdown.Item href="/calcularIMC">calcularIMC</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </header>
<main>
    <Outlet></Outlet>
</main>
        <footer>
            <h1>este es el FOOTER</h1>
        </footer>
        </>
    )
}
export default Layout;