import Head from 'next/head'
import Navbar from '../components/Navbar'
import * as BsIcons from "react-icons/fa";
import styles from '../styles/main.module.css'
import Button from '../components/Button';

const writeArticle = () => {
  return (
    <div className={styles.container}>
    <Head>
      <title>News App | Write Article</title>
    </Head>
    <Navbar />
    <div className={styles['title-write']}>
        <div className={styles['icon-back']}>
        <BsIcons.FaChevronLeft/>
        <h6 className='ms-3'>Back</h6>
        </div>
        <h2>Write Article</h2>
    </div>
    <div className="d-flex flex-row p-5">
        <div className={`${styles['chose-photo']}`}>
            <div className={`${styles['content-chose']}`}>
                <div className={styles['dash']}></div>
            </div>
        </div>
        <Button></Button>
    </div>
    </div>
  )
}

export default writeArticle