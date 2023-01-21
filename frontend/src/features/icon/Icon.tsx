import styles from './Icon.module.css'
import Image from 'next/image'
import img from '../../swamp-pear.svg'


const Icon = () => {
  return (
    <Image className={styles.icon} src={img} alt=''/>
  )
}

export default Icon