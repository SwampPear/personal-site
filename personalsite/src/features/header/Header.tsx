import styles from './Header.module.css'

export function Header() {
  return (
    <header>
        <div className={styles.brand}>
            <span className={styles.title}>
                Michael Vaden
            </span>
        </div>
        <button className={styles.darkmode}>
        </button>
    </header>
  );
}