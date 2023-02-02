import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


const HeaderComponents = () => {
  const navdata=[
    {name:'Home',link:'/'},
    {name:'Movies',link:'/movies'},
    {name:'Search',link:'/search'}
    
  ,]
  return (
    <header className='header'>
       <Navbar bg="dark" expand="lg" color='primary'>
      <Container>
        <Navbar.Brand href="#home">My EnterTainment</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{maxHeight:'100px'}}
          navbarScroll>{
            navdata.map((item)=>{
              return(
                <Nav key={item.name} ><Link to={item.link}>{item.name}</Link></Nav>
              )
            })
          }
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </header>
  )
}

export default HeaderComponents
