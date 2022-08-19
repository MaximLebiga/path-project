import Link from 'next/link'
import style from "./MainLink.module.css"

const MainLink = ({filled, text, extraStyles}) => {
  return (
    <div className={filled ? style.wrapper_filled : style.wrapper}>
      <Link href="/">
        <a
          className={`${extraStyles ? extraStyles : ''} ${
            filled ? style.nav_link_filled : style.nav_link
          }`}
        >
          {text}
        </a>
      </Link>
    </div>
  )
}

export default MainLink
