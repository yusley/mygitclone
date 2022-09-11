import {Container, Row,Col} from 'react-bootstrap'
import styles from './styles.module.css'

function Repositories (){
    return(
        <Container >
            
            <Row>
                
                <Col xs={3}>
                    <h1>Profile</h1>
                </Col>
                <Col xs={9}>
                    <h1>Repositories</h1>
                </Col>

            </Row>
            
            
        </Container>
        
    )
}

export default Repositories;