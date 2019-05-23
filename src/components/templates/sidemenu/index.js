import React from "react"
import styles from "./sidemenu.module.css"
import ProfileCard from '@components/molecules/profile-card'
import ProfileLinksCard from '@components/molecules/profile-links-card'
import SiteLinksCard from '@components/molecules/site-links-card'

const Sidemenu = () => (
  <div>
    <ProfileCard />
    <div className={styles.hr} />
    <ProfileLinksCard />
    <div className={styles.hr} />
    <SiteLinksCard />
  </div>
)

export default Sidemenu
