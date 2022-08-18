import style from "./BenefitsItem.module.css"

const BenefitsItem = ({icon, firstPart, secondPart, thirdPart}) => {
  return (
    <div className={style.wrapper}>
      <div>
        {icon}
        <p className={style.text}>
          {firstPart}
          <span>{secondPart}</span>
          {thirdPart}
        </p>
      </div>
    </div>
  )
}

export default BenefitsItem