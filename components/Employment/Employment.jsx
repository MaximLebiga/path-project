import style from './Employment.module.css'
import Img from "../../images/employment/image.png"
import Image from "next/image"
import MainLink from '../MainLink/MainLink'

const Employment = () => {
  return (
    <div className={style.section}>
      <div>
        <h2 className={style.title}>What We Do</h2>
        <p className={style.text}>
          Networking is more effective than cold applications, but how do you do
          it for dozens of companies?
          <span>We&lsquo;ll walk you through the process.</span>
        </p>
        <MainLink text="Start Here" filled />
      </div>
      <Image src={Img} alt="" />
    </div>
  )
}

export default Employment