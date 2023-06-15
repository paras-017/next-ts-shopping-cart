'use client'
import Image from 'next/image';
import Link from 'next/link';
import { Carousel, Container } from 'react-bootstrap';


export default function Home() {
  return (
  <Container>
  <div className="d-flex   justify-content-center flex-column " >
    <h1 className="display-1 mt-3">Trending now</h1>
    <div style={{borderBottom:"5px solid red", width:'80px', borderRadius:"20px",marginBottom:'3rem'}}></div>
  </div>

    {/* Carousels */}
  <div >
    <Carousel >
      <Carousel.Item  style={{ height: '500px' }}>
       <Image src='/imgs/slider3.png'   style={{ height: '100%', width: '100%' }}  width={1100} height={500} alt='slider image'/>
      </Carousel.Item >
      <Carousel.Item  style={{ height: '500px' }}>
       <Image src='/imgs/slider4.png'   style={{ height: '100%', width: '100%' }}  width={1100} height={500} alt='slider image'/>
      </Carousel.Item >
      <Carousel.Item  style={{ height: '500px' }}>
       <Image src='/imgs/slider5.png'   style={{ height: '100%', width: '100%' }}  width={1100} height={500} alt='slider image'/>
      </Carousel.Item >
      <Carousel.Item  style={{ height: '500px' }}>
       <Image src='/imgs/slider6.png'   style={{ height: '100%', width: '100%' }}  width={1100} height={500} alt='slider image'/>
      </Carousel.Item >

      <Carousel.Item style={{ height: '500px' }}>
       <Image src='/imgs/slider2.jpg'     style={{ height: '100%', width: '100%' }} width={1100} height={500}  alt='slider image'/>
      </Carousel.Item >

      <Carousel.Item style={{ height: '500px' }}>
       <Image src='/imgs/slider1.jpg'     style={{ height: '100%', width: '100%' }} width={1100} height={500}  alt='slider image'/>
      </Carousel.Item>
    </Carousel>
  </div>

   <div className="d-flex   justify-content-center  mt-5">
      <div  className="text-muted fs-2 ">Visit:<Link href='/store' style={{ textDecoration: 'none' }}>Store</Link></div>
   </div>
  </Container>

  )
}
