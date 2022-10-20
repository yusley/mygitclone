import {Container,Row,Col, Nav, Image, Form} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import styles from './styles.module.css'
import axios from 'axios';
import {useEffect,useState} from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function MenuBar(){
    const [useRepositories, setRepositories] = useState([])
    const api = axios;
    const url = 'https://api.github.com/users/yusley/repos'

    useEffect(() => {

        api.get(url)
        .then((element) => (element.data))
        .then((data) => {
            setRepositories(data)
        })
        

    },[])
    


    return(
        <Container fluid className={styles.containerMenuBar} responsive>
            <Row className={styles.containerRepositories}>

                <Col className={styles.profile} >
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

                        <Row className={styles.profileItem}>
                            <p>Um sonhador buscando conheciomento para realizar esses sonhos...</p>
                        </Row>

                        <Row className={styles.profileItem}>
                            <Form.Control type='submit' value='Edit Profile' className={styles.editProfile} />
                        </Row>
                        
                    </Row>
                    

                    
                    <Row className={styles.profileItem}>
                        <p>2 seguidores - 5 seguindo</p>
                    </Row>
                </Col>


                <Col >
                    <Nav responsive className={styles.navOfPages}>
                        <Link className={styles.navItens} to="/overview" >Overview</Link>
                        <Link className={styles.navItens} to="/repositories">Repositories</Link>
                        <Link className={styles.navItens} to="/projects">Projects</Link>
                        <Link className={styles.navItens} to="/packages">Packages</Link>
                        <Link className={styles.navItens} to="/stars">Stars</Link>
                    </Nav>

                    <Col className={styles.repositories}>
                        <Col className={styles.filter}>
                            <Row className={styles.filterSearch} >
                                
                                <Col  className={styles.filterSearchInput} >
                                    <Form.Control
                                    type='text'
                                    />
                                </Col>
                                <Col  className={styles.filtersDropDowns}>
                                   
                                    <DropdownButton id="dropdown-basic-button" title="Typt">
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </DropdownButton>
                                    <DropdownButton id="dropdown-basic-button" title="Lenguage">
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </DropdownButton>
                                    <DropdownButton id="dropdown-basic-button" title="Sort">
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </DropdownButton>
                                           
                                    
                                </Col>

                                <Col className={styles.inputNew} >
                               
                                <Form.Control
                                    type='submit'
                                    value='salve'
                                />
                                
                            </Col>
                                
                            </Row>

                            
                        </Col>

                        <Col className={styles.repositorieCol}>
                            {useRepositories && useRepositories.map((itemMap,index) => (
                                <h1 key={index}><a href={itemMap.url}>{itemMap.name}</a></h1>
                            )) }
                        </Col>


                    </Col>

                </Col>
            </Row>
        </Container>
    )
}

export default MenuBar;