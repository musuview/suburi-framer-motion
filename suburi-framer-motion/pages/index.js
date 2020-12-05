import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import product from './[product]'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>flamer-motionの素振りです</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <h1>flamer-motionの素振りです</h1>
        <div className={styles['thumbnail-wrapper']}>
          {['white','black','leather','gray'].map(product => 
            <figure>
              <Link href={product}>
                <a>
                  <img src={product + '.jpg'} className={styles['thumbnail-image']} alt={product + 'の画像'} />
                </a>
              </Link>
            </figure>
          )}
        </div>
    </div>
  )
}
