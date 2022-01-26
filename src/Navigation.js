import { Navbar, Nav, Container } from 'react-bootstrap';
import './App.css';
import {Link} from 'react-router-dom';
import React,{useState} from 'react';
const Navigation = () => {
    // return(
    //     <Navbar collapseOnSelect fixed='top' expand='sm' bg='dark' variant='dark'>
    //         <Container>
    //             {/* <Navbar.Toggle aria-controls='responsive-navbar-nav'/> */}
    //             <Navbar.Collapse id='responsive-navbar-nav'>
    //                 <Nav>
    //                     <Nav.Link href='/'>Home</Nav.Link>
    //                     <Nav.Link href='/test1'>Test1</Nav.Link>
    //                     <Nav.Link href='/test2'>Test2</Nav.Link>
    //                     <Nav.Link href='/test3'>Test3</Nav.Link>
    //                     <Nav.Link href='/test4'>Test4</Nav.Link>
    //                 </Nav>
    //             </Navbar.Collapse>
    //         </Container>
    //     </Navbar>
    // );
    const [linkcolor,setColor] = useState('white')
    const [linkcolor2,setColor2] = useState('white')
    const [linkcolor3,setColor3] = useState('white')
    return(
    <div className="App">
    <div id='navbar'>
        <Navbar bg="dark" variant="dark">
            <Container>   
                <Nav className="me-auto">
                    <Link id="link" style={{color: linkcolor}} to="/" onMouseEnter={()=>{setColor('#600186')}} onMouseLeave={()=>{setColor('white')}}>Home  </Link>
                    <Link  id="link" to="/test1" style={{color: linkcolor2}}  onMouseEnter={()=>{setColor2('#600186')}} onMouseLeave={()=>{setColor2('white')}}>Features  </Link>
                    <Link  id="link" to="/test2" style={{color: linkcolor3}}  onMouseEnter={()=>{setColor3('#600186')}} onMouseLeave={()=>{setColor3('white')}}>Pricing  </Link>
                </Nav>
            </Container>
        </Navbar>
  </div>
  </div>
    );
}

export default Navigation;