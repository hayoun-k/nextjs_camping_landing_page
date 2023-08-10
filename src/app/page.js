"use client"
import Image from 'next/image'
import styles from './page.module.css'
import Main from './main'
import Header from './header'
import Footer from './footer'
import { useEffect } from 'react'

export default function Home() {

  return (
    <div className="wrapper">
      <div className="image-container">
        <img src="/img/bird-1.svg" className='bird1' id='bird1' alt='bird image' />
        <img src="/img/bird-2.svg" className='bird2' id='bird2' alt='bird image'/>
        <img src="/img/img-1.svg" className='tent' id='tent' alt='tent image'/>
        <img src="/img/img-2.svg" className='ground' id='ground' alt='ground image'/>
        <img src="/img/img-3.svg" className='tree' id='tree' alt='tree image'/>
        <img src="/img/img-4.svg" className='sky' id='sky' alt='sky image'/>
      </div>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}
