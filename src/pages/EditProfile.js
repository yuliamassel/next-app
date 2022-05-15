import Head from "next/head";
import Image from "next/image"
import useSWR from "swr";
import { useState } from "react";
import Input from "../components/Input";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Button from "../components/Button"
import Footer from "../components/Footer";
import styles from "../styles/main.module.css";
import Addphoto from "../components/AddPhoto";


const fetcher = (...args) => fetch(...args).then((res) => res.json());

const EditProfile = () => {

    const token =
    typeof window !== "undefined" &&
    JSON.parse(localStorage.getItem("userInfo"));
  const { data, error } = useSWR(
    "http://localhost:4000/users/profile",
    {
      headers: { Authorization: `bearer : ${token}` },
    },
    fetcher
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>News App | Edit Profile</title>
      </Head>
      <Navbar />
      <div className={styles["content-edit"]}>
        <p className={`mt-5 ms-5 ${styles["title-edit"]}`}>Profile</p>
        <Sidebar />
        <div className={`pt-5 ${styles["edit-profile"]}`}>
        <Addphoto/>
          <div className={`${styles["forms"]}`}>
              <form action="">
              <div className={`me-5 ${styles["input-right"]}`}>
              <div className="">
               <label className={`mb-2 ${styles["txt-label"]}`}>Username:</label><br />
              <Input
                className={styles["input-edit"]}
                type="text"
                name='username'
                // value={form.password}
                // onChange={handleChange}
                placeholder={token? token.username : ""}
              />
              </div>
              <div className="my-4">
               <label className={`mb-2 ${styles["txt-label"]}`}>Email:</label><br />
              <Input
                className={styles["input-edit"]}
                type="email"
                name='email'
                // value={form.password}
                // onChange={handleChange}
                placeholder={token? token.email : ""}
              />
              </div>
              <div className="">
               <label className={`mb-2 ${styles["txt-label"]}`}>Job:</label><br />
              <Input
                className={styles["input-edit"]}
                type="text"
                name='job'
                // value={form.password}
                // onChange={handleChange}
                placeholder={token? token.job : ""}
              />
              </div>
              </div>
              </form>
              <form action="">
              <div className={`${styles["input-left"]}`}>
              <div className="">
               <label className={`mb-2 ${styles["txt-label"]}`}>Name:</label><br />
              <Input
                className={styles["input-edit"]}
                type="text"
                name='name'
                // value={form.password}
                // onChange={handleChange}
                placeholder={token? token.name : ""}
              />
              </div>
              <div className="my-4">
               <label className={`mb-2 ${styles["txt-label"]}`}>Password:</label><br />
              <Input
                className={styles["input-edit"]}
                type="password"
                name='password'
                // value={form.password}
                // onChange={handleChange}
                placeholder={token? token.password : ""}
              />
              </div>
              <div className="">
               <label className={`mb-2 ${styles["txt-label"]}`}>About:</label><br />
              <textarea
                className={styles["input-about"]}
                type="text"
                name='about'
                // value={form.password}
                // onChange={handleChange}
                // placeholder="Enter your password"
              ></textarea>
              </div>
              </div>
              </form>
          </div>
              <Button className={`${styles["btn-request"]}`}>Request to be an author</Button>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default EditProfile;
