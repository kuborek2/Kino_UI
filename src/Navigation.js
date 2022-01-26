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
    
            <div style={{marginRight: "25%",marginLeft:"5%",paddingTop: "1%"}}>
            {/* <Link id="link" to="/" > */}
            <a href="/" style={{textDecoration: "none"}}>
            <h1 style={{lineHeight: "0.01em",color:"#923DB7",fontSize: "46px"}} >ECLIPSE</h1>
            <h2 style={{lineHeight: "0.01em",paddingLeft: "60px",color:"#923DB7",fontSize: "30px"}}>CINEMA</h2></a>
            {/* </Link> */}
            </div>
            
        <Navbar bg="dark" variant="dark">
            <Container>   
                <Nav className="me-auto" style={{paddingTop: "17%"}}>
                    {/* <Link id="link" style={{color: linkcolor}} to="/" onMouseEnter={()=>{setColor('#600186')}} onMouseLeave={()=>{setColor('white')}}></Link> */}
                    <Link  id="link" to="/repertuar" style={{color: linkcolor2}}  onMouseEnter={()=>{setColor2('#923DB7')}} onMouseLeave={()=>{setColor2('white')}}>Repertuar  </Link>
                    <Link  id="link" to="/tickets" style={{color: linkcolor}}  onMouseEnter={()=>{setColor('#923DB7')}} onMouseLeave={()=>{setColor('white')}} > Bilety </Link>
                    <Link  id="link" to="/about" style={{color: linkcolor3}}  onMouseEnter={()=>{setColor3('#923DB7')}} onMouseLeave={()=>{setColor3('white')}} > O kinie </Link>
                </Nav>
            </Container>
        </Navbar>
  </div>
  </div>
    );
}

export default Navigation;