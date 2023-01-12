import styles from './Error404.module.css'
import Link from 'next/link'


const Error404 = () => {
  return (
    <section className={styles.container}>
      <div className={styles.textContainer}>
        <div className={styles.errorBrandLarge}>
            404
        </div>
        <div className={styles.errorBrandSmall}>
            I think you've gotten lost! Let's get you back home.
        </div>
        <div className={styles.goBackButtonContainer}>
            <Link href='/' className={styles.goBackButton}>
                &#8592;&ensp;Retreat to Safety
            </Link>
        </div>
      </div>
      <div className={styles.animationContainer}></div>
    </section>
  )
}

export default Error404