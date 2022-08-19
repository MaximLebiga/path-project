import Image from 'next/image'
import MainLink from "../MainLink/MainLink"
import firstImage from "../../images/hero/first_image.png"
import secondImage from '../../images/hero/second_image.png'
import thirdImage from '../../images/hero/third_image.png'
import style from "./Hero.module.css"
import MiniSnowflake from '../../icons/MiniSnowflake'
import Snowflake from '../../icons/Snowflake'

const Hero = () => {
  return (
    <div className={style.section}>
      <div className={style.content}>
        <h1 className={style.title}>
          Getting interviews should be simple, fast, and fun.
        </h1>
        <p className={style.text}>
          Path is a coach that gives you power over your own software developer
          job search.
        </p>
        <MainLink text="Get Started" filled />
      </div>
      <div className={style.first_img}>
        <Image src={firstImage} alt="" />
      </div>
      <div className={style.second_img}>
        <Image src={secondImage} alt="" />
      </div>
      <div className={style.third_img}>
        <Image src={thirdImage} alt="" />
      </div>
      <MiniSnowflake className={style.mini_snowflake} fill="#EBF4FE" />
      <Snowflake className={style.snowflake} fill="#EBF4FE" />
    </div>
  )
}

export default Hero