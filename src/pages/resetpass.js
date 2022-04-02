import Head from "next/head";
import styles from "../styles/auth.module.css";
import Footer from "../components/Footer";
import Image from 'next/image'
import Input from "../components/Input";
import Button from "../components/Button";

const resetpass = () => {
  return (
    <>
          <Head>
        <title>News App | Forgot Password</title>
      </Head>
        <div className={styles.container}>
            <div className={styles['right-respass']}></div>
            <div className={styles['left-respass']}>
                <div className={styles['content-resetpass']}>
                    <div className={styles['header']}>
                        <Image src='/right-arrow.svg' width={15} height={15} alt='arrow'/>
                        <p className="ms-3">Back</p>
                    </div>
                    <h1 className={`mt-5 ${styles['title-resetpass']}`}>DON’T WORRY</h1>   
                    <p>We are here to help you to recover your password. Enter your <br /> email adress that you used to register and we’ll give you <br /> instructions to reset your password.</p> 
                    <Input
                        className={`py-3 ${styles["input-resetpass"]}`}
                        type="email"
                        placeholder="Enter your email addres"
                    />
                    <Button className={`fw-bold my-4 py-3 ${styles['btn-send']}`}>Send Link</Button>
                    <Button className={`fw-bold py-3 ${styles['btn-send2']}`}>Resend Link</Button>
                </div>
                <Footer className='mt-5'/>
            </div>
        </div>
    </>
  )
}

export default resetpass