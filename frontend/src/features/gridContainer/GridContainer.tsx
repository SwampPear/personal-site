import styles from './GridContainer.module.css'


type GridContainerProps = {
  children: JSX.Element | JSX.Element[]
}

const GridContainer = (props: GridContainerProps) => {
  return (
    <div className={styles.container}>
        {props.children}
    </div>
  )
}

export default GridContainer