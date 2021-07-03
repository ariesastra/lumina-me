// COMPONENTS
import Header from "./homepageSection/Header";
import Table from "./homepageSection/Table"

// STYLES
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";

function Homepage() {
    return (
        <>
        <Header />
        <Home>
            <Container>
            <Row>
                <Col>
                    <Table />
                </Col>
            </Row>
            </Container>
        </Home>
        </>
    )
}

export default Homepage

const Home = styled.div`
    position: relative;
    height: 80vh;
    width: 100%;
`;