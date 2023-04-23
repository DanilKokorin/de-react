import React from 'react'
import { useRouteError, Link } from 'react-router-dom'
import styles from './ErrorPage.module.scss'

export const ErrorPage = () => {
  const error = useRouteError()
  return (
    <>
    <section className={styles.error}>
      <h1>404 Not Found</h1>
      <Link className={styles.errorLink} to='/'>Go to home page</Link>
    </section>
    </>
  )
}