import Image from "next/image"
import styles from "@/styles/Banner.module.css"

export default function Slideshow (props) {
  return (
    <div className={styles.banner}>
      <Image fill src="/gaming.jpg" style={{objectFit: 'cover', objectPosition: 'center'}}/>
      <h1>The best computers in Switzerland</h1>
      <span class="material-symbols-outlined">mouse</span>
    </div>
  )
}