// COMPONENTS

// STYLES
import {Navbar, Container} from 'react-bootstrap'

function Navigation() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/"
                    className="fs-1 fw-bold"
                >
                    CrypLum
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Navigation
