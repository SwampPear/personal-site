import React from 'react';
import styles from './Contact.module.css'


const Contact = () => {

  return (
    <div className={`${styles.container} ${styles.fadeIn}`}>
      <div className="login">                                                                                                                                                                                                                       
      <h2>Login</h2>                                                                                                                                                                                                                                                                                                                                                                                                                                                   
      <form method="post">                                                                                                                                                                                                                                                                                                                                                                                                                               
        <div className="login__input">                                                                                                                                                                                                            
          <input type="text" name="username"                                                                                                                                                                                                  
          autoFocus={true} autoCapitalize="none" autoComplete="username"                                                                                                                                                                          
          maxLength={32} required={true} id="id_username"/>                                                                                                                                                                                        
          <label>MyID</label>                                                                                                                                                                                                                 
        </div>                                                                                                                                                                                                                                
                                                                                                                                                                                                                                              
        <div className="login__input">                                                                                                                                                                                                            
          <input type="password" name="password"                                                                                                                                                                                              
          autoComplete="current-password" required={true} id="id_password"/>                                                                                                                                                                       
          <label>Password</label>                                                                                                                                                                                                             
        </div>                                                                                                                                                                                                                                
                                                                                                                                                                                                                                              
        <div className="login__button-wrapper">                                                                                                                                                                                                   
          <button className="button button-blue" type="submit">Login</button>                                                                                                                                                                     
        </div>                                                                                                                                                                                                                                
                                                                                                                                                                                                                                              
      </form>                                                                                                                                                                                                                                 
    </div>      
    </div> 
  )
}

export default Contact