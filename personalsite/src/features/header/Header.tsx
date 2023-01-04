import styles from './Header.module.css'
import { Icon } from '../icon/Icon'
import { DarkMode } from '../darkmode/DarkMode' 

export function Header() {
  return (
    <header>
        <div className={styles.brand}>
        <Icon />
            <span className={styles.title}>
                Michael Vaden
            </span>
        </div>
        <DarkMode/>
    </header>
  );
}