import style from "./BenefitsItem.module.css"

const BenefitsItem = ({icon, firstPart, secondPart, thirdPart}) => {
  return (
    <div className={style.wrapper}>
      <div className={style.icon}>{icon}</div>
      <p className={style.text}>
        {firstPart}
        <span>{secondPart}</span>
        {thirdPart}
      </p>
    </div>
  )
}

export default BenefitsItem