import React from "react"
import Image from "@components/atoms/image";
import styles from "./footer.module.css"

const Footer = () => (
<footer>
  <div className={styles.container}>
    <div className={styles.leaderBoard}>
      <a
        href="https://www.instagram.com/____nakamu____/"
        target="_blank"
        rel="nofollow noopener noreferrer"
        className="block w-full lg:w-9/12 none-external-link"
      >
        <Image filename="leader-board-instagram.png" alt="____nakamu____" />
      </a>
    </div>
    <div className={styles.copyright}>
      Copyright © {new Date().getFullYear()} nnn All Rights Reserved.
    </div>
    <div className={styles.madeWith}>
      made with GatsbyJS
      <div
        className="ml-1"
        style={{ width: `20px` }}
      >
        <Image filename="gatsby-icon.png" alt="GatsbyJS"　/>
      </div>
    </div>
  </div>
</footer>
)

export default Footer
