import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import CardComponents from './CardComponents';
import PaginationComponent from '../../Components/Pagination';



const HomeContainer = (props) => {
  const [content,setContent]=useState([])
  const[pageno,setPageno]=useState(1)
  const[paginationno,setPaginationno]=useState(0)
  

  const API_KEY=process.env.REACT_APP_NOT_SECRET_CODE
  const Getlatest=async ()=>{
    const {data}= await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&page=${pageno}`)
    setContent(data.results)
    console.log(data.results)
    setPaginationno(data.total_pages)
  }
  useEffect(()=>{
    Getlatest()  },[])

    useEffect(()=>{
      Getlatest()
    },[pageno])


  
  const handleClick=(number)=>{
    setPageno(number)

  }  
  return (
    <main className='homePage'>
      <Container>
        <Row>
          <Col className='col-12'>
            <section>
              <h1 className='txtCenter'>Trending Movies</h1>
            </section>
            

          </Col>
          {content && content.length>0?content.map((item,index)=>{
            return(
              <CardComponents key={index} data={item}/>
            )
          }):"Loading ...."}
          {
                    paginationno && paginationno > 1 ? <PaginationComponent maxnum={paginationno} activenum={pageno} handleClick={handleClick}/> : ''
                }
        </Row>
        
         </Container>
     
     
      
    </main>
  )
}

export default HomeContainer
