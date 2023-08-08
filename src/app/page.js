import Image from 'next/image'
import styles from './page.module.css'
import Main from './main'
import Header from './header'
import Footer from './footer'

export default function Home() {
  return (
    <div className="wrapper">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}
