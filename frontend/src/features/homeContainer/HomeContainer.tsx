import styles from './HomeContainer.module.css'


type HomeContainerProps = {
  children: JSX.Element | JSX.Element[]
}

const HomeContainer = (props: HomeContainerProps) => {
  return (
    <section className={styles.container}>
        {props.children}
    </section>
  )
}

export default HomeContainer