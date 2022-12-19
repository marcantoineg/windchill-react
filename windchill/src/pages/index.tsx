import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import * as styles from "./index.module.css"
import { WindchillForm } from "../components/windchill-form"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className={styles.pageStyles}>
      <h1 className={styles.headingStyles}>
        Congratulations
        <br />
        <span className={styles.headingAccentStyles}>— you just made it to windchill-react 🌡</span>
      </h1>

      <WindchillForm/>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>💨🌡 Windchill</title>
