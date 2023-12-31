import { useShoppingCart } from '@/context/ShoppingCartContext'
import React from 'react'
import { Offcanvas, Stack } from 'react-bootstrap'
import CartItem from './CartItem'
import StoreItems from '@/data/items.json'

type ShoppingCartProps = {
    isOpen: boolean
  }
const ShoppingCart = ({isOpen}:ShoppingCartProps) => {
  const {closeCart,cartItems} = useShoppingCart()
  return (
    <>
    <Offcanvas show={isOpen} onHide={closeCart} placement='end'>
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
           <Stack gap={3}>
             {cartItems.map(item=>(
              <CartItem key={item.id} {...item}/>
             ))}
             <div className='ms-auto fw-bold fs-5'>Total: ${
              cartItems.reduce((total, currItem)=>{
                const item = StoreItems.find(i=>i.id === currItem.id)
                return total + (item?.price||0) * currItem.quantity
              },0)
             }</div>
           </Stack>
        </Offcanvas.Body>
    </Offcanvas>
    </>
  )
}

export default ShoppingCart