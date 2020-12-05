import { useRouter } from 'next/router';
import Link from 'next/link'
import styles from '../styles/Home.module.css';
import { motion } from 'framer-motion'

export default function product() {
  const { 
    query: {product}
  } = useRouter();
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>{product}</h1>
      <figure className={styles['thumbnail-wrapper']}>
        <motion.img 
          layoutId={product}
          src={product + '.jpg'} 
          className={styles['product-thumbnail']} 
          alt={product + 'の画像'} 
        />
      </figure>
      <p className={styles['textlink']}>
        <Link href="/">
          <a>
            TOPページに戻る
          </a>
        </Link>
      </p>
    </div>
  )
}
