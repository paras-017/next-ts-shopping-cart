import React from 'react'
import { Button, Card, Container } from 'react-bootstrap'

type StoreItemsProps = {
    id:number,
    name:string,
    price:number,
    imgUrl:string,
}
const StoreItems = ({id, name, price, imgUrl}: StoreItemsProps) => {
   const quantity = 0
  return (
    <Container >
        <Card className="h-100" >
        <Card.Img variant="top" src={imgUrl} height='200px' style={{ objectFit: "cover" }}/>
       <Card.Body className='d-flex flex-column'>
        <Card.Title className='d-flex justify-content-between align-items-baseline'>
            <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{price}</span>
        </Card.Title>

        <div className="mt-auto">
            {quantity === 0 ? (<>
             <Button className='w-100'>+ Add to Cart</Button>
            </>):(<>
            <div className="d-flex flex-column align-items-center"  style={{ gap: ".5rem" }}>
                <div className="d-flex justify-content-center align-items-center" style={{gap:'0.5rem'}}>
                  <Button>-</Button>
                  <div><span className="fs-3">{quantity}</span> in cart</div>
                  <Button>+</Button>
                </div>
                <Button variant='danger' size='sm'>Remove</Button>
            </div>
            </>)}
        </div>

       </Card.Body>
        </Card>
    </Container>
  )
}

export default StoreItems