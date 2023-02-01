import styles from "@/styles/TopComputers.module.css";
import Image from "next/image";

export default function TopComputers () {
  return (
    <>
      <h2 className={styles.title}>Top computers</h2>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <div className={styles.image}>
            <Image fill src="/pc1.jpg"/>
          </div>
          <span className={styles.name}>X-Tron 9</span>
          <span className={styles.price}>$4 500</span>
        </div>
        <div className={styles.card}>
        <div className={styles.image}>
            <Image fill src="/pc2.jpg"/>
          </div>
          <span className={styles.name}>X-Tron 7</span>
          <span className={styles.price}>$3299</span>
        </div>
        <div className={styles.card}>
        <div className={styles.image}>
            <Image fill src="/pc3.jpg"/>
          </div>
          <span className={styles.name}>X-Tron 5</span>
          <span className={styles.price}>$1119</span>
        </div>
      </div>
    </>
  )
}