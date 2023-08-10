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
        <img src="/img/bird-1.svg" className='bird1' id='bird1' />
        <img src="/img/bird-2.svg" className='bird2' id='bird2'/>
        <img src="/img/img-1.svg" className='tent' id='tent'/>
        <img src="/img/img-2.svg" className='ground' id='ground'/>
        <img src="/img/img-3.svg" className='tree' id='tree'/>
        <img src="/img/img-4.svg" className='sky' id='sky'/>
      </div>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}
