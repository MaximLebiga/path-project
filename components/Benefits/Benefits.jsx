import BenefitsItem from "../BenefitsItem/BenefitsItem"
import FirstIcon from "../../images/benefits/firstIcon.svg"
import SecondIcon from '../../images/benefits/secondIcon.svg'
import style from "./Benefits.module.css"

const Benefits = () => {
  return (
    <div className={style.wrapper}>
      <h2 className={style.title}>Why Path?</h2>
      <div className={style.benefits}>
        <BenefitsItem
          icon={<FirstIcon />}
          firstPart="Just"
          secondPart="39%"
          thirdPart="of referrals get an interview."
        />
        <BenefitsItem
          icon={<SecondIcon />}
          firstPart="Only"
          secondPart="6%"
          thirdPart="of job applications by bootcampers get an interview."
        />
      </div>
    </div>
  )
}

export default Benefits