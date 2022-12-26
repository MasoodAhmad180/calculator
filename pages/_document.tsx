import { Html, Head, Main, NextScript } from 'next/document'
import styles from '../styles/Home.module.css'
import Home from './index'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        
       { <NextScript />}
      </body>
    </Html>
  )
}
