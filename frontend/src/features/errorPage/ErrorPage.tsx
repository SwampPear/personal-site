import styles from './ErrorPage.module.css'
import Link from 'next/link'
import Image from 'next/image'
import gif from '../../error-animation.gif'


type ErrorPageProps = {
    error: string
    text: string
}

const ErrorPage = (props: ErrorPageProps) => {
  return (
    <section className={styles.container}>
      <div className={styles.textContainer}>
        <div className={styles.errorBrandLarge}>
            {props.error}
        </div>
        <div className={styles.errorBrandSmall}>
            {props.text}
        </div>
        <div className={styles.goBackButtonContainer}>
            <Link href='/' className={styles.goBackButton}>
                &#8592;&ensp;Retreat to Safety
            </Link>
        </div>
      </div>
      <div className={styles.animationContainer}>
        <Image className={styles.testImage} src={gif} alt=''/>
      </div>
    </section>
  )
}

export default ErrorPage