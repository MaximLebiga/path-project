import LogoIcon from "../../images/header/logo.svg"
import BurgerIcon from '../../images/header/burger.svg'
import style from "./Header.module.css"
import Link from "next/link"
import { useState } from "react"
import MainLink from "../MainLink/MainLink"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleMenuButtonClick = () => {
    setIsOpen(prevState => !prevState)
  }

  return (
    <header className={style.header}>
      <div className={style.wrapper}>
        <LogoIcon className={style.logo_icon} />
        <div className={style.nav}>
          <div className={style.links_wrapper}>
            <MainLink text="Home" extraStyles={style.nav_link} />
            <MainLink text="About Us" extraStyles={style.nav_link} />
            <MainLink text="FAQs" extraStyles={style.nav_link} />
          </div>
          <div className={style.links_wrapper}>
            <MainLink text="Log In" extraStyles={style.nav_link} />
            <MainLink text="Get Started" extraStyles={style.nav_link} filled />
          </div>
        </div>
        <button className={style.menu_button} onClick={handleMenuButtonClick}>
          <BurgerIcon />
        </button>
      </div>
      {isOpen && (
        <div className={style.menu}>
          <div className={style.links_wrapper}>
            <MainLink text="Home" extraStyles={style.nav_link} />
            <MainLink text="About Us" extraStyles={style.nav_link} />
            <MainLink text="FAQs" extraStyles={style.nav_link} />
          </div>
          <div className={style.links_wrapper}>
            <MainLink text="Log In" extraStyles={style.nav_link} />
            <MainLink text="Get Started" extraStyles={style.nav_link} filled />
          </div>
        </div>
      )}
    </header>
  )
}

export default Header