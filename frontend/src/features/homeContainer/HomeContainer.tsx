import styles from './HomeContainer.module.css'


type SectionProps = {
  children: JSX.Element | JSX.Element[]
}

const HomeContainer = (props: SectionProps) => {
  return (
    <section className={styles.container}>
        {props.children}
    </section>
  )
}

export default HomeContainer