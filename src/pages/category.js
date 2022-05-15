import Head from "next/head";
import Image from "next/image"
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
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
        <div className="ps-5 mx-4 mt-4 d-flex flex-row justify-content-between">
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
        <p className={`${styles['amount-categories']}`}>18 categories</p>
        </div>
        <div className="mb-5">
          <p className={`text-center mt-0 ${styles["click-categories"]}`}>Click the category to explore articles</p>
          <div className={`ps-5 mx-5 ${styles["category-group"]}`}>
            <div>
            <div className={`mb-0 ${styles["percategory"]}`}>
              <Image src="/health.svg" width={200} height={220} alt="categories"/>
              <div className={styles["txt-200"]}>
              <p>+200 <br />Articles</p>
              </div>
            </div>
              <h6 className={`mx-5 ps-3 ${styles["desc-category"]}`}>Health</h6>
            </div>
            <div>
            <div className={`mb-0 ${styles["percategory"]}`}>
              <Image src="/economy2.svg" width={200} height={220} alt="categories"/>
              <div className={styles["txt-200"]}>
              <p>+200 <br />Articles</p>
              </div>
            </div>
              <h6 className={`mx-5 ps-3 ${styles["desc-category"]}`}>Health</h6>
            </div>
            <div>
            <div className={`mb-0 ${styles["percategory"]}`}>
              <Image src="/trending.svg" width={200} height={220} alt="categories"/>
              <div className={styles["txt-200"]}>
              <p>+200 <br />Articles</p>
              </div>
            </div>
              <h6 className={`mx-5 ps-3 ${styles["desc-category"]}`}>Health</h6>
            </div>
            <div>
            <div className={`mb-0 ${styles["percategory"]}`}>
              <Image src="/country2.svg" width={200} height={220} alt="categories"/>
              <div className={styles["txt-200"]}>
              <p>+200 <br />Articles</p>
              </div>
            </div>
              <h6 className={`mx-5 ps-3 ${styles["desc-category"]}`}>Health</h6>
            </div>
            <div>
            <div className={`mb-0 ${styles["percategory"]}`}>
              <Image src="/technology.svg" width={200} height={220} alt="categories"/>
              <div className={styles["txt-200"]}>
              <p>+200 <br />Articles</p>
              </div>
            </div>
              <h6 className={`mx-5 ps-3 ${styles["desc-category"]}`}>Health</h6>
            </div>
            <div>
            <div className={`mb-0 ${styles["percategory"]}`}>
              <Image src="/health.svg" width={200} height={220} alt="categories"/>
              <div className={styles["txt-200"]}>
              <p>+200 <br />Articles</p>
              </div>
            </div>
              <h6 className={`mx-5 ps-3 ${styles["desc-category"]}`}>Health</h6>
            </div>
            <div>
            <div className={`mb-0 ${styles["percategory"]}`}>
              <Image src="/trending.svg" width={200} height={220} alt="categories"/>
              <div className={styles["txt-200"]}>
              <p>+200 <br />Articles</p>
              </div>
            </div>
              <h6 className={`mx-5 ps-3 ${styles["desc-category"]}`}>Health</h6>
            </div>

            <div>
            <div className={`mb-0 ${styles["percategory"]}`}>
              <Image src="/holiday.svg" width={200} height={220} alt="categories"/>
              <div className={styles["txt-200"]}>
              <p>+200 <br />Articles</p>
              </div>
            </div>
              <h6 className={`mx-5 ps-3 ${styles["desc-category"]}`}>Health</h6>
            </div>
          </div>
          <p className={`text-center my-5 ${styles["click-categories"]}`}>We have no category left</p>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Category;
