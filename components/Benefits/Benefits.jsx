import BenefitsItem from "../BenefitsItem/BenefitsItem"
import style from "./Benefits.module.css"
import Suitcase from "../../icons/Suitcase"
import Person from "../../icons/Person"

const Benefits = () => {
  return (
    <div className={style.wrapper}>
      <h2 className={style.title}>Why Path?</h2>
      <div className={style.benefits}>
        <BenefitsItem
          icon={<Person width="40" height="40" />}
          firstPart="Just"
          secondPart="39%"
          thirdPart="of referrals get an interview."
        />
        <BenefitsItem
          icon={<Suitcase width="40" height="40" />}
          firstPart="Only"
          secondPart="6%"
          thirdPart="of job applications by bootcampers get an interview."
        />
      </div>
    </div>
  )
}

export default Benefits