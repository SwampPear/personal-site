import styles from './Contact.module.css'
import React, { useState } from 'react'

import { selectDarkModeState, selectDarkModeInit } from '../darkmode/darkModeSlice'
import { useAppSelector } from '../../app/hooks'

import { gql, useMutation } from '@apollo/client'
import { client } from '../../../pages/_app'


const createContact = (name: string, email: string, content: string) => {
  return gql`
  mutation {
    createContact(contactData: {name: "${name}", email: "${email}", content:"${content}"}) {
      contact {
        name
        email
        content
      }
    }
  }`
}


const Contact = () => {
  const darkmode = useAppSelector( selectDarkModeState )
  const darkmodeInit = useAppSelector( selectDarkModeInit )

  const [ name, setName ] = useState( '' )
  const [ email, setEmail ] = useState( '' )
  const [ content, setContent ] = useState( '' )

  const [ sendDat ] = useMutation( createContact( name, email, content ) )

  const sendData = () => {
    client.mutate({
      mutation: createContact( name, email, content )
    })
  }

  const updateNameValue = ( e: React.FormEvent<HTMLInputElement> ) => {
    const value = e.currentTarget.value
 
    setName( value )
  }

  const updateEmailValue = ( e: React.FormEvent<HTMLInputElement> ) => {
    const value = e.currentTarget.value
 
    setEmail( value )
  }

  const updateContentValue = ( e: React.FormEvent<HTMLTextAreaElement> ) => {
    const value = e.currentTarget.value
 
    setContent( value )
  }


  return (
    <div className={styles.container}>
      <form onSubmit={ ( e: React.SyntheticEvent ) => {
          e.preventDefault()
          sendData()
        } } 
        method='post'
      >
        <div className={styles.row}>
          <div className={styles.input}>
            <input 
              type='text'
              name='username'                                                                                                                                                                                                  
              autoFocus={true} 
              autoCapitalize='none'
              autoComplete='username'                                                                                                                                                                          
              maxLength={127} 
              required={true}
              onChange={updateNameValue}
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
              maxLength={255} 
              required={true}
              onChange={updateEmailValue}
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
            onChange={updateContentValue}
            className={`${darkmodeInit ? (darkmode ? styles.inputToDark : styles.inputFromDark) : ''}`}
          />
        </div>
        <div className={styles.submitButtonContainer}>
          <button type='submit' className={styles.submitButton}>Submit</button>
        </div>
      </form>                                                                                                                                                                                                                                 
    </div>
  )
}

export default Contact