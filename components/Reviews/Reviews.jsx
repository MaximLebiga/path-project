import Image from "next/image"
import { useEffect, useState } from "react"
import Img from "../../images/reviews/image.png"
import style from "./Reviews.module.css"
import star from "../../images/reviews/star.png"

const Reviews = ({rating}) => {
  const [starsArray, setStarsArray] = useState([])

  useEffect(() => {
    const array = []
    array.length = rating
    array.fill(star)
    setStarsArray(array)
  }, [rating])

  return (
    <div className={style.wrapper}>
      <div>
        <h2 className={style.title}>What Path User Say</h2>
        <div className={style.content_wrapper}>
          <div className={style.image}>
            <Image src={Img} alt="" />
          </div>
          <div className={style.content}>
            <p className={style.text}>
              <span>“</span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit
            </p>
            <div className={style.author_wrapper}>
              <div className={style.line_wrapper}>
                <div className={style.line} />
                <div className={style.cicle} />
              </div>
              <p className={style.author}>Edith Lowe</p>
            </div>
            <div className={style.rating}>
              {starsArray.length > 0 &&
                starsArray.map((star, index) => (
                  <div className={style.star} key={index}>
                    <Image src={star} alt="" />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reviews