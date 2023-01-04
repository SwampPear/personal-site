import styles from './Header.module.css'
import logo from '../../../src/gear.svg'
import darkmode from '../../../src/sun.svg'
import { Icon } from '../icon/Icon'

export function Header() {
  return (
    <header>
        <div className={styles.brand}>
        <Icon />
            <span className={styles.title}>
                Michael Vaden
            </span>
        </div>
        <button className={styles.darkmode}>
            <img src={darkmode}/>
        </button>
    </header>
  );
}