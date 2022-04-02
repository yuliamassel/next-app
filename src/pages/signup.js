// import Image from 'next/image'
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Input from "../components/Input";
import styles from "../styles/auth.module.css";
import { axiosInstance } from "./api/axios";
import { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit =(e) => {
    e.preventDefault()
    axios
    .post('http://localhost:4000/users/register', form)
      .then((res) => {
        console.log('ini from register',form);
        router.push("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleClick = (e) => {
    e.preventDefault();
    router.push("/signup");
  };

  return (
    <>
      <Head>
        <title>News App | SignUp</title>
      </Head>
      <div className={styles.container}>
        <div className={styles["right-section"]}>
          {/* <Image src='/display-auth.svg' width={100} height={100} alt='display'/> */}
        </div>
        <div className={styles["left-section"]}>
          <p className={styles["title-signup"]}>Sign Up</p>
          <form onSubmit={handleSubmit}>
            <div>
              <label className={`mb-2 ${styles["txt-label"]}`}>
               Name :
              </label>
              <Input
                className={styles["input-register"]}
                type="text"
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your Name"
              />

              <div>
                <label className={`mt-3 ${styles["txt-label"]}`}>
                  Email Adress :
                </label>
                <Input
                  className={styles["input-register"]}
                  type="email"
                  onChange={handleChange}
                  name="email"
                  value={form.email}
                  placeholder="Enter your email addres"
                />
              </div>
              <div className="my-4">
                <label className={`mb-2 ${styles["txt-label"]}`}>
                  Password :
                </label>
                <br />
                <Input
                  className={styles["input-register"]}
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                />
              </div>
              <Button
                type="submit"
                className={`mt-5 mb-4 fw-bold ${styles["btn-signup"]}`}
              >
                Sign Up
              </Button>
              {/* --------------------------- */}
              <p className={`text-center me-5 ${styles["txt-mid"]}`}>
                Or sign up with
              </p>
              <div className={`mt-3 ${styles["img-grup"]}`}>
                <div className="">
                  <Image
                    src="/Google.svg"
                    width={50}
                    height={50}
                    alt="google"
                  />
                </div>
                <div className="mx-5">
                  <Image
                    src="/Facebook.svg"
                    width={50}
                    height={50}
                    alt="facebook"
                  />
                </div>
                <div>
                  <Image
                    src="/Twitter.svg"
                    width={50}
                    height={50}
                    alt="twitter"
                  />
                </div>
              </div>
              <div className={`me-5 mt-3 ${styles["text-line"]}`}>
                <p>Already have an account</p>
              </div>
              <Button
                onClick={handleClick}
                className={`mt-4 mb-4 fw-bold ${styles["btn-login"]}`}
              >
                Login Here
              </Button>
              <p className={`${styles["txt-bot"]}`}>
                <Link href="/">Back to Home Page</Link>
              </p>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default SignUp;
