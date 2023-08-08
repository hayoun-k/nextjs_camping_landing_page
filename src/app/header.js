import Image from "next/image"
import MenuAnimation from "./components/hamburger"

export default function Header() {
  return (
    <header className="header">
      <nav>
        <div className="nav-logo">
          <Image
            className="logo"
            src="/img/logo.svg"
            width={50}
            height={50}
            alt="logo"
          />
        </div>
        <div>
          <MenuAnimation />
        </div>
        {/* <div className="nav-menu">
          <ul className="menu-left">
            <li className="home"><a href="#">Home</a></li>
            <li className="pricing"><a href="#">Pricing</a></li>
            <li className="events"><a href="#">Events</a></li>
            <li className="contact"><a href="#">Contact</a></li>
          </ul>
          <ul className="menu-right">
            <li className="login"><a href="#">Login</a></li>
            <li className="start"><a href="#" className="btn btn-white">Get Started</a></li>
          </ul>
        </div> */}
      </nav>
    </header>
  )
}