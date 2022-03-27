import Head from "next/head";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import styles from "../styles/main.module.css";
import * as BsIcons from "react-icons/fa";
import Modal from "../components/Modal";
import { useState } from "react";

const Category = () => {
  const [openModal, setOpenModal]= useState()

  return (
    <div className={styles.container}>
      <Head>
        <title>News App | Category</title>
      </Head>
      <Navbar />
      <div className={styles["content-category"]}>
        <div className={styles["display-category"]}>
          <div className={styles["txt-category"]}>
            <h1>
              Choose Article by <br /> Category
            </h1>
            <p>
              Category helps you to read another article that you <br /> haven’t
              thought before. You able to read all articles for <br /> free. Enjoy the
              reading!
            </p>
          </div>
        </div>
        <div className="ps-5 ms-4 mt-4">
        <div className={`${styles['filter']}`}>
            <Button className={`me-4 ${styles['btn-filter']}`}>
                <BsIcons.FaFilter size={25} onClick={()=>{setOpenModal(true)}}/>
            </Button>
            <Button className={`${styles['btn-write']}`}> + Write an Article</Button>
            {openModal &&  <Modal className='d-flex flex-column' closeModal={setOpenModal}>
                <div className={`${styles['content-filter']}`}><p className="ms-4 mt-3"> Name (A-Z)</p></div>
                <div className={`${styles['content-filter']}`}><p className="ms-4 mt-3"> Name (Z-A)</p></div>
                <div className={`${styles['content-filter']}`}><p className="ms-4 mt-3"> Category</p></div>
                <div className={`${styles['content-filter']}`}><p className="ms-4 mt-3"> Last Added</p></div>
                <div className={`${styles['content-filter2']}`}><p className="ms-4 mt-3"> Last Modified</p></div>
            </Modal>}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
