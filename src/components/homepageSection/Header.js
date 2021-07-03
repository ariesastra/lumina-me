
// STYLES
import styled from "styled-components"
import {Container, Row, Col} from "react-bootstrap"

function Header() {
    return (
        <Head>
            <Container>
                <Daily>
                    <Row>
                        <Col sm md>
                            <h1>
                                Welcome to Lumina Cryptocurrency
                            </h1>
                            <span>
                                Your Global Crypto Dashboard
                            </span>
                        </Col>
                    </Row>
                </Daily>
            </Container>
        </Head>
    )
}

export default Header

const Head = styled.div`
    position: relative;
`;
const Daily = styled.div`
    padding: 25px 0 30px ;
    h1{
        font-size: 24px;
        font-weight: 900;
        color: ${({theme}) => theme.colors.text.third}
    }
    span{
        font-size: 18px;
        color: ${({theme})=>theme.colors.text.fourth}
    }
`;