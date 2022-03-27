// import Image from 'next/image'
import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Button from "../components/Button";
import Footer from "../components/footer";
import Input from "../components/Input";
import styles from "../styles/auth.module.css";
import authLogin from "./api/auth";

const Login = () => {

  const router = useRouter()
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // const handleLogin =() => {
  //   console.log('INI login',form);
  //   if (typeof window !== 'undefined'){
  //   axios
  //   .post('http://localhost:4000/users/login', form)
  //     .then((res) => {
  //       console.log('ini from register',form);
  //       localStorage.setItem('userInfo', JSON.stringify({id:result.id, token:result.token}))
  //       router.push("/");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   }
  // };

  const handleLogin=()=>{
    authLogin(form)
    .then((res)=>{
      alert(`halo ${res.email}`)
      router.push('/')
    })
    .catch((err)=>{
      console.log('ada error',err);
    })
  }

  const handleClick = (e) => {
    e.preventDefault()
    router.push('/signup')
  }

  return (
    <>
      <Head>
        <title>News App | Login</title>
      </Head>
      <div className={styles.container}>
        <div className={styles["right-section"]}>
          {/* <Image src='/display-auth.svg' width={100} height={100} alt='display'/> */}
        </div>
        <div className={styles["left-section"]}>
          <p className={styles["title-signup"]}>Login</p>
          <form>
            <div>
              <label className={`mb-2 ${styles["txt-label"]}`}>Email Adress :</label>
              <Input
                className={styles["input-register"]}
                type="email"
                onChange={handleChange}
                name="email"
                value={form.email}
                placeholder="Enter your email addres"
              />
              <div className="my-4">
               <label className={`mb-2 ${styles["txt-label"]}`}>Password :</label><br />
              <Input
                className={styles["input-register"]}
                type="password"
                name='password'
                value={form.password}
                onChange={handleChange}
                placeholder="Enter your password"
              />
              </div>
              <Button onClick={()=>handleLogin()} className={`mt-5 mb-4 fw-bold ${styles['btn-signup']}`}>Login</Button>
              <p className={`text-center me-5 my-4 ${styles['txt-mid']}`}>Or login with</p>
              <div className={`my-5 ${styles['img-grup']}`}>
                <div className="">
                <Image src='/Google.svg' width={50} height={50} alt='google'/>
                </div>
                <div className="mx-5">
                <Image src='/Facebook.svg' width={50} height={50} alt='facebook'/>
                </div>
                <div>
                <Image src='/Twitter.svg' width={50} height={50} alt='twitter'/>
                </div>
              </div>
              <div className={`me-5 mt-3 ${styles["text-line"]}`}>
              <p>Don’t have an account?</p>
              </div>
              <Button onClick={handleClick} className={`mt-4 mb-4 fw-bold ${styles['btn-login']}`}>Sign Up Now</Button>
              <p className={`${styles['txt-bot']}`}><Link href="/">Back to Home Page</Link></p>
            </div>
          </form>
        </div>
      <Footer />
      </div>
    </>
  );
};

export default Login;
