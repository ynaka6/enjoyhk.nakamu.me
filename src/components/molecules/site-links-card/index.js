import { Link } from "gatsby"
import React from "react"
import CircleCheckIcon from "@components/atoms/icon/circle-check"
import styles from "./site-links-card.module.css"

const ProfileLinksCard = () => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>SITE LINKS</h2>
      <ul className="list-inside">
        <li>
          <div className="flex items-center my-2">
            <CircleCheckIcon className="text-primary fill-current w-6 h-6 mr-1" />
              <Link to='/contact' className="text-base">
                お問い合わせ
              </Link>
          </div>
        </li>
        <li>
          <div className="flex items-center my-2">
            <CircleCheckIcon className="text-primary fill-current w-6 h-6 mr-1" />
            <Link to='/policy/privacy' className="text-base">
              プライバシーポリシー
            </Link>
          </div>
        </li>
        <li>
          <div className="flex items-center my-2">
            <CircleCheckIcon className="text-primary fill-current w-6 h-6 mr-1" />
            <Link to='/made-with' className="text-base">
              Made with
            </Link>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default ProfileLinksCard
