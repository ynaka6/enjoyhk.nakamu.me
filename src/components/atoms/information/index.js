import React from "react"
import InfoStandardSolidIcon from "@components/atoms/icon/info-standard-solid"
import styles from "./information.module.css"


const Information = ({ message }) => {
  return (
    <div className={styles.box}>
      <div>
        <InfoStandardSolidIcon className={styles.icon} />
      </div>
      <p className={styles.message}>
        {message}
      </p>
    </div>
  )
}

export default Information
