import React from "react"
import styles from "./sidemenu.module.css"
import ProfileCard from '@components/molecules/profile-card'
import ProfileSnsCard from '@components/molecules/profile-sns-card'
import ProfileLinksCard from '@components/molecules/profile-links-card'
import SiteLinksCard from '@components/molecules/site-links-card'
import TagsCard from '@components/molecules/tags-card'

const Sidemenu = ({ tags }) => (
  <div>
    <ProfileCard />
    <div className={styles.hr} />
    <ProfileSnsCard />
    <div className={styles.hr} />
    <ProfileLinksCard />
    <div className={styles.hr} />
    <SiteLinksCard />
    <div className={styles.hr} />
    <TagsCard tags={tags} />
  </div>
)

export default Sidemenu
