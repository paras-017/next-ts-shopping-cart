'use client'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import storeItems from '@/data/items.json'
import StoreItems from '@/components/StoreItems'

const page = () => {
  return (
    <Container>
     <h1>Store</h1>
     <Row md={2} xs={1} lg={3} className='g-3'>
         {storeItems.map((item)=>(
           <Col key={item.id}><StoreItems {...item}/></Col>
         ))}
     </Row>
    </Container>
  )
}

export default page