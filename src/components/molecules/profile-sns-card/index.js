import React from "react"
import TwitterIcon from "@components/atoms/icon/twitter"
import InstagramIcon from "@components/atoms/icon/instagram"
import FeedlyIcon from "@components/atoms/icon/feedly"
import styles from "./profile-sns-card.module.css"

const ProfileSnsCard = () => {
  const rssUrl = encodeURI(`${process.env.SITE_URL}/rss.xml`)
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Follow</h2>
      <div className="flex">
        <a
          href="https://twitter.com/nakanakamu0828"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="twitter"
          className="text-twitter mr-3 none-external-link"
        >
          <TwitterIcon className="fill-current w-8 h-8" />
        </a>
        <a
          href="https://www.instagram.com/____nakamu____/"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="instagram"
          className="text-instagram mr-3 none-external-link"
        >
          <InstagramIcon className="fill-current w-8 h-8" />
        </a>
        <a
          href={`https://feedly.com/i/subscription/feed/${rssUrl}`}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="feedly"
          className="text-feedly none-external-link"
        >
          <FeedlyIcon className="fill-current w-8 h-8" />
        </a>
      </div>
    </div>
  )
}

export default ProfileSnsCard
