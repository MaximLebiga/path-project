import Logo from "../../images/footer/logo.svg"
import Facebook from "../../images/footer/facebook.svg"
import Linkedin from '../../images/footer/linkedin.svg'
import Twitter from '../../images/footer/twitter.svg'
import Instargam from '../../images/footer/instagram.svg'
import style from "./Footer.module.css"
import Link from "next/link"


const Footer = () => {
  return (
    <footer className={style.wrapper}>
      <div>
        <div className={style.content}>
          <div className={style.messangers}>
            <Logo className={style.logo} />
            <p className={style.text}>
              Path is a coach that gives you power over your own software
              developer job search.
            </p>
            <div>
              <Facebook className={style.messanger} />
              <Linkedin className={style.messanger} />
              <Twitter className={style.messanger} />
              <Instargam className={style.messanger} />
            </div>
          </div>
          <div className={style.nav}>
            <p>Company</p>
            <Link href="">
              <a className={style.nav_link}>Home</a>
            </Link>
            <Link href="">
              <a className={style.nav_link}>About Us</a>
            </Link>
            <Link href="">
              <a className={style.nav_link}>FAQs</a>
            </Link>
          </div>
          <div className={style.policy}>
            <p>&copy; Path {new Date().getFullYear()}</p>
            <Link href="">
              <a className={style.policy_links}>Terms of Service</a>
            </Link>
            <Link href="">
              <a className={style.policy_links}>Privacy Policy</a>
            </Link>
          </div>
        </div>
        <div className={style.subscribe}>
          <p className={style.sub_title}>
            Get Insights to Power up your Job Search
          </p>
          <p className={style.sub_text}>Subscribe to the Path Newsletter</p>
          <form className={style.form}>
            <input className={style.input} placeholder="Email" />
            <button className={style.button}>Subscribe</button>
          </form>
        </div>
      </div>
    </footer>
  )
}

export default Footer