import React from "react"
import Image from "@components/atoms/image"
import styles from "./profile-card.module.css"

const ProfileCard = () => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>PROFILE</h2>
      <a
        href="https://nakamu.life/"
        target="_blank"
        rel="nofollow noopener noreferrer"
        className={styles.profileSiteLink}
        style={{ width: `100px` }}
      >
        <Image filename="avator.jpg" alt="GatsbyJS" className="rounded-full mb-2" />
        <span>なかむ</span>
      </a>
      <p className={styles.description}>
        香港在住４年目になるWEBエンジニアのなかむです。 現在は、LaravelやRailsを利用したWEB開発を中心にエンジニアをしています。 顧客は全て日本の企業になります。リモート開発にて各企業様の支援を行なっております
      </p>
    </div>
  )
}

export default ProfileCard
