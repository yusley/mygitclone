import {Container,Row,Col, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import styles from './styles.module.css'

function MenuBar(){
    return(
        <Container className={styles.containerMenuBar}>
            <Row>
                <Col xl={3}>
                    profile
                </Col>
                <Col xl={9}>
                    <Nav responsive className={styles.navOfPages}>
                        <Link className={styles.navItens} to="/overview" >Overview</Link>
                        <Link className={styles.navItens} to="/repositories">Repositories</Link>
                        <Link className={styles.navItens} to="/projects">Projects</Link>
                        <Link className={styles.navItens} to="/packages">Packages</Link>
                        <Link className={styles.navItens} to="/stars">Stars</Link>
                    </Nav>
                </Col>
            </Row>
        </Container>
    )
}

export default MenuBar;