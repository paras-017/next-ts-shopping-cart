'use client'
import ShoppingCart from "@/components/ShoppingCart";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useContext,createContext, ReactNode, useState } from "react";
type ShoppingCartProviderProps = {
    children: ReactNode    //type for the children property inside react
}
type ShoppingCartContext = {
    openCart:()=>void
    closeCart:()=>void
    getItemQuantity: (id:number)=>number
    increaseCartQuantity: (id:number)=>void
    decreaseCartQuantity: (id:number)=>void
    removeFromCart: (id:number)=>void
    cartQuantity:number
    cartItems:CartItem[]
}
type CartItem = {
    id:number,
    quantity:number
}

// create a  Context
const ShoppingCartContext = createContext({} as ShoppingCartContext)


// using context
export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}


// Providing the context to children
export function ShoppingCartProvider({children}: ShoppingCartProviderProps){
  const [isOpen, setIsOpen] = useState(false)
   const [cartItems, setCartItems] = useLocalStorage<CartItem[]>('shopping-cart',[])
   const cartQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0)

   const openCart = ()=>setIsOpen(true)
   const closeCart = ()=>setIsOpen(false)
   function getItemQuantity(id:number){
     return cartItems.find(item=>item.id === id)?.quantity || 0
   }
   function increaseCartQuantity(id:number){
    setCartItems(currItems => {
      if(currItems.find(item=>item.id === id) == null){     //if the item is not in the cart then add the item to the cart
      return [...currItems, {id, quantity:1}]
      }else{
        return currItems.map(item=>item.id === id? {...item, quantity:item.quantity+1} : item)
      }
    })
   }
   function decreaseCartQuantity(id:number){
    setCartItems(currItems => {
      if(currItems.find(item=>item.id === id)?.quantity == 1){   
      return currItems.filter(item => item.id !== id)   //return new list
      }else{
        return currItems.map(item=>item.id === id? {...item, quantity:item.quantity-1} : item)
      }
    })
   }
  function removeFromCart(id:number){
   return setCartItems(currItems => currItems.filter(item => item.id!== id))
  }

  return (
      <ShoppingCartContext.Provider value={{getItemQuantity,increaseCartQuantity,decreaseCartQuantity,removeFromCart,cartItems,cartQuantity, openCart, closeCart}}>
        {children}
        <ShoppingCart isOpen={isOpen}/>
      </ShoppingCartContext.Provider>
    )
}