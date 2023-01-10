import styles from './Contact.module.css'

import { selectDarkModeState, selectDarkModeInit } from '../darkmode/darkModeSlice'
import { useAppSelector } from '../../app/hooks'


const Contact = () => {
  const darkmode = useAppSelector( selectDarkModeState )
  const darkmodeInit = useAppSelector( selectDarkModeInit )

  return (
    <div className={styles.container}>
      <form method="post">
        <div className={styles.row}>
          <div className={styles.input}>
            <input 
              type="text" 
              name="username"                                                                                                                                                                                                  
              autoFocus={true} 
              autoCapitalize="none" 
              autoComplete="username"                                                                                                                                                                          
              maxLength={32} 
              required={true}
              className={`${darkmodeInit ? (darkmode ? styles.inputToDark : styles.inputFromDark) : ''}`}
            />
            <label className={`${darkmodeInit ? (darkmode ? styles.textToDark : styles.textFromDark) : ''}`}>
              Name
            </label>
          </div>
          <div className={styles.input}>
            <input 
              type="text" 
              name="email"                                                                                                                                                                                                  
              autoFocus={true} 
              autoCapitalize="none" 
              autoComplete="email"                                                                                                                                                                          
              maxLength={64} 
              required={true}
              className={`${darkmodeInit ? (darkmode ? styles.inputToDark : styles.inputFromDark) : ''}`}
            />
            <label className={`${darkmodeInit ? (darkmode ? styles.textToDark : styles.textFromDark) : ''}`}>
              Email
            </label>
          </div>
        </div>
        <div className={styles.textarea}>
          <label className={`${darkmodeInit ? (darkmode ? styles.textToDark : styles.textFromDark) : ''}`}>
            What can I help you with?
          </label>
          <textarea 
            name="inquiry"                                                                                                                                                                                                  
            autoFocus={true} 
            autoCapitalize="none" 
            autoComplete="inquiry"                                                                                                                                                                          
            maxLength={2047} 
            required={true}
            className={`${darkmodeInit ? (darkmode ? styles.inputToDark : styles.inputFromDark) : ''}`}
          />
        </div>
      </form>                                                                                                                                                                                                                                 
    </div>
  )
}

export default Contact