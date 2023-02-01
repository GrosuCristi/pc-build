import styles from "@/styles/Header.module.css"

export default function Header (props) {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.logo}>Logo</h1>
        <nav className={styles.navigation}>
          <span>Home</span>
          <span>Our builds</span>
          <span>Contact</span>
          <span>About</span>
          <span>
            <span class="material-symbols-outlined">search</span>
          </span>
        </nav>
      </div>
    </header>
  )
}