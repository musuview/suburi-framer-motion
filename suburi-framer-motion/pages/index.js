import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>flamer-motionの素振りです</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <h1 className={styles.h1}>flamer-motionの素振りです</h1>
        <div className={styles['thumbnail-wrapper']}>
          {['white','black','leather','gray'].map(product => 
            <figure key={product}>
              <Link key={product} href={product}>
                <a className={styles['thumbnail-link']}>
                  <motion.img 
                    layoutId={product}
                    src={product + '.jpg'} 
                    className={styles['thumbnail-image']} 
                    alt={product + 'の画像'} 
                    animate={{scale: 1}}
                    whileHover={{scale: 1.1}}
                  />
                </a>
              </Link>
              <figcaption className={styles['item-color']}>{product}</figcaption>
            </figure>
          )}
        </div>
    </div>
  )
}
