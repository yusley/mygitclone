import {Container,Row,Col, Nav, Image, Form} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import styles from './styles.module.css'

function MenuBar(){
    return(
        <Container fluid className={styles.containerMenuBar}>
            <Row className={styles.containerRepositories}>

                <Col className={styles.profile} xl={3}>
                    <Row className={styles.profileInformations} >
                        <Col className={styles.profileAvatar} >
                            <Image
                                className={styles.avatar}
                                src="https://avatars.githubusercontent.com/u/71084795?s=400&u=649a8218d7c0164071adfd7c5f857db11e259559&v=4"
                                roundedCircle
                            />
                        </Col>
                        <Col className={`${styles.userName}${styles.profileItem}`}>          
                            <h4>Yusley Santos</h4>
                            <p>yusley</p>
   
                        </Col>

                        
                    </Row>
                    
                    <Row className={styles.profileItem}>
                        <p>Um sonhador buscando conheciomento para realizar esses sonhos...</p>
                    </Row>

                    <Row className={styles.profileItem}>
                        <Form.Control type='submit' value='Edit Profile' className={styles.editProfile} />
                    </Row>
                    
                    <Row className={styles.profileItem}>
                        <p>2 seguidores - 5 seguindo</p>
                    </Row>
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