import React from "react"
import CircleCheckIcon from "@components/atoms/icon/circle-check"
import styles from "./profile-links-card.module.css"

const ProfileLinksCard = () => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>LINKS</h2>
      <ul className="list-inside">
        <li>
          <div className="flex items-center my-2">
            <CircleCheckIcon className="text-primary fill-current w-6 h-6 mr-1" />
              <div>
                <a
                  href="https://nakamu.life/"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="text-base"
                >
                  PROFILE
                </a>
                <p className="text-xs text-gray-700">エンジニア経験などプロフィールをまとめたサイト</p>
            </div>
          </div>
        </li>
        <li>
          <div className="flex items-center my-2">
            <CircleCheckIcon className="text-primary fill-current w-6 h-6 mr-1" />
              <div>
                <a
                  href="https://blog.nakamu.life/"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="text-base"
                >
                  技術ブログ
                </a>
                <p className="text-xs text-gray-700">エンジニアとしての技術情報をまとめたブログ</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default ProfileLinksCard
