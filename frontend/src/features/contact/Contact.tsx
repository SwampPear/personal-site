import React from 'react';
import styles from './Contact.module.css'


const Contact = () => {

  return (
    <div className={`${styles.container} ${styles.fadeIn}`}>
      <form method="post">
        <div className={styles.row}>
          <div className={styles.input}>
            <input type="text" name="username"                                                                                                                                                                                                  
            autoFocus={true} autoCapitalize="none" autoComplete="username"                                                                                                                                                                          
            maxLength={32} required={true}/>
            <label>Name</label>
          </div>
          <div className={styles.input}>
            <input type="text" name="email"                                                                                                                                                                                                  
            autoFocus={true} autoCapitalize="none" autoComplete="email"                                                                                                                                                                          
            maxLength={64} required={true}/>
            <label>Email</label>
          </div>
        </div>
        <div className={styles.textarea}>
          <label>What can I help you with?</label>
          <textarea name="inquiry"                                                                                                                                                                                                  
          autoFocus={true} autoCapitalize="none" autoComplete="inquiry"                                                                                                                                                                          
          maxLength={32} required={true}/>
        </div>
      </form>                                                                                                                                                                                                                                 
    </div> 
  )
}

export default Contact